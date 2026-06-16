import DocLayout from "../components/DocLayout";

export default function TermosDeUso() {
  return (
    <DocLayout titulo="Termos de Uso" versao="1.0" dataAtualizacao="Junho de 2026">

      <div className="doc-highlight">
        Ao criar uma conta ou utilizar a plataforma Bem Concreto (app.bemconcreto.com), você concorda com estes Termos de Uso. Leia com atenção antes de prosseguir.
      </div>

      {/* 1 */}
      <h2 className="doc-section">1. Aceitação dos Termos</h2>
      <p className="doc-p">
        Estes Termos de Uso ("Termos") regulam o acesso e uso da plataforma digital Bem Concreto, operada pela <strong>Bem Concreto Token Ltda.</strong> (CNPJ 37.566.745/0001-22), disponível em app.bemconcreto.com e demais subdomínios associados (consultor.bemconcreto.com, certificacao.bemconcreto.com).
      </p>
      <p className="doc-p">
        Ao acessar, criar conta ou realizar qualquer operação na plataforma, o Usuário declara ter lido, entendido e concordado integralmente com estes Termos. Caso não concorde, não utilize a plataforma.
      </p>

      {/* 2 */}
      <h2 className="doc-section">2. Descrição do Serviço</h2>
      <p className="doc-p">A Bem Concreto oferece:</p>
      <ul className="doc-list">
        <li><strong>Para Investidores:</strong> compra, custódia e venda do Bem Concreto Token (BEM), ativo digital lastreado em imóveis reais;</li>
        <li><strong>Para Consultores:</strong> acesso a painel de vendas, indicações, comissões e suporte comercial;</li>
        <li><strong>Para Alunos:</strong> módulos educacionais, prova e certificação profissional em investimentos imobiliários tokenizados;</li>
        <li><strong>Para todos:</strong> transparência das subcontas do ecossistema e portfólio de imóveis auditável.</li>
      </ul>

      {/* 3 */}
      <h2 className="doc-section">3. Cadastro e Conta</h2>
      <h3 className="doc-sub">3.1 Requisitos</h3>
      <p className="doc-p">
        O cadastro é permitido a maiores de 18 anos, pessoas físicas com CPF válido ou pessoas jurídicas com CNPJ ativo. É proibido criar contas com dados de terceiros ou informações falsas.
      </p>
      <h3 className="doc-sub">3.2 Segurança</h3>
      <p className="doc-p">
        O Usuário é responsável pela segurança de suas credenciais de acesso. A Bem Concreto não solicita senhas por nenhum canal de comunicação. Em caso de acesso suspeito, o Usuário deve contatar imediatamente o suporte.
      </p>
      <h3 className="doc-sub">3.3 Veracidade das Informações</h3>
      <p className="doc-p">
        O Usuário garante a veracidade de todas as informações fornecidas — incluindo CPF/CNPJ, dados bancários e documentos — e se compromete a mantê-las atualizadas.
      </p>

      {/* 4 */}
      <h2 className="doc-section">4. Uso Aceitável</h2>
      <p className="doc-p">É permitido ao Usuário:</p>
      <ul className="doc-list">
        <li>Comprar, vender e acompanhar BEMs para fins de investimento pessoal ou empresarial lícito;</li>
        <li>Indicar terceiros como consultor autorizado, conforme regras do programa;</li>
        <li>Utilizar os conteúdos educacionais para fins de aprendizado pessoal;</li>
        <li>Compartilhar seu link de indicação por canais digitais pessoais.</li>
      </ul>

      {/* 5 */}
      <h2 className="doc-section">5. Uso Proibido</h2>
      <p className="doc-p">É expressamente proibido ao Usuário:</p>
      <ul className="doc-list">
        <li>Utilizar a plataforma para lavagem de dinheiro, financiamento ao terrorismo ou qualquer atividade ilícita;</li>
        <li>Criar múltiplas contas com a finalidade de burlar regras ou obter vantagens indevidas;</li>
        <li>Realizar engenharia reversa, decompilação ou qualquer ataque à infraestrutura da plataforma;</li>
        <li>Publicar conteúdo falso, enganoso ou que induza terceiros a erro sobre o produto BEM;</li>
        <li>Ceder, vender ou transferir a conta a terceiros sem autorização expressa da Bem Concreto;</li>
        <li>Realizar raspagem de dados (scraping) ou acesso automatizado não autorizado;</li>
        <li>Interferir na estabilidade, disponibilidade ou segurança da plataforma.</li>
      </ul>

      {/* 6 */}
      <h2 className="doc-section">6. Transações Financeiras</h2>
      <p className="doc-p">
        Todas as transações realizadas na plataforma estão sujeitas às condições do Contrato de Adesão, disponível em www.bemconcreto.com/contrato-adesao. As principais condições são:
      </p>
      <table className="doc-table">
        <thead>
          <tr><th>Parâmetro</th><th>Condição</th></tr>
        </thead>
        <tbody>
          <tr><td>Compra mínima</td><td>R$ 100,00</td></tr>
          <tr><td>Taxa de venda</td><td>10% sobre o valor bruto</td></tr>
          <tr><td>Prazo de liquidação</td><td>até 180 dias corridos</td></tr>
          <tr><td>Prazo de saque</td><td>até 5 dias úteis</td></tr>
        </tbody>
      </table>

      {/* 7 */}
      <h2 className="doc-section">7. Propriedade Intelectual</h2>
      <p className="doc-p">
        Todo o conteúdo da plataforma — incluindo marca, logotipo, textos, imagens, código-fonte, design e materiais educacionais — é de propriedade exclusiva da Bem Concreto ou de seus licenciadores, protegido pela Lei nº 9.279/1996 (Propriedade Industrial) e pela Lei nº 9.610/1998 (Direitos Autorais).
      </p>
      <p className="doc-p">
        O Usuário recebe uma licença limitada, não exclusiva e intransferível para uso pessoal da plataforma. Qualquer reprodução, distribuição ou uso comercial não autorizado é proibido.
      </p>

      {/* 8 */}
      <h2 className="doc-section">8. Isenção e Limitação de Responsabilidade</h2>
      <p className="doc-p">A Bem Concreto não se responsabiliza por:</p>
      <ul className="doc-list">
        <li>Perdas decorrentes de variação do preço do BEM ou da taxa de câmbio;</li>
        <li>Indisponibilidade temporária da plataforma por manutenção ou falha técnica;</li>
        <li>Falhas em serviços de terceiros (Supabase, Asaas, Polygon, provedores de internet);</li>
        <li>Decisões de investimento do Usuário baseadas em expectativas não garantidas;</li>
        <li>Atos de terceiros que acessem a conta por descuido do próprio Usuário.</li>
      </ul>

      {/* 9 */}
      <h2 className="doc-section">9. Disponibilidade do Serviço</h2>
      <p className="doc-p">
        A Bem Concreto envidará seus melhores esforços para manter a plataforma disponível 24 horas por dia, 7 dias por semana. No entanto, não garante disponibilidade ininterrupta. Manutenções programadas serão comunicadas com antecedência sempre que possível.
      </p>

      {/* 10 */}
      <h2 className="doc-section">10. Privacidade</h2>
      <p className="doc-p">
        O tratamento de dados pessoais do Usuário é regido pela Política de Privacidade, disponível em www.bemconcreto.com/privacidade, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      {/* 11 */}
      <h2 className="doc-section">11. Alterações nos Termos</h2>
      <p className="doc-p">
        A Bem Concreto pode alterar estes Termos a qualquer momento, publicando a versão atualizada na plataforma com indicação da data de revisão e aviso com 30 dias de antecedência para alterações materiais. A continuidade de uso da plataforma após o prazo implica aceite das mudanças.
      </p>

      {/* 12 */}
      <h2 className="doc-section">12. Encerramento de Conta</h2>
      <p className="doc-p">
        O Usuário pode solicitar o encerramento de sua conta a qualquer tempo pelo suporte. O encerramento não cancela operações em andamento. A Bem Concreto pode suspender ou encerrar contas que violem estes Termos, sem aviso prévio em casos de fraude.
      </p>

      {/* 13 */}
      <h2 className="doc-section">13. Lei Aplicável e Foro</h2>
      <p className="doc-p">
        Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer controvérsias, salvo disposição legal em contrário.
      </p>

      {/* 14 */}
      <h2 className="doc-section">14. Contato</h2>
      <p className="doc-p">
        Para dúvidas, reclamações ou sugestões sobre estes Termos, entre em contato:
      </p>
      <ul className="doc-list">
        <li><strong>WhatsApp:</strong> (11) 96586-2850</li>
        <li><strong>Plataforma:</strong> app.bemconcreto.com</li>
      </ul>

    </DocLayout>
  );
}
