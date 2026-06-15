export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-bottom">
      <div className="footer-bottom-inner">
        <div>
          <p className="small">© {year} Bem Concreto — Todos os direitos reservados</p>
          <p className="small">CNPJ: 37.566.745/0001-22</p>
        </div>
        <div className="footer-links">
          <a href="#">Termos</a>
          <a href="#">Privacidade</a>
          <a href="#">Contato</a>
        </div>
      </div>
    </footer>
  );
}
