/**
 * Conteúdo do Vértice.
 * Clínica fictícia criada como estudo de caso. Nenhum cirurgião, registro
 * profissional, hospital, certificação ou resultado real é citado.
 * Sem imagem de antes e depois e sem garantia de resultado.
 */

export const clinica = {
  nome: 'Vértice',
  descritor: 'Cirurgia plástica',
}

export const navegacao = [
  { id: 'filosofia', rotulo: 'Filosofia' },
  { id: 'procedimentos', rotulo: 'Procedimentos' },
  { id: 'jornada', rotulo: 'Jornada' },
  { id: 'seguranca', rotulo: 'Segurança' },
  { id: 'duvidas', rotulo: 'Dúvidas' },
]

export const abertura = {
  titulo: 'Uma boa cirurgia começa por uma conversa que pode terminar em não.',
  texto:
    'O Vértice trabalha com planejamento individual e um número limitado de cirurgias por mês. A primeira consulta serve para entender o que incomoda, examinar o que é possível e, quando for o caso, dizer que o procedimento não é indicado agora.',
  chamada: 'Agendar uma consulta',
}

export const filosofia = {
  titulo: 'Como pensamos o trabalho',
  texto:
    'Cirurgia plástica lida com expectativa tanto quanto com técnica. A maior parte da insatisfação em pós-operatório nasce de um desencontro entre o que foi imaginado e o que era possível. Por isso o tempo de consulta aqui é gasto principalmente em alinhar essas duas coisas.',
  principios: [
    {
      titulo: 'O planejamento é individual',
      texto:
        'Não existe procedimento padrão aplicado a todo mundo. Anatomia, histórico de saúde, qualidade de pele e rotina de vida mudam o que é indicado e o que é possível alcançar.',
    },
    {
      titulo: 'Dizer não faz parte',
      texto:
        'Há casos em que o melhor encaminhamento é adiar, tratar outra coisa antes ou não operar. Uma clínica que nunca recusa um caso não está avaliando, está vendendo.',
    },
    {
      titulo: 'Expectativa se discute antes',
      texto:
        'Na consulta conversamos sobre o que o procedimento resolve, o que ele não resolve e o que depende de cicatrização individual. Esse alinhamento é registrado no plano.',
    },
    {
      titulo: 'O pós-operatório é parte da cirurgia',
      texto:
        'O acompanhamento depois é tão determinante quanto o ato cirúrgico. Retornos, cuidados e prazo de recuperação são combinados antes de marcar qualquer data.',
    },
  ],
}

export const procedimentos = {
  titulo: 'Procedimentos',
  intro:
    'Organizados por região. A descrição é geral e a indicação depende de avaliação presencial. Nenhum procedimento tem resultado garantido.',
  grupos: [
    {
      regiao: 'Face',
      itens: [
        { nome: 'Rinoplastia', nota: 'Estrutura e função nasal, avaliadas em conjunto.' },
        { nome: 'Blefaroplastia', nota: 'Pálpebras superiores, inferiores ou ambas.' },
        { nome: 'Ritidoplastia', nota: 'Reposicionamento de tecidos da face e pescoço.' },
        { nome: 'Otoplastia', nota: 'Posição e formato da orelha.' },
        { nome: 'Mentoplastia', nota: 'Projeção do mento, com ou sem implante.' },
      ],
    },
    {
      regiao: 'Mama',
      itens: [
        { nome: 'Mamoplastia de aumento', nota: 'Com implante, após avaliação de medidas e tecido.' },
        { nome: 'Mamoplastia redutora', nota: 'Redução de volume e reposicionamento.' },
        { nome: 'Mastopexia', nota: 'Elevação, com ou sem implante associado.' },
        { nome: 'Correção de assimetria', nota: 'Planejamento específico para cada lado.' },
      ],
    },
    {
      regiao: 'Corpo',
      itens: [
        { nome: 'Abdominoplastia', nota: 'Pele, gordura e parede abdominal.' },
        { nome: 'Lipoaspiração', nota: 'Contorno, não método de emagrecimento.' },
        { nome: 'Cirurgia pós-bariátrica', nota: 'Planejamento em etapas, após peso estável.' },
        { nome: 'Braços e coxas', nota: 'Correção de excesso de pele.' },
      ],
    },
  ],
}

