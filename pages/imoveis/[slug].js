import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { getImovel, formatReal, getRoiInfo, DOCUMENTO_CATEGORIAS } from "../../lib/cerebro";

const FALLBACK_IMAGE = "/imagem-4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export async function getServerSideProps({ params }) {
  const imovel = await getImovel(params.slug);
  if (!imovel) {
    return { notFound: true };
  }
  return { props: { imovel } };
}

function ImovelGallery({ fotos }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = fotos.length;

  const goTo = (index) => setActiveIndex((index + total) % total);

  return (
    <div className="imovel-gallery">
      <div
        className="imovel-detail-img"
        style={{ backgroundImage: `url('${fotos[activeIndex]}')` }}
      >
        {total > 1 && (
          <>
            <button
              type="button"
              className="imovel-gallery-arrow imovel-gallery-arrow--prev"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="imovel-gallery-arrow imovel-gallery-arrow--next"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Próxima foto"
            >
              ›
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="imovel-gallery-thumbs">
          {fotos.map((url, index) => (
            <button
              type="button"
              key={url + index}
              className={`imovel-gallery-thumb${index === activeIndex ? " imovel-gallery-thumb--active" : ""}`}
              style={{ backgroundImage: `url('${url}')` }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver foto ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ImovelDetailPage({ imovel }) {
  const { value: roiValue } = getRoiInfo(imovel);
  const roiTipo =
    imovel.roiRealizado != null ? "ROI realizado" : imovel.roiProjetado != null ? "ROI projetado" : "ROI";
  const valorizacaoPct = Math.round((imovel.valorizacaoAcumulada || 0) * 100);
  const galeria =
    imovel.imagens?.length > 0
      ? imovel.imagens.map((img) => img.url).filter(Boolean)
      : [];
  const fotos = galeria.length > 0 ? galeria : [imovel.imagemUrl || FALLBACK_IMAGE];
  const capaOg = imovel.imagens?.[0]?.url ?? imovel.imagemUrl;
  const documentos = imovel.documentos || {};

  const categorias = DOCUMENTO_CATEGORIAS.filter(
    ({ key }) => documentos[key] && documentos[key].length > 0
  );

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo-bct2.png" />
        <title>{imovel.nome} — Bem Concreto</title>
        <meta
          name="description"
          content={`${imovel.nome} — valor de aquisição, valor de mercado, ROI e documentos.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bem Concreto" />
        <meta property="og:url" content={`https://www.bemconcreto.com/imoveis/${imovel.slug}`} />
        <meta property="og:title" content={`${imovel.nome} — Bem Concreto`} />
        <meta property="og:description" content={`${imovel.nome} — valor de aquisição, valor de mercado, ROI e documentos.`} />
        <meta property="og:image" content={capaOg || "https://www.bemconcreto.com/top-bg.jpg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${imovel.nome} — Bem Concreto`} />
        <meta name="twitter:image" content={capaOg || "https://www.bemconcreto.com/top-bg.jpg"} />
      </Head>

      <div className="page">
        <div className="grid-pattern" aria-hidden="true" />
        <SiteHeader />

        <main>
          <section className="imovel-detail container">
            <Link href="/imoveis" className="back-link">← Voltar para imóveis</Link>

            <motion.div
              className="imovel-detail-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <ImovelGallery fotos={fotos} />

              <div className="imovel-detail-info">
                {imovel.localizacao && <span className="section-label">{imovel.localizacao}</span>}
                <h1 className="section-title">{imovel.nome}</h1>
                {imovel.descricao && <p className="muted">{imovel.descricao}</p>}

                <div className="imovel-kpi-grid">
                  <div className="imovel-kpi">
                    <span>Valor de aquisição</span>
                    <strong>{formatReal(imovel.valorCompra)}</strong>
                  </div>
                  <div className="imovel-kpi">
                    <span>Valor de mercado</span>
                    <strong>{formatReal(imovel.valorMercado)}</strong>
                  </div>
                  <div className="imovel-kpi">
                    <span>Valorização acumulada</span>
                    <strong>{valorizacaoPct}%</strong>
                  </div>
                  <div className="imovel-kpi">
                    <span>{roiTipo}</span>
                    <strong>{roiValue}%</strong>
                  </div>
                  {imovel.dataAquisicao && (
                    <div className="imovel-kpi">
                      <span>Data de aquisição</span>
                      <strong>{new Date(imovel.dataAquisicao).toLocaleDateString("pt-BR")}</strong>
                    </div>
                  )}
                  {imovel.percentualPool != null && (
                    <div className="imovel-kpi">
                      <span>% da Pool</span>
                      <strong>{imovel.percentualPool}%</strong>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="imovel-docs"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <h2 className="section-title">Documentos</h2>

              {categorias.length === 0 ? (
                <p className="imovel-docs-empty">
                  Nenhum documento disponível para este imóvel no momento.
                </p>
              ) : (
                categorias.map(({ key, label }) => (
                  <div className="doc-category" key={key}>
                    <p className="doc-category-label">{label}</p>
                    <div className="doc-pills">
                      {documentos[key].map((doc, idx) => (
                        <a
                          key={idx}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="doc-pill"
                        >
                          📄 {doc.nome || "Documento"}
                        </a>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
