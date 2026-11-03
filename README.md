# Vértice

Site conceitual de uma clínica de cirurgia plástica, criado como estudo de
caso de projeto para serviços de saúde de alto valor com posicionamento
premium e responsável.

**Site:** https://fflucasff.github.io/vertice-cirurgia/

> O Vértice é uma empresa fictícia. Nenhum cirurgião, registro profissional,
> hospital, certificação ou resultado real é citado. O site não agenda
> consultas e o formulário não envia dados.

## O desafio do projeto

Cirurgia plástica tem o marketing mais agressivo da área médica e, ao mesmo
tempo, as restrições éticas mais rígidas. A maioria dos sites do segmento
converte com antes e depois, tabela de preço e linguagem de transformação
pessoal. Isso atrai volume e atrai o paciente errado, porque cria expectativa
que a técnica não sustenta.

O projeto assume a posição oposta: **a abertura diz que a conversa pode
terminar em não**. É um filtro deliberado. Quem busca garantia não avança, e
quem busca critério reconhece o tipo de clínica.

## Decisões de estratégia

**Nenhuma imagem de antes e depois.** A seção de dúvidas explica o motivo com
dois argumentos: resultado de outra pessoa não prevê o seu, e a exposição de
imagem de paciente em contexto publicitário é restrita pelas normas do
Conselho Federal de Medicina. Transformar a ausência em argumento é mais
convincente que simplesmente omitir.

**Uma etapa de decisão dentro da jornada.** Entre o planejamento e a cirurgia
existe um passo chamado decisão, descrito como intervalo deliberado para que a
escolha não seja feita no impulso da consulta. Essa etapa é o diferencial de
posicionamento da clínica.

**Seção de segurança que não tranquiliza.** O texto abre dizendo que as
informações existem para apoiar a decisão, não para tranquilizar, e lista
risco de sangramento, infecção, assimetria e cicatriz desfavorável. Um site
que fala de risco com naturalidade transmite mais competência que um que
promete segurança.

**Procedimentos com nota de contexto.** Cada item traz uma linha de
qualificação, como "lipoaspiração: contorno, não método de emagrecimento".
Corrige a expectativa no ponto exato em que ela costuma se formar.

**Nenhuma métrica, nenhum depoimento, nenhum número de cirurgias.**

## Decisões de design

**Alto contraste como estrutura, não como efeito.** Blocos pretos e blocos
claros se alternam marcando a mudança de assunto. A abertura e a jornada são
pretas, procedimentos e dúvidas são claros. A navegação acontece pela troca de
fundo.

**Instrument Serif em corpo grande.** A serifa de contraste alto dá a voz
editorial e aparece em tamanho realmente grande na abertura, ocupando o espaço
que um site do segmento usaria para foto. A Inter Tight sustenta o texto
corrido sem competir.

**Taupe como único acento.** Nada de dourado. O taupe aparece em estados de
interação, no índice numérico da jornada e no símbolo. A paleta inteira tem
três cores.

**Campos de formulário com linha única.** Sem caixa, sem preenchimento, apenas
uma linha inferior. Em fundo preto, isso mantém o formulário leve e coerente
com o resto da página.

**Sem fotografia.** O site não usa banco de imagens, o que evita retratar
pessoas reais como pacientes ou equipe de uma clínica que não existe.

## Conversão

- Chamada única em toda a página, que é agendar consulta.
- O texto ao lado do formulário repete que nenhuma data de cirurgia é marcada
  na consulta, reduzindo a barreira de agendar.
- Botão fixo na base da tela no celular.
- Formulário com quatro campos obrigatórios, validação no navegador, mensagem
  por campo e foco automático no primeiro inválido.
- Confirmação declarando que nenhum dado foi enviado.
- Nenhum botão de WhatsApp, já que não existe número real para atender.

## Referências consultadas

- [NHS digital service manual, "How we write"](https://service-manual.nhs.uk/content/how-we-write)
  Referência de comunicação em saúde. A regra de evitar palavras subjetivas e
  de preferir informação específica sustentou a escrita da seção de segurança,
  onde a tentação de amenizar é maior. As frases curtas e os parágrafos de até
  três frases seguem a mesma orientação.
- [Parsley Health](https://www.parsleyhealth.com/)
  Referência de estrutura de serviço de saúde. Vale estudar o uso das
  perguntas frequentes para resolver cedo as objeções de custo e de
  expectativa. Aqui a mesma lógica foi aplicada a antes e depois, tempo de
  afastamento e cicatriz. Nenhum layout, texto ou código foi copiado.

## Limitações reais

- A clínica não existe. Estrutura, equipe e endereço são fictícios.
- O formulário não envia dados. Não há servidor, e-mail ou integração.
- As descrições de procedimento são gerais e não substituem avaliação
  presencial. Nada no site prevê ou garante resultado.
- A menção às normas do Conselho Federal de Medicina é genérica. Um site real
  precisaria de revisão jurídica específica antes de publicar.
- Não há área do paciente nem agendamento on-line.

## Rodando localmente

```bash
npm install
npm run dev
```

```bash
npm run build   # checagem de tipos e build de produção
```

## Stack

React, TypeScript e Vite, sem dependências de interface. Tipografia Instrument
Serif e Inter Tight via Google Fonts. Publicado no GitHub Pages por GitHub
Actions.
