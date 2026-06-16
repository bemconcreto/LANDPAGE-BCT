import Head from "next/head";
import Link from "next/link";

export default function DocLayout({ titulo, versao, dataAtualizacao, children }) {
  return (
    <>
      <Head>
        <title>{titulo} — Bem Concreto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo-bct2.png" />
        <style>{`
          @media print {
            .no-print { display: none !important; }
            body { font-size: 12pt; }
            .doc-body { max-width: 100% !important; padding: 0 !important; }
          }
        `}</style>
      </Head>

      <div style={{ minHeight: "100vh", background: "#F7F8F9", fontFamily: "'Inter', sans-serif" }}>

        {/* Header */}
        <div className="no-print" style={{
          background: "linear-gradient(135deg, #141420 0%, #1a1a2e 60%, #0f1a28 100%)",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <img src="/logo-bct2.png" alt="Bem Concreto" style={{ height: "36px" }} />
          </Link>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button
              onClick={() => window.print()}
              style={{
                background: "rgba(203,163,92,0.15)",
                border: "1px solid rgba(203,163,92,0.3)",
                color: "#CBA35C",
                padding: "8px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              ↓ Salvar como PDF
            </button>
            <Link href="/#documentos" style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "13px",
              textDecoration: "none",
            }}>
              ← Todos os documentos
            </Link>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="doc-body" style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 32px 80px" }}>

          {/* Título do documento */}
          <div style={{
            borderBottom: "2px solid #CBA35C",
            paddingBottom: "24px",
            marginBottom: "40px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <img src="/logo-bct2.png" alt="" style={{ height: "28px" }} />
              <span style={{ color: "#9CA3AF", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Bem Concreto Token — CNPJ 37.566.745/0001-22
              </span>
            </div>
            <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#101820", margin: "12px 0 8px", lineHeight: 1.2 }}>
              {titulo}
            </h1>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {versao && (
                <span style={{ color: "#6B7280", fontSize: "13px" }}>
                  <strong>Versão:</strong> {versao}
                </span>
              )}
              {dataAtualizacao && (
                <span style={{ color: "#6B7280", fontSize: "13px" }}>
                  <strong>Última atualização:</strong> {dataAtualizacao}
                </span>
              )}
            </div>
          </div>

          {/* Corpo do documento */}
          <div style={{ color: "#374151", lineHeight: "1.8", fontSize: "15px" }}>
            {children}
          </div>

          {/* Footer do documento */}
          <div style={{
            marginTop: "60px",
            paddingTop: "24px",
            borderTop: "1px solid #E5E7EB",
            color: "#9CA3AF",
            fontSize: "12px",
            textAlign: "center",
          }}>
            © {new Date().getFullYear()} Bem Concreto Token — CNPJ 37.566.745/0001-22 — Todos os direitos reservados
          </div>
        </div>
      </div>

      <style jsx global>{`
        h2.doc-section {
          font-size: 18px;
          font-weight: 700;
          color: #101820;
          margin: 40px 0 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #E5E7EB;
        }
        h3.doc-sub {
          font-size: 15px;
          font-weight: 700;
          color: #374151;
          margin: 24px 0 8px;
        }
        p.doc-p {
          margin: 0 0 14px;
        }
        ul.doc-list {
          margin: 8px 0 16px 20px;
          padding: 0;
        }
        ul.doc-list li {
          margin-bottom: 6px;
        }
        .doc-highlight {
          background: #FEF3C7;
          border-left: 3px solid #CBA35C;
          padding: 12px 16px;
          border-radius: 0 8px 8px 0;
          margin: 20px 0;
          font-size: 14px;
        }
        .doc-table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0 24px;
          font-size: 14px;
        }
        .doc-table th {
          background: #F7F8F9;
          padding: 10px 14px;
          text-align: left;
          font-weight: 700;
          color: #374151;
          border: 1px solid #E5E7EB;
        }
        .doc-table td {
          padding: 10px 14px;
          border: 1px solid #E5E7EB;
          color: #4B5563;
        }
        .doc-table tr:nth-child(even) td {
          background: #F9FAFB;
        }
      `}</style>
    </>
  );
}
