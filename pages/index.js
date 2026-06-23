import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { getImoveis, formatReal, getRoiInfo } from "../lib/cerebro";
import SiteFooter from "../components/SiteFooter";

const FALLBACK_IMAGES = ["/imagem-2.jpg", "/imagem-3.jpg", "/imagem-4.jpg"];

const FALLBACK_IMOVEIS = [
  {
    slug: null,
    nome: "Casa térrea em condomínio",
    localizacao: "",
    valorCompra: 1100000,
    valorMercado: 1600000,
    valorizacaoAcumulada: 0.4545,
    roiProjetado: null,
    roiRealizado: null,
    imagemUrl: "/imagem-4.jpg",
  },
  {
    slug: null,
    nome: "Studio Zona Sul SP",
    localizacao: "",
    valorCompra: 175100,
    valorMercado: 278100,
    valorizacaoAcumulada: 0.5877,
    roiProjetado: null,
    roiRealizado: null,
    imagemUrl: "/imagem-2.jpg",
  },
  {
    slug: null,
    nome: "Participação em incorporação",
    localizacao: "",
    valorCompra: 2000000,
    valorMercado: 8000000,
    valorizacaoAcumulada: 3,
    roiProjetado: null,
    roiRealizado: null,
    imagemUrl: "/imagem-3.jpg",
  },
];

const DOCUMENTOS_HOME = [
  { titulo: "Whitepaper BEM", arquivo: "/whitepaper" },
  { titulo: "Contrato de Adesão", arquivo: "/contrato-adesao" },
  { titulo: "Termos de Uso", arquivo: "/termos" },
  { titulo: "Política de Privacidade", arquivo: "/privacidade" },
  { titulo: "Aviso de Riscos", arquivo: "/aviso-riscos" },
  { titulo: "Documento Mestre BEM", arquivo: "/docs/documento-mestre-bct.pdf" },
  { titulo: "Estatuto dos Conselhos Institucionais", arquivo: "/docs/estatuto-conselhos-institucionais.pdf" },
  { titulo: "Estatuto Operacional", arquivo: "/docs/estatuto-operacional.pdf" },
  { titulo: "Memorando de Captação", arquivo: "/docs/memorando-captacao.pdf" },
  { titulo: "Regulamento Geral das RPEs", arquivo: "/docs/regulamento-geral-rpes.pdf" },
];

const CONSELHEIROS = [
  {
    area: "Governança",
    nome: null,
    credencial: null,
    foto: null,
    descricao: "Supervisiona regras, políticas e a conformidade do ecossistema BEM.",
  },
  {
    area: "Tecnológico",
    nome: null,
    credencial: null,
    foto: null,
    descricao: "Conduz a infraestrutura blockchain, segurança e evolução do token.",
  },
  {
    area: "Jurídico",
    nome: "Dr. Artur Moraes",
    credencial: "Advogado | OAB/SP — desde 2007",
    foto: "/conselheiros/artur-moraes.jpg",
    instagram: "@armoraes.adv",
    descricao: "Advogado com mais de 17 anos de experiência em Direito Civil, Processo Civil, LGPD e Direito Imobiliário. Responsável pela estrutura legal do ecossistema BEM: contratos, conformidade regulatória, proteção de dados e segurança jurídica dos investidores.",
  },
  {
    area: "Financeiro",
    nome: null,
    credencial: null,
    foto: null,
    descricao: "Gerencia tesouraria, precificação e a saúde financeira da pool.",
  },
];

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

export async function getServerSideProps() {
  const imoveis = await getImoveis();
  return { props: { imoveis } };
}

