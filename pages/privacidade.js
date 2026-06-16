import DocLayout from "../components/DocLayout";

export default function PoliticaPrivacidade() {
  return (
    <DocLayout titulo="Política de Privacidade" versao="1.0" dataAtualizacao="Junho de 2026">

      <div className="doc-highlight">
        Esta Política de Privacidade descreve como a Bem Concreto coleta, utiliza, armazena e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
      </div>

      {/* 1 */}
      <h2 className="doc-section">1. Identificação do Controlador</h2>
      <p className="doc-p">
        O controlador dos dados pessoais tratados nesta política é a <strong>Bem Concreto Token Ltda.</strong>, inscrita no CNPJ sob o nº 37.566.745/0001-22, operadora das plataformas digitais disponíveis nos domínios bemconcreto.com, app.bemconcreto.com, consultor.bemconcreto.com e certificacao.bemconcreto.com.
      </p>

      {/* 2 */}
      <h2 className="doc-section">2. Dados que Coletamos</h2>
      <h3 className="doc-sub">2.1 Dados fornecidos pelo Usuário</h3>
      <ul className="doc-list">
        <li>Nome completo</li>
        <li>Endereço de e-mail</li>
        <li>CPF ou CNPJ</li>
        <li>Número de telefone (quando informado)</li>
        <li>Dados bancários para fins de saque (quando fornecidos)</li>
        <li>Foto de perfil (quando fornecida via Google)</li>
      </ul>
      <h3 className="doc-sub">2.2 Dados coletados automaticamente</h3>
      <ul className="doc-list">
        <li>Endereço IP e localização geográfica aproximada</li>
        <li>Tipo de dispositivo, sistema operacional e navegador</li>
        <li>Páginas acessadas, tempo de sessão e ações realizadas na plataforma</li>
        <li>Dados de transações (compras, vendas, saques e histórico)</li>
        <li>Logs de autenticação e acesso</li>
      </ul>
      <h3 className="doc-sub">2.3 Dados de terceiros</h3>
      <p className="doc-p">
        Quando o Usuário autentica via Google OAuth, recebemos nome, e-mail e foto de perfil conforme autorizado pelo Usuário no momento do login. Quando autentica via Web3Auth, recebemos o endereço da carteira blockchain.
      </p>

      {/* 3 */}
      <h2 className="doc-section">3. Finalidade do Tratamento</h2>
      <table className="doc-table">
        <thead>
          <tr><th>Finalidade</th><th>Dados utilizados</th></tr>
        </thead>
        <tbody>
          <tr><td>Criação e gestão de conta</td><td>Nome, e-mail, CPF/CNPJ</td></tr>
          <tr><td>Processamento de pagamentos</td><td>CPF/CNPJ, e-mail, valor da transação</td></tr>
          <tr><td>Processamento de saques</td><td>Dados bancários, CPF/CNPJ</td></tr>
          <tr><td>Prevenção a fraudes e conformidade</td><td>IP, dispositivo, histórico de transações</td></tr>
          <tr><td>Comunicação com o Usuário</td><td>E-mail, telefone</td></tr>
          <tr><td>Melhoria dos serviços</td><td>Dados de uso e navegação (anonimizados)</td></tr>
          <tr><td>Cumprimento de obrigações legais</td><td>CPF/CNPJ, histórico financeiro</td></tr>
        </tbody>
      </table>

      {/* 4 */}
      <h2 className="doc-section">4. Base Legal (LGPD)</h2>
      <p className="doc-p">O tratamento de dados pela Bem Concreto fundamenta-se nas seguintes bases legais:</p>
      <ul className="doc-list">
        <li><strong>Execução de contrato</strong> (Art. 7º, V): para processar compras, vendas e saques;</li>
        <li><strong>Legítimo interesse</strong> (Art. 7º, IX): para prevenção a fraudes e melhoria dos serviços;</li>
        <li><strong>Cumprimento de obrigação legal</strong> (Art. 7º, II): para atender exigências de compliance e autoridades;</li>
        <li><strong>Consentimento</strong> (Art. 7º, I): para comunicações de marketing, quando aplicável.</li>
      </ul>

      {/* 5 */}
      <h2 className="doc-section">5. Compartilhamento de Dados</h2>
      <p className="doc-p">A Bem Concreto não vende dados pessoais. Compartilhamos dados apenas nas seguintes situações:</p>
      <ul className="doc-list">
        <li><strong>Asaas:</strong> gateway de pagamentos, para processamento de PIX e cartão de crédito;</li>
        <li><strong>Supabase:</strong> plataforma de banco de dados e autenticação, com servidores no Brasil e/ou EUA;</li>
        <li><strong>Google:</strong> para autenticação via OAuth 2.0;</li>
        <li><strong>Autoridades governamentais:</strong> quando exigido por lei, ordem judicial ou regulamentação aplicável;</li>
        <li><strong>Parceiros de auditoria:</strong> dados anonimizados para fins de conformidade e relatórios.</li>
      </ul>
      <p className="doc-p">
        Todos os parceiros são contratualmente obrigados a proteger os dados conforme a LGPD e regulamentos equivalentes.
      </p>

      {/* 6 */}
      <h2 className="doc-section">6. Retenção de Dados</h2>
      <p className="doc-p">
        Os dados pessoais são retidos pelo tempo necessário para cumprir as finalidades descritas nesta política, observados os prazos legais mínimos:
      </p>
      <ul className="doc-list">
        <li><strong>Dados de conta ativa:</strong> pelo período em que o Usuário mantiver conta ativa;</li>
        <li><strong>Dados de transações financeiras:</strong> mínimo de 5 anos, conforme legislação tributária;</li>
        <li><strong>Dados de acesso e logs:</strong> até 6 meses, salvo necessidade legal;</li>
        <li><strong>Após encerramento de conta:</strong> dados mínimos mantidos pelo prazo legal aplicável.</li>
      </ul>

      {/* 7 */}
      <h2 className="doc-section">7. Seus Direitos como Titular (LGPD)</h2>
      <p className="doc-p">Nos termos da LGPD, você tem direito a:</p>
      <ul className="doc-list">
        <li><strong>Confirmação e acesso:</strong> saber quais dados seus tratamos e obter cópia;</li>
        <li><strong>Correção:</strong> solicitar a atualização de dados incorretos ou incompletos;</li>
        <li><strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários, excessivos ou tratados em desconformidade;</li>
        <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado para transferência a outro serviço;</li>
        <li><strong>Revogação do consentimento:</strong> quando o tratamento for baseado em consentimento;</li>
        <li><strong>Oposição:</strong> ao tratamento baseado em legítimo interesse que lhe cause prejuízo;</li>
        <li><strong>Informação:</strong> sobre com quem compartilhamos seus dados.</li>
      </ul>
      <p className="doc-p">
        Para exercer seus direitos, entre em contato via WhatsApp <strong>(11) 96586-2850</strong>. Responderemos em até 15 dias úteis.
      </p>

      {/* 8 */}
      <h2 className="doc-section">8. Cookies e Tecnologias Similares</h2>
      <p className="doc-p">
        Utilizamos cookies essenciais para o funcionamento da plataforma (sessão, autenticação e segurança). Não utilizamos cookies de rastreamento publicitário de terceiros.
      </p>
      <table className="doc-table">
        <thead>
          <tr><th>Tipo</th><th>Finalidade</th><th>Obrigatório</th></tr>
        </thead>
        <tbody>
          <tr><td>Sessão</td><td>Manter o Usuário autenticado</td><td>Sim</td></tr>
          <tr><td>Segurança</td><td>Proteção contra CSRF e ataques</td><td>Sim</td></tr>
          <tr><td>Preferências</td><td>Salvar configurações do Usuário</td><td>Não</td></tr>
        </tbody>
      </table>

      {/* 9 */}
      <h2 className="doc-section">9. Segurança</h2>
      <p className="doc-p">
        Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo:
      </p>
      <ul className="doc-list">
        <li>Criptografia em trânsito (TLS 1.3) em todas as comunicações;</li>
        <li>Criptografia em repouso nos bancos de dados;</li>
        <li>Autenticação multifator via OAuth e Web3Auth;</li>
        <li>Acesso restrito aos dados por princípio do menor privilégio;</li>
        <li>Monitoramento contínuo de acessos suspeitos.</li>
      </ul>
      <p className="doc-p">
        Em caso de incidente de segurança que possa afetar seus direitos, notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os Usuários afetados no prazo legal.
      </p>

      {/* 10 */}
      <h2 className="doc-section">10. Transferência Internacional</h2>
      <p className="doc-p">
        Alguns de nossos provedores de serviço (Supabase, Google) processam dados em servidores nos Estados Unidos. Essas transferências são realizadas com garantias adequadas, incluindo cláusulas contratuais de proteção de dados compatíveis com a LGPD.
      </p>

      {/* 11 */}
      <h2 className="doc-section">11. Crianças e Adolescentes</h2>
      <p className="doc-p">
        A plataforma Bem Concreto não é destinada a menores de 18 anos. Não coletamos intencionalmente dados de menores. Caso identifiquemos o cadastro de menor de idade, a conta será encerrada e os dados eliminados.
      </p>

      {/* 12 */}
      <h2 className="doc-section">12. Alterações nesta Política</h2>
      <p className="doc-p">
        Esta Política pode ser atualizada periodicamente. A versão vigente sempre estará disponível em www.bemconcreto.com/privacidade com a data de última atualização. Alterações relevantes serão comunicadas por e-mail ou notificação na plataforma.
      </p>

      {/* 13 */}
      <h2 className="doc-section">13. Contato e Encarregado (DPO)</h2>
      <p className="doc-p">
        Para exercer seus direitos, tirar dúvidas ou registrar reclamações sobre o tratamento de dados:
      </p>
      <ul className="doc-list">
        <li><strong>WhatsApp:</strong> (11) 96586-2850</li>
        <li><strong>Plataforma:</strong> app.bemconcreto.com</li>
        <li><strong>CNPJ:</strong> 37.566.745/0001-22</li>
      </ul>
      <p className="doc-p">
        Caso não obtenha resposta satisfatória, você pode acionar a Autoridade Nacional de Proteção de Dados (ANPD) pelo portal <strong>www.gov.br/anpd</strong>.
      </p>

    </DocLayout>
  );
}
