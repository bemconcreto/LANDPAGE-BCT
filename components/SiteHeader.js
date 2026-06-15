import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/">
          <img src="/logo-bct2.png" alt="Bem Concreto" className="navbar-logo" />
        </Link>
        <ul className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Início</Link></li>
          <li><Link href="/imoveis" onClick={() => setMenuOpen(false)}>Imóveis</Link></li>
          <li><Link href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
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
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
