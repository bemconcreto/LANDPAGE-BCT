import DocLayout from "../components/DocLayout";

export default function ContratoAdesao() {
  return (
    <DocLayout titulo="Contrato de Adesão" versao="1.0" dataAtualizacao="Junho de 2026">

      <div className="doc-highlight">
        Este Contrato de Adesão regula a relação entre o Investidor e a Bem Concreto Token para aquisição, custódia e negociação do Bem Concreto Token (BEM). Ao realizar sua primeira compra na plataforma, o Investidor declara ter lido, compreendido e concordado com todos os termos aqui estabelecidos.
      </div>

      {/* 1 */}
      <h2 className="doc-section">Cláusula 1 — Das Partes</h2>
      <h3 className="doc-sub">1.1 Contratada</h3>
      <p className="doc-p">
        <strong>Bem Concreto Token Ltda.</strong>, inscrita no CNPJ sob o nº 37.566.745/0001-22, com plataforma digital disponível em app.bemconcreto.com, doravante denominada simplesmente <strong>"Bem Concreto"</strong>.
      </p>
      <h3 className="doc-sub">1.2 Contratante (Investidor)</h3>
      <p className="doc-p">
        Pessoa física ou jurídica que, após aceite eletrônico neste contrato, realiza operações de compra, venda e custódia de BEM na plataforma Bem Concreto, doravante denominado <strong>"Investidor"</strong>.
      </p>

      {/* 2 */}
      <h2 className="doc-section">Cláusula 2 — Do Objeto</h2>
      <p className="doc-p">
        O presente contrato tem por objeto a prestação de serviços pela Bem Concreto ao Investidor, consistindo em:
      </p>
      <ul className="doc-list">
        <li>Emissão e venda do Bem Concreto Token (BEM), ativo digital lastreado em portfólio imobiliário;</li>
        <li>Custódia digital dos BEMs adquiridos pelo Investidor;</li>
        <li>Intermediação da venda dos BEMs pelo Investidor, conforme condições estabelecidas neste instrumento;</li>
        <li>Acesso à plataforma digital para acompanhamento de saldo, histórico e portfólio de imóveis.</li>
      </ul>

      {/* 3 */}
      <h2 className="doc-section">Cláusula 3 — Das Condições de Adesão</h2>
      <h3 className="doc-sub">3.1 Elegibilidade</h3>
      <p className="doc-p">Para aderir a este contrato, o Investidor deve:</p>
      <ul className="doc-list">
        <li>Ser pessoa física maior de 18 anos, ou pessoa jurídica devidamente constituída;</li>
        <li>Possuir CPF ou CNPJ válido e ativo na Receita Federal;</li>
        <li>Criar uma conta na plataforma mediante autenticação válida (Google ou Web3Auth);</li>
        <li>Aceitar eletronicamente os Termos de Uso e a Política de Privacidade da plataforma.</li>
      </ul>
      <h3 className="doc-sub">3.2 Aceite Eletrônico</h3>
      <p className="doc-p">
        O aceite deste contrato ocorre no momento em que o Investidor conclui sua primeira compra de BEM na plataforma. O registro da transação, associado ao CPF/CNPJ e à conta autenticada, constitui prova do aceite.
      </p>

      {/* 4 */}
      <h2 className="doc-section">Cláusula 4 — Da Compra de BEM</h2>
      <h3 className="doc-sub">4.1 Valor Mínimo</h3>
      <p className="doc-p">
        O valor mínimo de compra é de <strong>R$ 100,00 (cem reais)</strong> por operação.
      </p>
      <h3 className="doc-sub">4.2 Meios de Pagamento</h3>
      <p className="doc-p">
        A compra pode ser realizada via PIX ou cartão de crédito, ambos processados pelo gateway Asaas, parceiro certificado pela Banco Central do Brasil.
      </p>
      <h3 className="doc-sub">4.3 Preço e Cotação</h3>
      <p className="doc-p">
        O BEM é precificado em dólares americanos (U$ 0,60 por BEM na emissão) e convertido para reais pela cotação do dólar comercial vigente no momento da compra. A quantidade de BEMs recebidos é calculada automaticamente pela plataforma.
      </p>
      <h3 className="doc-sub">4.4 Crédito dos Tokens</h3>
      <p className="doc-p">
        Após confirmação do pagamento pelo gateway, os BEMs são creditados automaticamente na carteira digital do Investidor, sem necessidade de ação adicional.
      </p>

      {/* 5 */}
      <h2 className="doc-section">Cláusula 5 — Da Venda de BEM</h2>
      <h3 className="doc-sub">5.1 Solicitação</h3>
      <p className="doc-p">
        O Investidor pode solicitar a venda de BEMs a qualquer tempo, informando a quantidade desejada na seção "Vender" da plataforma.
      </p>
      <h3 className="doc-sub">5.2 Taxa de Venda</h3>
      <p className="doc-p">
        Sobre o valor bruto de cada venda incide uma taxa de <strong>10% (dez por cento)</strong>, retida pela Bem Concreto para cobrir custos operacionais, de liquidez e administrativos.
      </p>
      <h3 className="doc-sub">5.3 Prazo de Liquidação</h3>
      <p className="doc-p">
        O prazo de liquidação e crédito do valor líquido na carteira BRL do Investidor é de até <strong>180 (cento e oitenta) dias corridos</strong>, contados da data da solicitação de venda. Este prazo garante estabilidade ao ecossistema e à pool de imóveis.
      </p>
      <h3 className="doc-sub">5.4 Preço na Data da Venda</h3>
      <p className="doc-p">
        O preço de venda do BEM é o preço vigente no dia em que a solicitação é processada, convertido pela cotação USD/BRL do momento da liquidação.
      </p>

      {/* 6 */}
      <h2 className="doc-section">Cláusula 6 — Do Saque</h2>
      <p className="doc-p">
        O saldo em reais disponível na carteira BRL do Investidor — proveniente exclusivamente de vendas de BEM liquidadas — pode ser sacado a qualquer momento mediante solicitação na plataforma. O prazo de processamento do saque é de até 5 (cinco) dias úteis.
      </p>

      {/* 7 */}
      <h2 className="doc-section">Cláusula 7 — Das Obrigações do Investidor</h2>
      <p className="doc-p">O Investidor se compromete a:</p>
      <ul className="doc-list">
        <li>Fornecer informações verdadeiras, atualizadas e completas no cadastro e nas operações;</li>
        <li>Manter a confidencialidade de suas credenciais de acesso;</li>
        <li>Não utilizar a plataforma para lavagem de dinheiro, financiamento ao terrorismo ou qualquer atividade ilícita;</li>
        <li>Cumprir as obrigações tributárias decorrentes de seus ganhos, sendo o Investidor o único responsável pela declaração e recolhimento de impostos;</li>
        <li>Não realizar engenharia reversa, scraping ou qualquer ação que comprometa a integridade da plataforma.</li>
      </ul>

      {/* 8 */}
      <h2 className="doc-section">Cláusula 8 — Das Obrigações da Bem Concreto</h2>
      <p className="doc-p">A Bem Concreto se compromete a:</p>
      <ul className="doc-list">
        <li>Manter o lastro do BEM em ativos imobiliários reais, conforme distribuição divulgada publicamente;</li>
        <li>Disponibilizar informações atualizadas sobre o portfólio de imóveis e a distribuição das subcontas;</li>
        <li>Processar compras, vendas e saques conforme os prazos estabelecidos neste contrato;</li>
        <li>Proteger os dados pessoais do Investidor conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018);</li>
        <li>Disponibilizar suporte ao Investidor pelos canais oficiais da plataforma.</li>
      </ul>

      {/* 9 */}
      <h2 className="doc-section">Cláusula 9 — Da Limitação de Responsabilidade</h2>
      <p className="doc-p">
        A Bem Concreto não se responsabiliza por perdas decorrentes de: (i) variação do preço do BEM motivada por condições de mercado; (ii) variação cambial USD/BRL; (iii) falhas em serviços de terceiros (gateways, provedores de blockchain, internet); (iv) decisões de investimento do próprio Investidor; (v) eventos de força maior ou caso fortuito.
      </p>

      {/* 10 */}
      <h2 className="doc-section">Cláusula 10 — Da Rescisão</h2>
      <p className="doc-p">
        Este contrato pode ser encerrado pelo Investidor a qualquer tempo, mediante solicitação de venda de todos os BEMs e saque do saldo disponível. A Bem Concreto pode suspender ou encerrar uma conta em caso de violação deste contrato, uso fraudulento ou determinação judicial, sem prejuízo das operações em curso.
      </p>

      {/* 11 */}
      <h2 className="doc-section">Cláusula 11 — Das Alterações</h2>
      <p className="doc-p">
        A Bem Concreto pode alterar as condições deste contrato mediante aviso prévio de 30 (trinta) dias, publicado na plataforma. A continuidade de uso da plataforma após o prazo implica aceite das novas condições.
      </p>

      {/* 12 */}
      <h2 className="doc-section">Cláusula 12 — Do Foro e Lei Aplicável</h2>
      <p className="doc-p">
        Este contrato é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer controvérsias oriundas deste instrumento, renunciando as partes a qualquer outro, por mais privilegiado que seja.
      </p>

    </DocLayout>
  );
}
