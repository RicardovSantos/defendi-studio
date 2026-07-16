# Design — Landing Page Defendi Studio

Data: 2026-07-15

## Objetivo

Construir a landing page da Defendi Studio (estúdio de piercing da Larissa Defendi, São Paulo/SP) como página estática (HTML/CSS/JS puro), responsiva mobile-first, com o **mesmo design/estilo/componentes visuais** do mockup `img/ESCOPO.jpeg` (já documentado em detalhe em `SPECS.md`), mas com **conteúdo e copy reais**, extraídos de `Dados-da-Defendi-Studio-e-preferencias-da-cliente.md`, no tom pedido pela cliente: direto, prático, leitura rápida.

## Fontes de verdade

- **Visual (cores, tipografia, espaçamento, componentes):** `SPECS.md` — já validado por amostragem de pixel sobre o mockup.
- **Conteúdo/copy/contato/endereço:** `Dados-da-Defendi-Studio-e-preferencias-da-cliente.md`.
- **Logo:** `img/LOGO.PNG` (807×457px, RGBA opaco, fundo já "queimado" na imagem) — usado como asset de imagem real, não recriado em texto, para fidelidade do logotipo.
- **Foto da proprietária:** `img/Larissa Defendi.jpeg` (3800×5712px, retrato profissional, fundo cinza-claro de estúdio, piercings visíveis na orelha) — usada na coluna direita do hero, no lugar da foto de stock do modelo do mockup.
- **Stack/plataformas:** `README.md` — HTML, CSS, JS puro; responsivo, mobile-first.

## Stack e organização de arquivos

- `index.html`, `style.css`, `script.js`, pasta `assets/` (logo + variações recortadas, ícones, imagens/placeholders).
- CSS mobile-first, custom properties para os tokens de cor/tipografia/espaçamento do `SPECS.md`.
- Seções semânticas com `id` (`#servicos`, `#cursos`, `#sobre`, `#trabalhos`, `#depoimentos`, `#localizacao`) para os links de âncora do header.
- Sem build step, sem framework — arquivos abertos direto no navegador ou servidos estaticamente.

## Estrutura de seções (mesmos componentes visuais do mockup, conteúdo real)

1. **Header (sticky)** — logo real (`LOGO.PNG` recortado/adaptado para altura pequena), nav (Início · Serviços · Cursos · Sobre · Trabalhos · Depoimentos · Localização), botão CTA linkando para WhatsApp real.
2. **Hero** — logo/monograma, slogan, headline reescrita em tom direto/prático, botão CTA → WhatsApp, faixa de 4 diferenciais (resumo curto dos 5 diferenciais reais da cliente).
3. **Nossos Serviços — grid de 4 cards** (mockup tinha 3; ajustado para o número real de serviços, mesmo estilo de card): **Piercing · Lobuloplastia · Remoção de Tatuagem · Primeiro Furo em Bebê**. Grid 2×2 em desktop, 1 coluna em mobile.
4. **Cursos — seção nova** (não existe no mockup; usa a mesma linguagem visual de card/CTA). Como não há grade curricular, duração ou preço fornecidos, a seção funciona como chamada de destaque ("Curso de Piercing — fale no WhatsApp para saber mais") — **assunção a revisar** se a cliente tiver detalhes específicos do curso depois.
5. **Por que escolher a Defendi Studio — 5 cards**, com os 5 diferenciais reais da cliente, palavra por palavra: experiência, método indolor, cicatrização rápida, joias de altíssimo nível, qualidade e atendimento.
6. **Trabalhos Realizados — galeria** — sem fotos reais disponíveis no repositório. Usa **placeholders estilizados** (não fotos de stock do mockup, não fotos de terceiros passadas como se fossem da cliente) com indicação clara no código de onde entrar fotos reais depois.
7. **Depoimentos — 3 cards** — sem depoimentos reais fornecidos. Usa **placeholder estilizado genérico** (sem nomes/fotos fictícios apresentados como reais) até a cliente fornecer depoimentos verdadeiros.
8. **CTA banner** ("Pronta para começar?") — copy direta, botão → WhatsApp.
9. **Onde Estamos** — endereço real (Rua Costa Rego, 21, Vila Guilhermina, São Paulo/SP, CEP 03542-030, Interfone 102 Sala 02), mapa embed nesse endereço.
10. **Footer** — nav, serviços (Piercing / Lobuloplastia / Remoção de Tatuagem / Primeiro Furo em Bebê / Cursos), contato real (WhatsApp, e-mail, CNPJ), redes sociais **apenas Instagram + TikTok** (removido o ícone de Facebook do mockup — não há conta real fornecida).
11. **Botão flutuante do WhatsApp** — link real `https://wa.me/5511993977462`.

## Itens em aberto / assunções a confirmar

- **Cursos:** sem grade curricular/preço/duração — seção tratada como chamada genérica para contato via WhatsApp.
- **Fotos de trabalhos e depoimentos reais:** ausentes — placeholders estilizados até a cliente enviar.
- **Descrições dos 4 serviços:** serão escritas com base nos diferenciais gerais da cliente (método indolor, joias premium, cicatrização rápida) já que não há descrição individual por serviço nos dados fornecidos.

## Fora de escopo (por ora)

- Formulário de agendamento próprio (objetivo da cliente é direcionar para WhatsApp, não criar um sistema de agendamento).
- Blog, área de login, ou qualquer funcionalidade além de página institucional + CTA.
