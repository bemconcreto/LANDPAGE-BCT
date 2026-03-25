import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function CountUp({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <motion.div
      className="stat-number"
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      {count.toLocaleString("pt-BR")}{suffix}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Força scroll pro topo ao carregar/recarregar
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo-bct2.png" />
        <title>Bem Concreto — Como quer ganhar dinheiro com o BEM?</title>
        <meta
          name="description"
          content="Portal oficial Bem Concreto — escolha investir ou vender BEM. Saiba como funciona, timeline e FAQ."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        {/* Grid pattern background */}
        <div className="grid-pattern" aria-hidden="true" />

        {/* Progress bar */}
        <motion.div className="progress-bar" style={{ width: progressWidth }} />

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-inner">
            <img src="/logo-bct2.png" alt="Bem Concreto" className="navbar-logo" />
            <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
              <li><a onClick={() => scrollTo('features')}>Como Funciona</a></li>
              <li><a onClick={() => scrollTo('pool')}>Imóveis</a></li>
              <li><a onClick={() => scrollTo('faq')}>FAQ</a></li>
            </ul>
            <a
              className="navbar-cta"
              href="https://app.bemconcreto.com"
              target="_blank"
              rel="noreferrer"
            >
              Começar agora
            </a>
            <button
              className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>

        {/* HERO */}
        <header className="hero">
          <div className="hero__bg" style={{ backgroundImage: "url('/top-bg.jpg')" }} aria-hidden="true" />
          <div className="hero__overlay" aria-hidden="true" />

          {/* Floating orbs */}
          <div className="hero-orb hero-orb--1" aria-hidden="true" />
          <div className="hero-orb hero-orb--2" aria-hidden="true" />
          <div className="hero-orb hero-orb--3" aria-hidden="true" />

          <svg className="hero-hex" viewBox="0 0 200 200" aria-hidden="true">
            <g fill="none" stroke="rgba(201,168,124,0.12)" strokeWidth="1">
              <path d="M50 10 L90 10 L110 40 L90 70 L50 70 L30 40 Z" transform="translate(60,20) scale(1.6)" />
              <path d="M50 10 L90 10 L110 40 L90 70 L50 70 L30 40 Z" transform="translate(120,10) scale(1.1)" />
              <path d="M50 10 L90 10 L110 40 L90 70 L50 70 L30 40 Z" transform="translate(20,80) scale(0.9)" />
            </g>
          </svg>

          <div className="hero__content">
            {/* BRAND NAME */}
            <motion.div
              className="hero-brand"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hero-brand-bem">BEM</span>
              <span className="hero-brand-concreto">CONCRETO</span>
            </motion.div>

            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="hero-badge-dot" />
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              COMO VOCÊ QUER{" "}
              <span className="highlight">GANHAR DINHEIRO</span>
              {" "}COM O BEM?
            </motion.h1>

            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Invista em ativos reais tokenizados ou torne-se um consultor
              autorizado e multiplique essa ideia. Simples, seguro e transparente.
            </motion.p>

            <motion.div
              className="cta-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a className="btn btn--primary" href="https://app.bemconcreto.com" target="_blank" rel="noreferrer">
                <span>✦</span> INVESTINDO
              </a>
              <a className="btn btn--outline" href="https://consultor.bemconcreto.com" target="_blank" rel="noreferrer">
                VENDENDO <span>→</span>
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-mouse" />
            <span>Scroll</span>
          </div>
        </header>

        {/* STATS BAR */}
        <section className="stats-bar">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div className="stat-item" variants={fadeUp}>
              <CountUp target={3} suffix="+" />
              <div className="stat-label">Imóveis na Pool</div>
            </motion.div>
            <motion.div className="stat-item" variants={fadeUp}>
              <CountUp target={300} suffix="%" />
              <div className="stat-label">Maior Rentabilidade</div>
            </motion.div>
            <motion.div className="stat-item" variants={fadeUp}>
              <CountUp target={100} suffix="" />
              <div className="stat-label">Investimento mínimo (R$)</div>
            </motion.div>
            <motion.div className="stat-item" variants={fadeUp}>
              <CountUp target={4} suffix="%" />
              <div className="stat-label">Comissão Consultor</div>
            </motion.div>
          </motion.div>
        </section>

        {/* MAIN */}
        <main>

          {/* FEATURE CARDS */}
          <section className="features container" id="features">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <span className="section-label">Como funciona</span>
              <h2 className="section-title">Três caminhos para crescer com o BEM</h2>
              <p className="section-subtitle">
                Escolha investir, entender ou vender — e comece sua jornada no mercado imobiliário tokenizado.
              </p>
            </motion.div>

            <motion.div
              className="feature-cards"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              <motion.article className="feature-card" variants={fadeUp}>
                <div className="icon-hex">
                  <img src="/icon-investindo.png" alt="Ícone Investindo" className="icon-img" />
                </div>
                <h4>INVESTINDO</h4>
                <p>
                  Invista em ativos reais, imóveis prontos, lançamentos e incorporações por meio do Bem Concreto Token (BEM).
                </p>
              </motion.article>

              <motion.article className="feature-card" variants={fadeUp}>
                <div className="icon-hex">
                  <img src="/icon-bct.png" alt="Ícone BEM" className="icon-img" />
                </div>
                <h4>O QUE É O BEM?</h4>
                <p>
                  A maior moeda imobiliária, criada para dar liquidez, segurança e rentabilidade ao mercado de imóveis.
                </p>
              </motion.article>

              <motion.article className="feature-card" variants={fadeUp}>
                <div className="icon-hex">
                  <img src="/icon-vendendo.png" alt="Ícone Vendendo" className="icon-img" />
                </div>
                <h4>VENDENDO</h4>
                <p>
                  Torne-se consultor autorizado, faça vendas e receba comissões instantâneas.
                </p>
              </motion.article>
            </motion.div>
          </section>

          {/* BANNER DARK — BCT */}
          <section style={{ padding: "40px 28px" }}>
            <motion.div
              className="banner-dark"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={scaleIn}
            >
              <h3>O QUE É O BEM?</h3>
              <p className="muted">
                Já imaginou participar da valorização de todos os imóveis que o BEM adquire?
                Com o Bem Concreto Token isso acontece na prática.{"\n\n"}
                O BEM é uma moeda digital lastreada em ativos reais.
                Cada imóvel comprado e tokenizado aumenta o ecossistema e valoriza automaticamente seus BEMs.
              </p>
            </motion.div>
          </section>

          {/* POOL — IMÓVEIS */}
          <section className="pool-section" id="pool">
            <div className="container">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
              >
                <span className="section-label">Portfólio</span>
                <h2 className="section-title">Imóveis dentro da nossa Pool</h2>
                <p className="section-subtitle">
                  Cada imóvel adquirido fortalece o ecossistema BEM e valoriza seu investimento automaticamente.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="pool-wrapper"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              <motion.div className="pool-card" variants={fadeUp}>
                <div className="pool-img-wrap">
                  <div className="pool-img" style={{ backgroundImage: "url('/imagem-4.jpg')" }} />
                </div>
                <div className="pool-body">
                  <h3 className="pool-title">Casa térrea em condomínio</h3>
                  <p className="pool-info"><b>Valor investido:</b> R$ 1.100.000,00</p>
                  <p className="pool-info"><b>Valor mercado:</b> R$ 1.600.000,00</p>
                  <div className="pool-rent">Rentabilidade: 45%</div>
                </div>
              </motion.div>

              <motion.div className="pool-card" variants={fadeUp}>
                <div className="pool-img-wrap">
                  <div className="pool-img" style={{ backgroundImage: "url('/imagem-2.jpg')" }} />
                </div>
                <div className="pool-body">
                  <h3 className="pool-title">Studio Zona Sul SP</h3>
                  <p className="pool-info"><b>Valor investido:</b> R$ 175.100,00</p>
                  <p className="pool-info"><b>Valor mercado:</b> R$ 278.100,00</p>
                  <div className="pool-rent">Rentabilidade: 59%</div>
                </div>
              </motion.div>

              <motion.div className="pool-card" variants={fadeUp}>
                <div className="pool-img-wrap">
                  <div className="pool-img" style={{ backgroundImage: "url('/imagem-3.jpg')" }} />
                </div>
                <div className="pool-body">
                  <h3 className="pool-title">Participação em incorporação</h3>
                  <p className="pool-info"><b>Valor investido:</b> R$ 2.000.000,00</p>
                  <p className="pool-info"><b>Valor mercado:</b> R$ 8.000.000,00</p>
                  <div className="pool-rent">Rentabilidade: 300%</div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* CONTENT BLOCK — IMAGE + Text */}
          <section className="content-block">
            <div className="content-grid">
              <motion.div
                className="content-img-wrap"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={slideLeft}
              >
                <div className="content-img" style={{ backgroundImage: "url('/imagem-5.jpg')" }} />
              </motion.div>

              <motion.div
                className="content-text"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={slideRight}
              >
                <span className="section-label">Oportunidade</span>
                <h3>Você pode ganhar investindo, ou vendendo ou melhor, fazendo os dois!</h3>
                <p className="muted">
                  Escolha o caminho que mais combina com você. Investidores veem seu capital crescer, 
                  consultores recebem comissões reais. E o melhor: os dois caminhos se complementam.
                </p>
              </motion.div>
            </div>
          </section>

          {/* DUO SECTION */}
          <section className="duo-section">
            <div className="container">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
              >
                <span className="section-label">Escolha seu caminho</span>
                <h2 className="section-title">Investir ou Vender?</h2>
                <div className="glow-line" />
              </motion.div>
            </div>

            <motion.div
              className="duo-wrapper"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
              style={{ padding: "0 28px" }}
            >
              <motion.div className="duo-card" variants={fadeUp}>
                <div className="duo-icon">📈</div>
                <h3 className="duo-title">Investir</h3>
                <p>Invista e veja seu capital crescer com novos imóveis entrando na pool. Rentabilidade real, lastreada em ativos concretos.</p>
                <a href="https://app.bemconcreto.com" className="duo-btn" target="_blank" rel="noreferrer">
                  Quero investir <span>→</span>
                </a>
              </motion.div>

              <motion.div className="duo-card" variants={fadeUp}>
                <div className="duo-icon">🤝</div>
                <h3 className="duo-title">Vender</h3>
                <p>Torne-se consultor autorizado e receba comissões entre 2% e 4% sobre cada venda realizada.</p>
                <a href="https://consultor.bemconcreto.com" className="duo-btn" target="_blank" rel="noreferrer">
                  Quero vender <span>→</span>
                </a>
              </motion.div>
            </motion.div>
          </section>

          {/* FAQ */}
          <section className="faq container" id="faq">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <span className="section-label">Dúvidas</span>
              <h2 className="section-title">Perguntas Frequentes</h2>
              <p className="section-subtitle">
                Tudo o que você precisa saber antes de começar.
              </p>
            </motion.div>

            <motion.div
              className="faq-list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              <motion.details variants={fadeUp}>
                <summary>Qual investimento mínimo?</summary>
                <p>A partir de R$100,00 você já compra BEMs e começa a participar da valorização dos imóveis da pool.</p>
              </motion.details>

              <motion.details variants={fadeUp}>
                <summary>Qual a rentabilidade do BEM?</summary>
                <p>O BEM valoriza com o mercado cripto e imobiliário. Nossos imóveis já registram rentabilidades de até 300%.</p>
              </motion.details>

              <motion.details variants={fadeUp}>
                <summary>Existe prazo para resgatar?</summary>
                <p>Sim, o prazo de liquidação é de 180 dias, garantindo estabilidade para todo o ecossistema.</p>
              </motion.details>

              <motion.details variants={fadeUp}>
                <summary>Como funciona a comissão?</summary>
                <p>4% para consultores certificados e 2% para não certificados. Pagamento direto e transparente.</p>
              </motion.details>
            </motion.div>
          </section>

        </main>

        {/* FOOTER CTA */}
        <section className="footer-cta">
          <div className="footer-cta-orb" aria-hidden="true" />
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <h2>Pronto para começar com o BEM?</h2>
              <p>Escolha investir, vender — ou os dois. Sua jornada começa agora.</p>
              <div className="cta-row">
                <a className="btn btn--primary" href="https://app.bemconcreto.com" target="_blank" rel="noreferrer">
                  <span>✦</span> INVESTINDO
                </a>
                <a className="btn btn--outline" href="https://consultor.bemconcreto.com" target="_blank" rel="noreferrer">
                  VENDENDO <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER BOTTOM */}
        <footer className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="small">© {new Date().getFullYear()} Bem Concreto — Todos os direitos reservados</p>
            <div className="footer-links">
              <a href="#">Termos</a>
              <a href="#">Privacidade</a>
              <a href="#">Contato</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