export default function Home({ imoveis }) {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [menuOpen, setMenuOpen] = useState(false);

  const poolImoveis = imoveis && imoveis.length > 0 ? imoveis.slice(0, 3) : FALLBACK_IMOVEIS;

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
        <title>Bem Concreto — Invista em Imóveis Tokenizados a partir de R$100</title>
        <meta name="description" content="Invista em imóveis de alto padrão com o token BEM a partir de R$100. Tokenização imobiliária real, segura e acessível." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bem Concreto" />
        <meta property="og:url" content="https://www.bemconcreto.com" />
        <meta property="og:title" content="Bem Concreto — Invista em Imóveis Tokenizados a partir de R$100" />
        <meta property="og:description" content="Invista em imóveis de alto padrão com o token BEM a partir de R$100. Tokenização imobiliária real, segura e acessível." />
        <meta property="og:image" content="https://www.bemconcreto.com/top-bg.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bemconcreto" />
        <meta name="twitter:title" content="Bem Concreto — Invista em Imóveis Tokenizados a partir de R$100" />
        <meta name="twitter:description" content="Invista em imóveis de alto padrão com o token BEM a partir de R$100. Tokenização imobiliária real, segura e acessível." />
        <meta name="twitter:image" content="https://www.bemconcreto.com/top-bg.jpg" />
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
              <CountUp target={120} suffix="%" />
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
                <h2 className="section-title">Imóveis Tokenizados na nossa Pool</h2>
                <p className="section-subtitle">
                  Cada imóvel adquirido fortalece o ecossistema BEM e valoriza seu investimento automaticamente. Confira valor de aquisição, valor de mercado e ROI de cada ativo.
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
              {poolImoveis.map((imovel, index) => {
                const { label: roiLabel } = getRoiInfo(imovel);
                const imagem = imovel.imagemUrl || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];

                const card = (
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
                );

                return imovel.slug ? (
                  <Link href={`/imoveis/${imovel.slug}`} className="pool-card-link" key={imovel.slug}>
                    {card}
                  </Link>
                ) : (
                  <div key={imovel.nome}>{card}</div>
                );
              })}
            </motion.div>

            <motion.div
              className="pool-cta"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Link href="/imoveis" className="btn btn--primary">
                Ver todos os imóveis <span>→</span>
              </Link>
            </motion.div>
          </section>

          {/* DOCUMENTOS — TRANSPARÊNCIA */}
          <section className="docs-section" id="documentos">
            <div className="container">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
              >
                <span className="section-label">Transparência</span>
                <h2 className="section-title">Documentos do Ecossistema BEM</h2>
                <p className="section-subtitle">
                  Acesse os principais documentos institucionais e jurídicos do Bem Concreto Token.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="docs-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {DOCUMENTOS_HOME.map((doc) => (
                <motion.a
                  key={doc.arquivo}
                  href={doc.arquivo}
                  target="_blank"
                  rel="noreferrer"
                  className="doc-card"
                  variants={fadeUp}
                >
                  <div className="doc-icon">📄</div>
                  <h4>{doc.titulo}</h4>
                  <span className="doc-link">Abrir documento →</span>
                </motion.a>
              ))}
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
                <div className="content-img-placeholder">
                  <img src="/icon-bct.png" alt="Tokenização imobiliária BEM" className="content-img-icon" />
                </div>
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

          {/* CONSELHO CONSULTIVO */}
          <section className="advisors-section container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <span className="section-label">Conselho Consultivo</span>
              <h2 className="section-title">Quem orienta o ecossistema BEM</h2>
              <p className="section-subtitle">
                Quatro frentes especializadas garantem governança, segurança e solidez para investidores e consultores.
              </p>
            </motion.div>

            <motion.div
              className="advisors-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {CONSELHEIROS.map((conselheiro) => (
                <motion.div
                  className={`advisor-card${conselheiro.foto ? " has-photo" : ""}`}
                  variants={fadeUp}
                  key={conselheiro.area}
                >
                  {conselheiro.foto && (
                    <img src={conselheiro.foto} alt={conselheiro.nome} className="advisor-photo" />
                  )}
                  <span className="advisor-area">{conselheiro.area}</span>
                  <h4 className="advisor-name">{conselheiro.nome || "A definir"}</h4>
                  {conselheiro.credencial && (
                    <p className="advisor-credencial">{conselheiro.credencial}</p>
                  )}
                  <p>{conselheiro.descricao}</p>
                  {conselheiro.instagram && (
                    <a
                      href={`https://instagram.com/${conselheiro.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-instagram"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      {conselheiro.instagram}
                    </a>
                  )}
                </motion.div>
              ))}
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
                <p>O BEM valoriza com o mercado cripto e imobiliário. Nossos imóveis já registram rentabilidades de até 120%.</p>
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
        <SiteFooter />
      </div>
    </>
  );
}
