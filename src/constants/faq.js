export const faqSection = {
  intro:
    'Tire suas dúvidas sobre portabilidade, compra de dívida, cartões, contrato novo, margem consignável e simulação.',
}

export const faqItems = [
  {
    id: 'collapseOne',
    heading: 'headingOne',
    question: 'O que é crédito consignado?',
    answer:
      'É um empréstimo em que a parcela é descontada automaticamente do benefício (INSS) ou do salário, quando houver convênio. Por ter desconto em folha ou benefício, costuma oferecer condições mais acessíveis que linhas sem consignação.',
    defaultOpen: true,
  },
  {
    id: 'collapseTwo',
    heading: 'headingTwo',
    question: 'O que é portabilidade de empréstimo consignado?',
    answer:
      'É a transferência do seu contrato para outra instituição financeira que ofereça melhores condições. O objetivo é reduzir juros, diminuir a parcela e, em alguns casos, liberar crédito adicional — sempre após análise da operação.',
  },
  {
    id: 'collapseThree',
    heading: 'headingThree',
    question: 'O que é compra de dívida?',
    answer:
      'É a quitação de um ou mais contratos por uma nova instituição financeira. Dependendo da análise, você pode unificar parcelas, reorganizar suas finanças e ainda receber um valor adicional em conta.',
  },
  {
    id: 'collapseFour',
    heading: 'headingFour',
    question: 'Como funciona a compra de cartão benefício?',
    answer:
      'Se você possui saldo devedor no Cartão Benefício, analisamos a quitação desse saldo por meio de uma nova operação de crédito, buscando condições mais vantajosas e melhor organização do seu orçamento.',
  },
  {
    id: 'collapseFive',
    heading: 'headingFive',
    question: 'Como funciona a compra de cartão consignado?',
    answer:
      'Permite quitar o saldo utilizado no cartão consignado e transformar essa dívida em condições mais favoráveis, facilitando o controle das suas finanças e o planejamento das parcelas.',
  },
  {
    id: 'collapseSix',
    heading: 'headingSix',
    question: 'O que é contrato novo?',
    answer:
      'É a contratação de um novo empréstimo consignado para quem tem margem disponível. Após simulação, análise e aprovação da instituição financeira, o valor é liberado diretamente na conta do cliente.',
  },
  {
    id: 'collapseSeven',
    heading: 'headingSeven',
    question: 'O que é margem consignável?',
    answer:
      'É o percentual máximo do benefício ou salário que pode ser comprometido com parcelas de consignado, conforme regras do INSS ou do órgão conveniado. Só é possível contratar dentro desse limite. A EMC - Consig ajuda a entender quanto da margem já está em uso.',
  },
  {
    id: 'collapseEight',
    heading: 'headingEight',
    question: 'Fazer simulação compromete o nome ou gera consulta no Serasa?',
    answerHtml: true,
    answer:
      'Uma <strong>simulação inicial</strong> com a EMC - Consig serve para entender cenários; não é a mesma coisa que enviar proposta formal ao banco. Consultas de crédito (quando existirem) costumam ocorrer na etapa de análise da instituição financeira, e você é orientado antes disso.',
  },
  {
    id: 'collapseNine',
    heading: 'headingNine',
    question: 'Quais documentos costumo precisar?',
    answer:
      'Documento de identidade, CPF, comprovante de residência e dados do benefício ou vínculo empregatício são os mais comuns. Extrato do INSS ou contracheque podem ser solicitados conforme o produto. Informamos a lista exata antes de qualquer envio.',
  },
  {
    id: 'collapseTen',
    heading: 'headingTen',
    question: 'O atendimento é em todo o Brasil?',
    answer:
      'Sim. A EMC - Consig atende clientes de todo o Brasil por WhatsApp e canais digitais. Produtos e condições podem variar conforme o seu vínculo e margem — a simulação considera o seu perfil.',
  },
]

const half = Math.ceil(faqItems.length / 2)

export const faqColuna1 = faqItems.slice(0, half)
export const faqColuna2 = faqItems.slice(half)
