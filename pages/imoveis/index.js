import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { getImoveis, formatReal, getRoiInfo } from "../../lib/cerebro";

const FALLBACK_IMAGES = ["/imagem-2.jpg", "/imagem-3.jpg", "/imagem-4.jpg"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export async function getServerSideProps() {
  const imoveis = await getImoveis();
  return { props: { imoveis } };
}

export default function ImoveisPage({ imoveis }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo-bct2.png" />
        <title>Imóveis Tokenizados — Bem Concreto</title>
        <meta
          name="description"
          content="Conheça os imóveis tokenizados da pool Bem Concreto: valor de aquisição, valor de mercado, ROI e documentos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        <div className="grid-pattern" aria-hidden="true" />
        <SiteHeader />

        <main>
          <section className="page-header container">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Portfólio</span>
              <h1 className="section-title">Imóveis Tokenizados</h1>
              <p className="section-subtitle">
                Veja valor de aquisição, valor de mercado, ROI e documentos de cada imóvel que compõe a pool do BEM.
              </p>
            </motion.div>
          </section>

          <section className="pool-section">
            {imoveis.length === 0 ? (
              <p className="imoveis-empty">Nenhum imóvel disponível no momento.</p>
            ) : (
              <motion.div
                className="pool-wrapper"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={stagger}
              >
                {imoveis.map((imovel, index) => {
                  const { label: roiLabel } = getRoiInfo(imovel);
                  const imagem = imovel.imagemUrl || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];

                  return (
                    <Link href={`/imoveis/${imovel.slug}`} className="pool-card-link" key={imovel.slug}>
                      <motion.div className="pool-card" variants={fadeUp}>
                        <div className="pool-img-wrap">
                          <div className="pool-img" style={{ backgroundImage: `url('${imagem}')` }} />
                        </div>
                        <div className="pool-body">
                          <h3 className="pool-title">{imovel.nome}</h3>
                          {imovel.localizacao && <p className="pool-location">{imovel.localizacao}</p>}
                          <p className="pool-info"><b>Valor de aquisição:</b> {formatReal(imovel.valorCompra)}</p>
                          <p className="pool-info"><b>Valor de mercado:</b> {formatReal(imovel.valorMercado)}</p>
                          <div className="pool-rent">{roiLabel}</div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
