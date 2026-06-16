import DocLayout from "../components/DocLayout";

export default function AvisoRiscos() {
  return (
    <DocLayout titulo="Aviso de Riscos" versao="1.0" dataAtualizacao="Junho de 2026">

      <div className="doc-highlight">
        <strong>LEIA COM ATENÇÃO.</strong> Este documento descreve os principais riscos associados ao investimento em Bem Concreto Token (BEM). Investir envolve riscos, incluindo a possibilidade de perda total do capital investido. Não invista valores que não possa perder.
      </div>

      {/* 1 */}
      <h2 className="doc-section">1. Declaração Geral</h2>
      <p className="doc-p">
        O Bem Concreto Token (BEM) é um ativo digital de natureza especulativa. O desempenho passado de ativos imobiliários ou do próprio BEM não garante rentabilidade futura. Antes de investir, o Usuário deve avaliar seu perfil de risco, situação financeira e objetivos de longo prazo.
      </p>
      <p className="doc-p">
        A Bem Concreto não é uma instituição financeira regulada pelo Banco Central do Brasil nem pela Comissão de Valores Mobiliários (CVM). O BEM não é um valor mobiliário, criptoativo de emissão regulamentada nem produto de investimento garantido pelo Fundo Garantidor de Créditos (FGC).
      </p>

      {/* 2 */}
      <h2 className="doc-section">2. Risco de Mercado</h2>
      <p className="doc-p">
        O valor do BEM pode oscilar para cima ou para baixo, influenciado por:
      </p>
      <ul className="doc-list">
        <li>Variações no mercado imobiliário brasileiro (oferta, demanda, taxas de juros);</li>
        <li>Condições macroeconômicas (inflação, PIB, desemprego);</li>
        <li>Sentimento do mercado de criptoativos em geral;</li>
        <li>Mudanças na percepção de valor do portfólio de imóveis.</li>
      </ul>
      <p className="doc-p">
        Não há garantia de que o BEM manterá ou aumentará seu valor ao longo do tempo.
      </p>

      {/* 3 */}
      <h2 className="doc-section">3. Risco de Liquidez</h2>
      <p className="doc-p">
        O investidor deve estar ciente de que:
      </p>
      <ul className="doc-list">
        <li>O prazo de liquidação para venda de BEM é de até <strong>180 dias corridos</strong>;</li>
        <li>Não há mercado secundário garantido para negociação do BEM fora da plataforma;</li>
        <li>Em cenários de stress financeiro, a liquidez da plataforma pode ser reduzida temporariamente;</li>
        <li>Saques podem levar até 5 dias úteis para processamento.</li>
      </ul>
      <p className="doc-p">
        O BEM não é adequado para investidores que possam necessitar do capital no curto prazo.
      </p>

      {/* 4 */}
      <h2 className="doc-section">4. Risco Cambial</h2>
      <p className="doc-p">
        O BEM é precificado em dólares americanos (USD). Embora as transações sejam realizadas em reais (BRL), o valor dos tokens em reais está sujeito à variação da taxa de câmbio USD/BRL:
      </p>
      <ul className="doc-list">
        <li>Uma desvalorização do dólar frente ao real reduz o valor dos BEMs em reais;</li>
        <li>Uma valorização do dólar aumenta o valor em reais.</li>
      </ul>
      <p className="doc-p">
        O Investidor assume integralmente o risco cambial inerente ao investimento em BEM.
      </p>

      {/* 5 */}
      <h2 className="doc-section">5. Risco Regulatório</h2>
      <p className="doc-p">
        O mercado de ativos digitais no Brasil ainda está em processo de regulamentação. Mudanças regulatórias futuras podem:
      </p>
      <ul className="doc-list">
        <li>Impor restrições à emissão, negociação ou custódia do BEM;</li>
        <li>Exigir adequações na estrutura operacional da Bem Concreto;</li>
        <li>Resultar em obrigações tributárias adicionais para o Investidor;</li>
        <li>Em casos extremos, inviabilizar a operação da plataforma na forma atual.</li>
      </ul>
      <p className="doc-p">
        A Bem Concreto acompanha ativamente o ambiente regulatório e adota as medidas de conformidade necessárias.
      </p>

      {/* 6 */}
      <h2 className="doc-section">6. Risco Imobiliário</h2>
      <p className="doc-p">
        O lastro do BEM está diretamente vinculado ao desempenho do portfólio imobiliário. Os imóveis da pool estão sujeitos a:
      </p>
      <ul className="doc-list">
        <li>Desvalorização por condições de mercado local ou regional;</li>
        <li>Vacância, inadimplência de locatários ou dificuldade de revenda;</li>
        <li>Problemas estruturais, de documentação ou questões ambientais;</li>
        <li>Desapropriações ou restrições urbanísticas por parte do poder público;</li>
        <li>Oscilações nos preços de imóveis em decorrência de crises econômicas.</li>
      </ul>

      {/* 7 */}
      <h2 className="doc-section">7. Risco Tecnológico</h2>
      <p className="doc-p">
        A plataforma Bem Concreto depende de infraestrutura tecnológica que pode estar sujeita a:
      </p>
      <ul className="doc-list">
        <li>Ataques cibernéticos (hacking, phishing, ransomware);</li>
        <li>Falhas em contratos inteligentes (smart contracts) na rede Polygon;</li>
        <li>Indisponibilidade de provedores de serviço (Supabase, Asaas, Google);</li>
        <li>Bugs ou vulnerabilidades de software não detectados;</li>
        <li>Obsolescência tecnológica ou descontinuação de protocolos utilizados.</li>
      </ul>
      <p className="doc-p">
        A Bem Concreto mantém práticas de segurança robustas, mas não pode garantir imunidade total a incidentes tecnológicos.
      </p>

      {/* 8 */}
      <h2 className="doc-section">8. Risco de Concentração</h2>
      <p className="doc-p">
        O portfólio de imóveis que lastreia o BEM pode estar concentrado em determinada região geográfica ou tipo de ativo. Uma crise localizada no mercado imobiliário de São Paulo, por exemplo, pode impactar desproporcionalmente o valor do portfólio e, consequentemente, do BEM.
      </p>

      {/* 9 */}
      <h2 className="doc-section">9. Risco Operacional</h2>
      <p className="doc-p">
        Inclui riscos decorrentes de falhas nos processos internos da Bem Concreto, como:
      </p>
      <ul className="doc-list">
        <li>Erros no processamento de pagamentos ou crédito de tokens;</li>
        <li>Falhas nos sistemas de compliance e prevenção à lavagem de dinheiro;</li>
        <li>Dependência de pessoas-chave na gestão da plataforma;</li>
        <li>Erros em cálculos de preço, taxa ou saldo.</li>
      </ul>

      {/* 10 */}
      <h2 className="doc-section">10. Risco de Perda Total</h2>
      <p className="doc-p">
        Em cenários extremos, é possível que o Investidor perca a totalidade do capital investido em BEM. Situações que poderiam levar a esse cenário incluem: crise severa no mercado imobiliário, incidente cibernético de grande escala, mudança regulatória proibitiva ou insolvência da Bem Concreto.
      </p>
      <div className="doc-highlight">
        <strong>Invista apenas o que você pode perder.</strong> O BEM não é adequado como reserva de emergência nem como único investimento.
      </div>

      {/* 11 */}
      <h2 className="doc-section">11. Perfil de Investidor Adequado</h2>
      <p className="doc-p">
        O BEM é mais adequado para investidores que:
      </p>
      <ul className="doc-list">
        <li>Possuem horizonte de investimento de longo prazo (acima de 2 anos);</li>
        <li>Aceitam volatilidade e possibilidade de perda parcial ou total;</li>
        <li>Compreendem o funcionamento de ativos digitais e do mercado imobiliário;</li>
        <li>Não dependem dos valores investidos para necessidades de curto prazo;</li>
        <li>Têm outros investimentos em portfólio diversificado.</li>
      </ul>

      {/* 12 */}
      <h2 className="doc-section">12. Declaração de Ciência</h2>
      <p className="doc-p">
        Ao realizar sua primeira compra de BEM, o Investidor declara expressamente que:
      </p>
      <ul className="doc-list">
        <li>Leu e compreendeu este Aviso de Riscos na integra;</li>
        <li>Está ciente de todos os riscos descritos e de outros inerentes ao mercado;</li>
        <li>Tomou sua decisão de investimento de forma autônoma e informada;</li>
        <li>Não recebeu promessa ou garantia de rentabilidade por parte da Bem Concreto;</li>
        <li>Tem capacidade financeira para suportar eventuais perdas.</li>
      </ul>
      <p className="doc-p">
        Para esclarecimentos adicionais antes de investir, entre em contato via WhatsApp <strong>(11) 96586-2850</strong>.
      </p>

    </DocLayout>
  );
}
