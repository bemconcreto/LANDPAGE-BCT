import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="logo-bct2.png" href="/logo-bct2.png" />
        <title>Bem Concreto — Como quer ganhar dinheiro com o BCT?</title>
        <meta
          name="description"
          content="Portal oficial Bem Concreto — escolha investir ou vender BCT. Saiba como funciona, timeline e FAQ."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">

        {/* TOP BACKGROUND */}
        <div className="top-bg"></div>

        {/* HERO */}
        <header className="hero">
          <div
            className="hero__bg"
            style={{ backgroundImage: "url('/hero.jpg')" }}
            aria-hidden="true"
          />

          <div className="hero__overlay" aria-hidden="true" />

          <div className="hero__content container">
            <motion.h1
              className="hero-title"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              COMO VOCÊ QUER GANHAR DINHEIRO COM O BCT?
            </motion.h1>

            <motion.p
              className="lead"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              Invista em ativos reais tokenizados ou torne-se um consultor
              autorizado e multiplique essa ideia. Simples, seguro e transparente.
            </motion.p>

            <motion.div
              className="cta-row"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <a
                className="btn btn--primary"
                href="https://app.bemconcreto.com"
                target="_blank"
                rel="noreferrer"
              >
                INVESTINDO
              </a>
              <a
                className="btn btn--outline"
                href="https://consultor.bemconcreto.com"
                target="_blank"
                rel="noreferrer"
              >
                VENDENDO
              </a>
            </motion.div>
          </div>

          {/* HEX DECOR */}
          <svg className="hero-hex" viewBox="0 0 200 200" aria-hidden="true">
            <g fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
              <path
                d="M50 10 L90 10 L110 40 L90 70 L50 70 L30 40 Z"
                transform="translate(60,20) scale(1.6)"
              />
              <path
                d="M50 10 L90 10 L110 40 L90 70 L50 70 L30 40 Z"
                transform="translate(120,10) scale(1.1)"
              />
            </g>
          </svg>
        </header>

        {/* MAIN */}
        <main className="main container">

          {/* FEATURE CARDS */}
          <section className="features">
            <motion.div
              className="feature-cards"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <article className="feature-card">
                <div className="icon-hex">
                  <img
                    src="/icon-investindo.png"
                    alt="Ícone Investindo"
                    className="icon-img"
                  />
                </div>
                <h4>INVESTINDO</h4>
                <p>
                  Invista em ativos reais, imóveis prontos, lançamentos e incorporações por meio do Bem Concreto Token (BCT).
                </p>
              </article>

              <article className="feature-card">
                <div className="icon-hex">
                  <img src="/icon-bct.png" alt="Ícone BCT" className="icon-img" />
                </div>
                <h4>O QUE É O BCT?</h4>
                <p>
                  A maior moeda imobiliária, criada para dar liquidez, segurança e rentabilidade ao mercado de imóveis.
                </p>
              </article>

              <article className="feature-card">
                <div className="icon-hex">
                  <img
                    src="/icon-vendendo.png"
                    alt="Ícone Vendendo"
                    className="icon-img"
                  />
                </div>
                <h4>VENDENDO</h4>
                <p>
                  Torne-se consultor autorizado, faça vendas e receba comissões instantâneas.
                </p>
              </article>
            </motion.div>
          </section>

          {/* BANNER DARK */}
          <section className="banner-dark">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h3>O QUE É O BCT?</h3>
              <p className="muted">
                Já imaginou participar da valorização de todos os imóveis que o BCT adquire?
                Com o Bem Concreto Token isso acontece na prática.{"\n\n"}
                O BCT é uma moeda digital lastreada em ativos reais.
                Cada imóvel comprado e tokenizado aumenta o ecossistema e valoriza automaticamente seus BCTs.
              </p>
            </motion.div>
          </section>

          {/* POOL */}
          <h2 className="section-title">Imóveis dentro da nossa Pool</h2>

          <div className="pool-wrapper">
            <div className="pool-card">
              <div className="pool-img" style={{ backgroundImage: "url('/imagem-1.jpg')" }} />
              <h3 className="pool-title">Casa térrea em condomínio</h3>
              <p><b>Valor investido:</b> R$ 1.100.000,00</p>
              <p><b>Valor mercado:</b> R$ 1.600.000,00</p>
              <p className="pool-rent">Rentabilidade: 45%</p>
            </div>

            <div className="pool-card">
              <div className="pool-img" style={{ backgroundImage: "url('/imagem-2.jpg')" }} />
              <h3 className="pool-title">Studio Zona Sul SP</h3>
              <p><b>Valor investido:</b> R$ 175.100,00</p>
              <p><b>Valor mercado:</b> R$ 278.100,00</p>
              <p className="pool-rent">Rentabilidade: 59%</p>
            </div>

            <div className="pool-card">
              <div className="pool-img" style={{ backgroundImage: "url('/imagem-3.jpg')" }} />
              <h3 className="pool-title">Participação em incorporação</h3>
              <p><b>Valor investido:</b> R$ 2.000.000,00</p>
              <p><b>Valor mercado:</b> R$ 8.000.000,00</p>
              <p className="pool-rent">Rentabilidade: 300%</p>
            </div>
          </div>

          {/* IMAGE + TEXT */}
          <section className="content-block container-block" style={{ marginTop: 36 }}>
            <motion.div className="img-left" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="img-wrap">
                <div className="img-sim" style={{ backgroundImage: "url('/hero.jpg')" }} />
              </div>
            </motion.div>
          </section>

          <motion.div className="text-right" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h3>Você pode ganhar investindo, ou vendendo — ou melhor, fazendo os dois!</h3>
            <p className="muted">Escolha o caminho que mais combina com você.</p>
          </motion.div>

          {/* DUO SECTION */}
          <section className="duo-section">
            <div className="duo-wrapper">

              <div className="duo-card">
                <h3 className="duo-title">Investir</h3>
                <p>Invista e veja seu capital crescer com novos imóveis entrando na pool.</p>
                <a href="https://app.bemconcreto.com" className="duo-btn">Quero investir</a>
              </div>

              <div className="duo-card">
                <h3 className="duo-title">Vender</h3>
                <p>Torne-se consultor e receba comissões entre 2% e 4%.</p>
                <a href="https://consultor.bemconcreto.com" className="duo-btn">Quero vender</a>
              </div>

            </div>
          </section>

          {/* FAQ */}
          <section className="faq" style={{ marginTop: 15 }}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h4>Perguntas Frequentes</h4>

              <details>
                <summary>Qual investimento mínimo?</summary>
                <p>A partir de R$100,00 você já compra BCTs.</p>
              </details>

              <details>
                <summary>Qual a rentabilidade do BCT?</summary>
                <p>O BCT valoriza com o mercado cripto e imobiliário.</p>
              </details>

              <details>
                <summary>Existe prazo para resgatar?</summary>
                <p>Sim, o prazo de liquidação é de 180 dias.</p>
              </details>

              <details>
                <summary>Como funciona a comissão?</summary>
                <p>4% para consultores certificados e 2% para não certificados.</p>
              </details>
            </motion.div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <motion.h2 initial="hidden" animate="show" variants={fadeUp}>
              COMO VOCÊ QUER GANHAR DINHEIRO COM O BCT?
            </motion.h2>

            <motion.div className="cta-row" initial="hidden" animate="show" variants={fadeUp}>
              <a className="btn btn--primary" href="https://app.bemconcreto.com">INVESTINDO</a>
              <a className="btn btn--outline" href="https://consultor.bemconcreto.com">VENDENDO</a>
            </motion.div>
          </div>
        </footer>

        {/* RODAPÉ FINAL */}
        <p className="small" style={{ textAlign: "center", padding: 20, marginTop: 20 }}>
          © Bem Concreto — Todos os direitos reservados
        </p>

      </div>
    </>
  );
}