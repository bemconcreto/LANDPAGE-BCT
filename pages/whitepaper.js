import DocLayout from "../components/DocLayout";

export default function Whitepaper() {
  return (
    <DocLayout titulo="Whitepaper BEM" versao="1.0" dataAtualizacao="Junho de 2026">

      <div className="doc-highlight">
        Este documento apresenta a visão, a tecnologia e o modelo de negócio do Bem Concreto Token (BEM) — a moeda imobiliária digital lastreada em ativos reais.
      </div>

      {/* 1 */}
      <h2 className="doc-section">1. Sumário Executivo</h2>
      <p className="doc-p">
        O Bem Concreto Token (BEM) é um ativo digital que representa participação fracionada no portfólio imobiliário administrado pela Bem Concreto (CNPJ 37.566.745/0001-22). Cada BEM emitido é lastreado por imóveis reais — adquiridos, gerenciados e valorizados pela plataforma — permitindo que qualquer pessoa invista no mercado imobiliário brasileiro a partir de R$ 100,00.
      </p>
      <p className="doc-p">
        O BEM resolve um dos principais problemas do mercado imobiliário: a inacessibilidade. Enquanto a compra de um imóvel exige capital elevado, burocracia extensa e baixa liquidez, o BEM democratiza o acesso por meio da tokenização, oferecendo entrada acessível, transparência total e potencial de valorização real.
      </p>

      {/* 2 */}
      <h2 className="doc-section">2. O Problema</h2>
      <p className="doc-p">O mercado imobiliário brasileiro movimenta trilhões de reais por ano, mas permanece inacessível para a maioria da população por três razões principais:</p>
      <ul className="doc-list">
        <li><strong>Capital elevado:</strong> a entrada mínima para adquirir um imóvel está na casa dos R$ 30.000 a R$ 500.000, excluindo investidores de menor capacidade financeira.</li>
        <li><strong>Baixa liquidez:</strong> imóveis demoram meses ou anos para serem vendidos, prendendo o capital do investidor.</li>
        <li><strong>Burocracia:</strong> escrituras, registros, ITBI, financiamentos e documentação tornam o processo lento e custoso.</li>
      </ul>
      <p className="doc-p">Ao mesmo tempo, o mercado cripto oferece liquidez e acessibilidade, mas carece de lastro real e apresenta alta volatilidade especulativa.</p>

      {/* 3 */}
      <h2 className="doc-section">3. A Solução: O BEM Token</h2>
      <p className="doc-p">
        O BEM combina o melhor dos dois mundos: a tangibilidade e a segurança do mercado imobiliário com a agilidade e acessibilidade do mercado digital.
      </p>
      <h3 className="doc-sub">3.1 Como o BEM é lastreado</h3>
      <p className="doc-p">
        Cada imóvel adquirido pela Bem Concreto é avaliado por perito independente e tem seu valor incorporado ao lastro do token. À medida que o portfólio cresce e os imóveis se valorizam, o valor intrínseco do BEM aumenta automaticamente.
      </p>
      <h3 className="doc-sub">3.2 Preço do BEM</h3>
      <p className="doc-p">
        O BEM é precificado em dólares americanos (USD) e cotado diariamente em reais (BRL) conforme a taxa de câmbio vigente. O preço de emissão inicial é de <strong>U$ 0,60 por BEM</strong>.
      </p>
      <table className="doc-table">
        <thead>
          <tr><th>Parâmetro</th><th>Valor</th></tr>
        </thead>
        <tbody>
          <tr><td>Preço de emissão</td><td>U$ 0,60 por BEM</td></tr>
          <tr><td>Investimento mínimo</td><td>R$ 100,00</td></tr>
          <tr><td>Moeda de referência</td><td>Dólar americano (USD)</td></tr>
          <tr><td>Conversão</td><td>USD → BRL em tempo real</td></tr>
          <tr><td>Taxa de venda</td><td>10% sobre o valor bruto</td></tr>
          <tr><td>Prazo de liquidação</td><td>180 dias</td></tr>
        </tbody>
      </table>

      {/* 4 */}
      <h2 className="doc-section">4. Estrutura Financeira do Ecossistema</h2>
      <p className="doc-p">
        Todo capital captado pela emissão de BEMs é distribuído em quatro subcontas com finalidades específicas, garantindo saúde financeira e transparência ao ecossistema:
      </p>
      <table className="doc-table">
        <thead>
          <tr><th>Subconta</th><th>Alocação</th><th>Finalidade</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Reserva</strong></td><td>20%</td><td>Fundo de segurança e proteção do lastro</td></tr>
          <tr><td><strong>Liquidez</strong></td><td>30%</td><td>Garantia de resgates e liquidez operacional</td></tr>
          <tr><td><strong>Imóveis</strong></td><td>30%</td><td>Aquisição direta de ativos imobiliários</td></tr>
          <tr><td><strong>Custos</strong></td><td>20%</td><td>Operações, taxas e manutenção da plataforma</td></tr>
        </tbody>
      </table>
      <p className="doc-p">
        Todas as subcontas são auditáveis e seus comprovantes estão disponíveis na seção Transparência do aplicativo em <strong>app.bemconcreto.com/transparencia</strong>.
      </p>

      {/* 5 */}
      <h2 className="doc-section">5. Como Investir</h2>
      <p className="doc-p">O processo de investimento é inteiramente digital e ocorre em quatro etapas:</p>
      <ul className="doc-list">
        <li><strong>1. Cadastro:</strong> crie sua conta em app.bemconcreto.com com Google ou Web3Auth.</li>
        <li><strong>2. Compra:</strong> informe o valor em reais (mínimo R$ 100) e escolha PIX ou cartão de crédito.</li>
        <li><strong>3. Crédito:</strong> após confirmação do pagamento, os BEMs são creditados automaticamente na sua carteira digital.</li>
        <li><strong>4. Acompanhamento:</strong> monitore seu saldo, o preço do BEM e o portfólio de imóveis em tempo real.</li>
      </ul>

      {/* 6 */}
      <h2 className="doc-section">6. Como Vender</h2>
      <p className="doc-p">
        O investidor pode solicitar a venda de BEMs a qualquer momento diretamente no aplicativo. O prazo de liquidação é de até <strong>180 dias corridos</strong> a partir da solicitação. Sobre o valor bruto da venda incide uma taxa de <strong>10%</strong>, sendo o valor líquido creditado na carteira BRL do investidor, disponível para saque.
      </p>

      {/* 7 */}
      <h2 className="doc-section">7. Ecossistema de Consultores</h2>
      <p className="doc-p">
        O BEM conta com uma rede de consultores autorizados que ampliam o alcance da plataforma e recebem comissões sobre as vendas realizadas através de seus links de indicação:
      </p>
      <ul className="doc-list">
        <li><strong>Consultor certificado:</strong> 4% de comissão sobre o valor de cada venda indicada</li>
        <li><strong>Consultor não certificado:</strong> 2% de comissão</li>
      </ul>
      <p className="doc-p">
        A certificação é obtida através da plataforma <strong>certificacao.bemconcreto.com</strong>, com módulos educacionais e avaliação online.
      </p>

      {/* 8 */}
      <h2 className="doc-section">8. Tecnologia</h2>
      <h3 className="doc-sub">8.1 Blockchain</h3>
      <p className="doc-p">
        O BEM utiliza a rede <strong>Polygon (MATIC)</strong> para registro e transferência dos tokens, escolhida pela baixa taxa de transação, alta velocidade e compatibilidade com o padrão EVM (Ethereum Virtual Machine).
      </p>
      <h3 className="doc-sub">8.2 Plataforma</h3>
      <p className="doc-p">
        A plataforma é desenvolvida com Next.js (frontend e APIs), Supabase (banco de dados e autenticação) e Asaas (gateway de pagamentos PIX e cartão). Toda comunicação é criptografada (TLS 1.3).
      </p>
      <h3 className="doc-sub">8.3 Autenticação</h3>
      <p className="doc-p">
        O acesso é protegido por autenticação OAuth 2.0 via Google e Web3Auth, eliminando senhas e aumentando a segurança do usuário.
      </p>

      {/* 9 */}
      <h2 className="doc-section">9. Portfólio de Imóveis</h2>
      <p className="doc-p">
        O portfólio atual e histórico de imóveis adquiridos está disponível publicamente em <strong>www.bemconcreto.com/imoveis</strong>, com valor de aquisição, valor de mercado atualizado, ROI realizado e documentação de cada ativo.
      </p>
      <p className="doc-p">
        A seleção de imóveis segue critérios rigorosos: localização estratégica, potencial de valorização, liquidez do mercado local e qualidade da documentação.
      </p>

      {/* 10 */}
      <h2 className="doc-section">10. Governança</h2>
      <p className="doc-p">
        O ecossistema BEM é orientado por um Conselho Consultivo composto por quatro frentes especializadas:
      </p>
      <ul className="doc-list">
        <li><strong>Governança:</strong> supervisão de regras, políticas e conformidade do ecossistema</li>
        <li><strong>Tecnológico:</strong> infraestrutura blockchain, segurança e evolução do token</li>
        <li><strong>Jurídico:</strong> estrutura legal, contratos e conformidade regulatória</li>
        <li><strong>Financeiro:</strong> tesouraria, precificação e saúde financeira da pool</li>
      </ul>

      {/* 11 */}
      <h2 className="doc-section">11. Fatores de Risco</h2>
      <p className="doc-p">
        O investimento em BEM envolve riscos. Recomendamos a leitura do <strong>Aviso de Riscos</strong> disponível em www.bemconcreto.com/aviso-riscos antes de qualquer decisão de investimento. Os principais riscos incluem: risco de mercado, risco de liquidez, risco regulatório, risco tecnológico e risco cambial.
      </p>

      {/* 12 */}
      <h2 className="doc-section">12. Considerações Finais</h2>
      <p className="doc-p">
        O BEM não é um valor mobiliário nem se enquadra como instrumento financeiro regulado pela CVM. Trata-se de um token utilitário lastreado em ativos reais, operado por empresa legalmente constituída no Brasil. A Bem Concreto está comprometida com a evolução contínua do ecossistema, com transparência e com a entrega de valor real a investidores e consultores.
      </p>
      <p className="doc-p">
        Para dúvidas, entre em contato via WhatsApp <strong>(11) 96586-2850</strong> ou acesse <strong>app.bemconcreto.com</strong>.
      </p>

    </DocLayout>
  );
}