export const jornada = {
  titulo: 'Da primeira consulta ao último retorno',
  etapas: [
    {
      titulo: 'Consulta',
      texto:
        'Exame físico, histórico de saúde, medicações em uso e conversa sobre o que motiva a procura. Nenhuma data é marcada neste encontro.',
    },
    {
      titulo: 'Planejamento',
      texto:
        'Definição da técnica, dos limites do que é possível e dos exames pré-operatórios necessários. Você recebe o plano por escrito e leva para casa.',
    },
    {
      titulo: 'Decisão',
      texto:
        'Um intervalo deliberado entre o plano e a marcação. Esse tempo existe para que a decisão não seja tomada no impulso da consulta.',
    },
    {
      titulo: 'Procedimento',
      texto:
        'Realizado em ambiente hospitalar com equipe completa, incluindo anestesiologista. A internação e o tempo de permanência variam conforme a cirurgia.',
    },
    {
      titulo: 'Acompanhamento',
      texto:
        'Retornos programados ao longo de meses. Cicatriz amadurece devagar, e a avaliação do resultado final leva de seis meses a um ano conforme o procedimento.',
    },
  ],
}

export const seguranca = {
  titulo: 'Decisão responsável',
  intro:
    'Cirurgia plástica é cirurgia. As informações abaixo existem para apoiar a decisão, não para tranquilizar.',
  itens: [
    {
      titulo: 'Todo procedimento tem risco',
      texto:
        'Sangramento, infecção, alteração de sensibilidade, assimetria e cicatriz desfavorável são possibilidades reais em qualquer cirurgia. Os riscos específicos do seu caso são discutidos na consulta e constam do termo de consentimento.',
    },
    {
      titulo: 'Exames pré-operatórios não são formalidade',
      texto:
        'Eles existem para identificar condições que aumentam risco. Em alguns casos, a avaliação leva ao adiamento da cirurgia ou ao encaminhamento para tratar outra condição antes.',
    },
    {
      titulo: 'Ambiente hospitalar e equipe',
      texto:
        'Procedimentos são realizados em ambiente hospitalar, com anestesiologista presente e estrutura para intercorrência. Cirurgia plástica fora desse contexto aumenta risco de forma evitável.',
    },
    {
      titulo: 'Recuperação exige tempo e afastamento',
      texto:
        'O período de afastamento de trabalho e de atividade física é parte do planejamento. Subestimar esse tempo é uma das causas mais comuns de complicação e de insatisfação.',
    },
  ],
}

export const duvidas = [
  {
    pergunta: 'Vocês mostram fotos de antes e depois?',
    resposta:
      'Não. Resultado de outra pessoa não prevê o seu, porque anatomia, qualidade de pele e cicatrização mudam completamente o desfecho. Além disso, a exposição de imagem de paciente em contexto publicitário é restrita pelas normas do Conselho Federal de Medicina. Na consulta discutimos o que é possível para o seu caso, com exame presencial.',
  },
  {
    pergunta: 'Dá para fazer mais de um procedimento na mesma cirurgia?',
    resposta:
      'Em alguns casos sim, mas isso aumenta o tempo de anestesia e o risco. A decisão depende da sua condição clínica e da combinação específica. Quando a associação não é segura, o planejamento é dividido em etapas com intervalo entre elas.',
  },
  {
    pergunta: 'Quanto tempo de afastamento eu preciso?',
    resposta:
      'Varia conforme o procedimento e o tipo de trabalho. De forma geral, atividades leves costumam ser retomadas em alguns dias e atividade física em semanas a meses. O prazo estimado para o seu caso é definido no planejamento, antes de marcar a data.',
  },
  {
    pergunta: 'Como fica a cicatriz?',
    resposta:
      'Toda cirurgia deixa cicatriz. O planejamento busca posicioná-la em região menos aparente, mas a qualidade final depende de fatores individuais, incluindo tendência pessoal de cicatrização. Quem tem histórico de queloide precisa informar isso na primeira consulta.',
  },
  {
    pergunta: 'Qual o valor?',
    resposta:
      'O orçamento é feito depois da consulta, porque depende da técnica, do tempo cirúrgico, da equipe envolvida e da estrutura hospitalar. O valor da consulta é informado no primeiro contato. Não trabalhamos com tabela fechada divulgada antes da avaliação.',
  },
  {
    pergunta: 'Lipoaspiração serve para emagrecer?',
    resposta:
      'Não. Lipoaspiração trata contorno corporal em regiões localizadas, não é método de perda de peso e não substitui mudança de hábito. Para quem busca redução de peso, o encaminhamento adequado é outro.',
  },
]

export const formulario = {
  interesses: [
    'Face',
    'Mama',
    'Corpo',
    'Cirurgia pós-bariátrica',
    'Ainda não sei, quero avaliar',
  ],
}

export const rodape = {
  avisoMedico:
    'O conteúdo deste site é informativo e de caráter geral. Toda cirurgia envolve risco. Indicação, técnica, tempo de recuperação e resultado dependem de avaliação presencial individual e não podem ser garantidos.',
  aviso:
    'Site de demonstração criado como estudo de caso. O Vértice é uma empresa fictícia. Nenhum dado preenchido no formulário é enviado ou armazenado.',
}
