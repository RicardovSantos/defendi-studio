# Defendi Studio — Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir a landing page estática da Defendi Studio, responsiva mobile-first, replicando o design/estilo/componentes do mockup `img/ESCOPO.jpeg` com conteúdo e copy reais da cliente.

**Architecture:** Site estático de arquivo único de página (`index.html`) + uma folha de estilo (`css/style.css`) + um script (`js/script.js`). CSS mobile-first com custom properties para todos os tokens de design. Sem framework, sem build step. Cada seção é um `<section>` semântico com `id` para navegação por âncora.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid, `@media`), JavaScript vanilla. Fontes via Google Fonts. Mapa via Google Maps embed (`<iframe>`). Verificação visual via servidor local + navegador (Playwright, skill `webapp-testing`).

## Global Constraints

- **Stack:** HTML, CSS, JS puro — sem framework, sem build step (`README.md`).
- **Responsivo mobile-first:** Desktop (PC) + Mobile obrigatórios (`README.md`).
- **Idioma:** Português (Brasil).
- **Nome da marca:** "Defendi Studio" (nunca "Efendi").
- **Tom da copy:** direto, prático, leitura rápida (preferência da cliente).
- **Design tokens (cores/tipografia/espaçamento):** usar EXATAMENTE os valores de `SPECS.md`. Valores-chave repetidos abaixo por task.
- **Contato real (usar em todos os CTAs/links):**
  - WhatsApp: `https://wa.me/5511993977462` (exibir como "(11) 99397-7462")
  - E-mail: `defendi.larissa@gmail.com`
  - Instagram: `https://www.instagram.com/defendi.larissa`
  - TikTok: `https://www.tiktok.com/@defendipiercing`
  - Endereço: Rua Costa Rego, 21 — Vila Guilhermina, São Paulo/SP, CEP 03542-030 — Interfone 102, Sala 02
  - CNPJ: 42.066.041/0001-20
- **Serviços reais (4):** Piercing · Lobuloplastia · Remoção de Tatuagem · Primeiro Furo em Bebê.
- **Sem conteúdo fictício:** galeria de trabalhos e depoimentos usam placeholders estilizados (sem fotos de stock nem depoimentos inventados apresentados como reais).

---

## Paleta de tokens (referência única — copiar para `:root` na Task 1)

```css
:root {
  /* Fundos */
  --bg-darkest: #1B0A10;      /* header, footer */
  --bg-hero-corner: #270D15;  /* gradiente hero (escuro) */
  --bg-hero-mid: #10050B;     /* faixa de texto do hero */
  --bg-section: #13060F;      /* seções de conteúdo */
  --bg-feature-strip: #080307;/* faixa de diferenciais */
  /* Superfícies */
  --surface-card: #29161A;    /* cards de serviço */
  --surface-why: #1E0F14;     /* cards "por que escolher" */
  --surface-testimonial: #1D1115;
  --surface-contact: #29141B;
  /* Botões */
  --btn-fill: #3A1220;        /* botão sólido (vinho escuro) */
  --btn-text: #E7D2D7;        /* texto do botão sólido (blush) */
  --btn-ghost-text: #DCD5D6;  /* texto botão outline do header */
  /* Marca / acentos */
  --primary: #8E4A63;         /* sublinhados, ícones, bordas */
  --gold: #CFAD66;            /* estrelas */
  --whatsapp: #25D366;        /* botão flutuante */
  --accent-glow: #E8578C;     /* glow do logo neon (CTA) */
  /* Texto */
  --text-heading: #FDF7FA;
  --text-body: #E7D2D7;
  --text-title: #96828B;
  --text-section-heading: #B9B2B6;
  --text-muted: #9B7C85;
  /* Linhas */
  --border-card: rgba(190,130,150,0.15);
  --divider: rgba(255,255,255,0.07);
  /* Tipografia */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Montserrat', system-ui, sans-serif;
  /* Espaçamento (base 8px) */
  --sp-1: 8px; --sp-2: 16px; --sp-3: 24px; --sp-4: 32px;
  --sp-6: 48px; --sp-8: 64px; --sp-10: 80px; --sp-15: 120px;
  --container: 1200px;
  --radius-card: 8px; --radius-img: 6px;
}
```

## Estrutura de arquivos

```
index.html          — página única, todas as seções
css/style.css       — reset + tokens + todos os estilos
js/script.js        — nav mobile (hamburger), scroll suave, header sticky
img/LOGO.PNG        — logo (já existe; usado como <img>)
img/ESCOPO.jpeg     — mockup de referência (não vai para produção)
assets/             — (criada se necessário para ícones SVG inline/placeholders)
```

**Sobre o logo:** `img/LOGO.PNG` (807×457, fundo bordô opaco `#210A12`–`#40202B`). O fundo bate com `--bg-darkest`/`--bg-hero-corner`, então será usado como `<img>` diretamente sobre containers bordô, sem recorte de transparência (recorte limpo é inviável em v1 por causa do gradiente/anti-aliasing). Nenhuma re-renderização do logo em texto.

**Ícones:** usar SVG inline (contorno, traço fino, `stroke: currentColor`), estilo Feather/Lucide. Definidos onde usados; sem biblioteca externa.

---

## Task 1: Scaffold + design tokens + base

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/script.js`

**Interfaces:**
- Produces: estrutura HTML base com `<head>` (fontes, meta viewport), `:root` com todos os tokens acima, reset CSS, tipografia base. Classe utilitária `.container { max-width: var(--container); margin-inline: auto; padding-inline: var(--sp-3); }`.

- [ ] **Step 1: Criar `index.html` com skeleton**

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Defendi Studio — Piercing com técnica, segurança e joias premium</title>
  <meta name="description" content="Estúdio de piercing em São Paulo. Método indolor, cicatrização rápida e joias de altíssimo nível. Agende pelo WhatsApp.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- seções entram nas tasks seguintes -->
  <script src="js/script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Criar `css/style.css` com reset + tokens + base**

```css
*,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
:root { /* colar TODO o bloco de tokens da seção "Paleta de tokens" acima */ }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--bg-darkest);
  color: var(--text-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
.container { max-width: var(--container); margin-inline: auto; padding-inline: var(--sp-3); }
h1,h2,h3 { font-family: var(--font-display); color: var(--text-heading); line-height: 1.2; font-weight: 500; }
.section-title { text-align: center; text-transform: uppercase; letter-spacing: 3px; color: var(--text-section-heading); font-size: clamp(24px,4vw,30px); }
.section-title::after { content:""; display:block; width:40px; height:2px; background:var(--primary); margin:12px auto 0; }
.btn-primary {
  display:inline-block; background:var(--btn-fill); color:var(--btn-text);
  text-transform:uppercase; letter-spacing:2px; font-size:12px; font-weight:600;
  padding:14px 32px; border-radius:999px; cursor:pointer; border:none;
  transition:filter .2s;
}
.btn-primary:hover { filter:brightness(1.25); }
section { padding-block: clamp(48px, 8vw, 90px); }
```

- [ ] **Step 3: Criar `js/script.js` vazio com marcador**

```js
// Defendi Studio — interações. Preenchido na Task 11.
document.addEventListener('DOMContentLoaded', () => {});
```

- [ ] **Step 4: Verificar no navegador**

Run: `python -m http.server 8000` (na raiz do projeto), abrir `http://localhost:8000`.
Expected: página em branco com fundo bordô escuro `--bg-darkest`, sem erros no console, fontes Google carregadas (checar aba Network).

- [ ] **Step 5: Commit**

```bash
git add index.html css/style.css js/script.js
git commit -m "feat: scaffold landing page com design tokens e base"
```

---

## Task 2: Header sticky + navegação (com menu mobile)

**Files:**
- Modify: `index.html` (adicionar `<header>` como primeiro filho de `<body>`)
- Modify: `css/style.css` (estilos do header)

**Interfaces:**
- Consumes: tokens da Task 1.
- Produces: `<header class="site-header">` sticky; botão `.nav-toggle` (hamburger) com `aria-expanded` que a Task 11 vai controlar via JS; nav com âncoras `#inicio #servicos #cursos #sobre #trabalhos #depoimentos #localizacao`.

- [ ] **Step 1: Adicionar markup do header**

```html
<header class="site-header" id="inicio">
  <div class="container header-inner">
    <a href="#inicio" class="brand"><img src="img/LOGO.PNG" alt="Defendi Studio" class="brand-logo"></a>
    <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="site-nav">
      <a href="#servicos">Serviços</a>
      <a href="#cursos">Cursos</a>
      <a href="#sobre">Sobre</a>
      <a href="#trabalhos">Trabalhos</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#localizacao">Localização</a>
      <a href="https://wa.me/5511993977462" class="btn-primary nav-cta" target="_blank" rel="noopener">Agendar</a>
    </nav>
  </div>
</header>
```

- [ ] **Step 2: Estilos do header (mobile-first)**

```css
.site-header { position:sticky; top:0; z-index:100; background:var(--bg-darkest); border-bottom:1px solid var(--divider); }
.header-inner { display:flex; align-items:center; justify-content:space-between; padding-block:12px; }
.brand-logo { height:44px; width:auto; }
.nav-toggle { background:none; border:none; display:flex; flex-direction:column; gap:5px; cursor:pointer; padding:8px; }
.nav-toggle span { width:24px; height:2px; background:var(--text-heading); transition:.2s; }
.site-nav { display:none; }               /* mobile: escondido até .open */
.site-nav.open { display:flex; flex-direction:column; position:absolute; top:100%; left:0; right:0; background:var(--bg-darkest); padding:var(--sp-3); gap:var(--sp-2); border-bottom:1px solid var(--divider); }
.site-nav a { text-transform:uppercase; letter-spacing:1.5px; font-size:13px; font-weight:500; color:var(--text-body); }
.nav-cta { color:var(--btn-text) !important; text-align:center; }
@media (min-width:1024px){
  .nav-toggle{ display:none; }
  .site-nav{ display:flex; align-items:center; gap:var(--sp-3); position:static; padding:0; background:none; }
}
```

- [ ] **Step 3: Verificar responsivo**

Run: servir local; abrir em 1440px e 375px (DevTools device toolbar ou Playwright).
Expected: desktop → nav horizontal visível, sem hamburger. Mobile (375px) → só logo + hamburger; nav escondida (o toggle ainda não abre, isso é a Task 11). Header gruda no topo ao rolar.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: header sticky com navegacao responsiva"
```

---

## Task 3: Hero + faixa de diferenciais

**Files:**
- Modify: `index.html` (adicionar `<section class="hero">` após o header)
- Modify: `css/style.css`

**Interfaces:**
- Consumes: tokens, `.btn-primary`, `.container`.
- Produces: seção hero de 2 colunas (copy + foto real) com headline real, CTA WhatsApp, faixa de 4 diferenciais com ícone.

- [ ] **Step 1: Markup do hero (copy real, tom direto, foto real da proprietária)**

```html
<section class="hero">
  <div class="container hero-inner">
    <div class="hero-copy">
      <img src="img/LOGO.PNG" alt="Defendi Studio" class="hero-logo">
      <p class="hero-tagline">Arte · Segurança · Autoestima</p>
      <h1 class="hero-title">Piercing com técnica, segurança e joias premium.</h1>
      <p class="hero-text">Método de perfuração indolor, cicatrização rápida e atendimento de qualidade em cada detalhe.</p>
      <a href="https://wa.me/5511993977462" class="btn-primary" target="_blank" rel="noopener">Agendar pelo WhatsApp</a>
    </div>
    <div class="hero-photo">
      <img src="img/Larissa Defendi.jpeg" alt="Larissa Defendi, proprietária da Defendi Studio">
    </div>
  </div>
  <div class="hero-features">
    <div class="container feature-grid">
      <div class="feature"><!-- ícone SVG --><span>Perfuração Indolor</span></div>
      <div class="feature"><span>Cicatrização Rápida</span></div>
      <div class="feature"><span>Joias Premium</span></div>
      <div class="feature"><span>Atendimento de Qualidade</span></div>
    </div>
  </div>
</section>
```
> Em cada `.feature`, inserir um SVG inline de contorno (24×24, `stroke:var(--primary)`) antes do `<span>`. Ex.: escudo, gota, diamante, coração. Usar paths simples do Feather.
>
> **Sobre a foto:** `img/Larissa Defendi.jpeg` é retrato de estúdio com fundo cinza-claro (3800×5712px) — não combina em bruto com o tema escuro se cortada reta. A CSS do Step 2 usa `object-fit:cover` num container com cantos arredondados e um `::after` com gradiente radial (das bordas para transparente, na cor `--bg-hero-corner`) sobreposto à imagem, pra fundir a borda cinza do estúdio com o fundo bordô da seção em vez de deixar um retângulo cinza chapado.

- [ ] **Step 2: Estilos do hero**

```css
.hero { background:radial-gradient(120% 90% at 20% 20%, var(--bg-hero-corner), var(--bg-hero-mid) 70%); padding:0; overflow:hidden; }
.hero-inner { display:grid; grid-template-columns:1fr; gap:var(--sp-4); padding-block: clamp(32px,8vw,72px); align-items:center; }
.hero-logo { height:96px; width:auto; margin-bottom:var(--sp-2); }
.hero-tagline { text-transform:uppercase; letter-spacing:3px; font-size:12px; color:var(--text-muted); margin-bottom:var(--sp-3); }
.hero-title { font-size:clamp(32px,6vw,56px); max-width:16ch; margin-bottom:var(--sp-2); }
.hero-text { color:var(--text-body); max-width:44ch; margin-bottom:var(--sp-4); }
.hero-photo { position:relative; border-radius:16px; overflow:hidden; aspect-ratio:3/4; max-height:520px; }
.hero-photo img { width:100%; height:100%; object-fit:cover; object-position:top center; }
.hero-photo::after {
  content:""; position:absolute; inset:0; border-radius:16px;
  box-shadow: inset 0 0 60px 30px var(--bg-hero-corner);
  pointer-events:none;
}
.hero-features { background:var(--bg-feature-strip); }
.feature-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:var(--sp-3); padding-block:var(--sp-4); text-align:center; }
.feature { display:flex; flex-direction:column; align-items:center; gap:var(--sp-1); font-size:12px; text-transform:uppercase; letter-spacing:1px; color:var(--text-body); }
@media (min-width:1024px){
  .hero-inner{ grid-template-columns:1.1fr 0.9fr; }
  .hero-photo{ max-height:600px; }
  .feature-grid{ grid-template-columns:repeat(4,1fr); }
}
```

- [ ] **Step 3: Verificar**

Run: servir; conferir 1440px e 375px.
Expected: headline grande em serif à esquerda, foto real da Larissa à direita (desktop) ou abaixo do texto (mobile), com as bordas cinza do estúdio suavizadas pelo vinheta bordô — sem retângulo cinza cru. CTA pill bordô. Faixa de 4 diferenciais (4 colunas desktop / 2 colunas mobile). Botão abre `wa.me` em nova aba.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: hero com copy real e faixa de diferenciais"
```

---

## Task 4: Serviços — grid de 4 cards

**Files:**
- Modify: `index.html`, `css/style.css`

**Interfaces:**
- Consumes: tokens, `.section-title`, `.container`.
- Produces: `<section id="servicos">` com `.services-grid` de 4 `.service-card`.

- [ ] **Step 1: Markup (4 serviços reais)**

```html
<section id="servicos">
  <div class="container">
    <h2 class="section-title">Nossos Serviços</h2>
    <div class="services-grid">
      <article class="service-card">
        <div class="service-thumb"></div>
        <div class="service-body">
          <h3>Piercing</h3>
          <p>Aplicação com técnica precisa e método indolor, com joias de altíssimo nível.</p>
          <a href="https://wa.me/5511993977462" class="btn-primary btn-sm" target="_blank" rel="noopener">Saiba mais</a>
        </div>
      </article>
      <!-- repetir para: Lobuloplastia / Remoção de Tatuagem / Primeiro Furo em Bebê -->
    </div>
  </div>
</section>
```
Textos dos outros 3 cards (copiar literalmente):
- **Lobuloplastia** — "Correção de lóbulos rasgados ou alargados, com resultado natural e seguro."
- **Remoção de Tatuagem** — "Remoção segura e eficaz, respeitando a sua pele."
- **Primeiro Furo em Bebê** — "O primeiro furinho com todo o cuidado, higiene e carinho que seu bebê merece."

> `.service-thumb` é placeholder (sem foto real). Comentar `<!-- TODO: foto real do serviço -->`.

- [ ] **Step 2: Estilos**

```css
.services-grid { display:grid; grid-template-columns:1fr; gap:var(--sp-3); margin-top:var(--sp-6); }
.service-card { background:var(--surface-card); border:1px solid var(--border-card); border-radius:var(--radius-card); overflow:hidden; }
.service-thumb { aspect-ratio:16/10; background:linear-gradient(135deg,var(--bg-hero-corner),var(--surface-card)); }
.service-body { padding:var(--sp-3); }
.service-body h3 { text-transform:uppercase; font-family:var(--font-body); font-size:16px; letter-spacing:1.5px; font-weight:600; color:var(--text-title); margin-bottom:var(--sp-1); }
.service-body p { font-size:14px; color:var(--text-muted); margin-bottom:var(--sp-3); }
.btn-sm { padding:10px 22px; font-size:11px; border-radius:6px; }
@media (min-width:640px){ .services-grid{ grid-template-columns:repeat(2,1fr); } }
@media (min-width:1024px){ .services-grid{ grid-template-columns:repeat(4,1fr); } }
```

- [ ] **Step 3: Verificar**

Expected: 4 cards; mobile 1 col, tablet 2 col, desktop 4 col. Cada "Saiba mais" abre WhatsApp.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: secao de servicos com 4 cards reais"
```

---

## Task 5: Cursos (seção nova)

**Files:**
- Modify: `index.html`, `css/style.css`

**Interfaces:**
- Consumes: tokens, `.container`, `.btn-primary`.
- Produces: `<section id="cursos" class="cursos">` — banner de destaque com CTA WhatsApp.

- [ ] **Step 1: Markup**

```html
<section id="cursos" class="cursos">
  <div class="container cursos-inner">
    <div class="cursos-copy">
      <p class="eyebrow">Formação Profissional</p>
      <h2>Curso de Piercing</h2>
      <p>Aprenda a técnica com quem tem experiência de verdade. Método indolor, biossegurança e joias premium — do básico ao profissional. Fale no WhatsApp e garanta sua vaga.</p>
      <a href="https://wa.me/5511993977462" class="btn-primary" target="_blank" rel="noopener">Quero saber mais</a>
    </div>
  </div>
</section>
```
> **Assunção documentada:** sem grade/duração/preço fornecidos — seção funciona como chamada para contato. Ajustar quando a cliente enviar detalhes do curso.

- [ ] **Step 2: Estilos**

```css
.cursos { background:linear-gradient(135deg,var(--bg-hero-corner),var(--bg-section)); }
.cursos-inner { text-align:center; }
.eyebrow { text-transform:uppercase; letter-spacing:3px; font-size:12px; color:var(--primary); margin-bottom:var(--sp-2); }
.cursos h2 { font-size:clamp(28px,5vw,40px); text-transform:uppercase; margin-bottom:var(--sp-2); }
.cursos p { max-width:52ch; margin:0 auto var(--sp-4); color:var(--text-body); }
```

- [ ] **Step 3: Verificar** — Expected: banner centralizado, CTA abre WhatsApp; responsivo ok.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: secao de cursos com CTA para WhatsApp"
```

---

## Task 6: Por que escolher — 5 cards (diferenciais reais)

**Files:** Modify: `index.html`, `css/style.css`

**Interfaces:** Consumes tokens, `.section-title`. Produces `<section id="sobre" class="why">` com 5 `.why-card`.

- [ ] **Step 1: Markup (diferenciais verbatim da cliente)**

```html
<section id="sobre" class="why">
  <div class="container">
    <h2 class="section-title">Por que escolher a Defendi Studio?</h2>
    <div class="why-grid">
      <div class="why-card"><!--ícone--><h3>Experiência no Piercing</h3><p>Anos de prática e técnica apurada em cada perfuração.</p></div>
      <div class="why-card"><h3>Método Indolor</h3><p>Perfuração com técnica que minimiza o desconforto.</p></div>
      <div class="why-card"><h3>Cicatrização Rápida</h3><p>Processo cuidadoso para uma recuperação rápida e de qualidade.</p></div>
      <div class="why-card"><h3>Joias de Altíssimo Nível</h3><p>Materiais premium para segurança e beleza.</p></div>
      <div class="why-card"><h3>Qualidade no Atendimento</h3><p>Cuidado e atenção em todos os processos.</p></div>
    </div>
  </div>
</section>
```
> Ícones SVG de contorno em cada card (`stroke:var(--primary)`).

- [ ] **Step 2: Estilos**

```css
.why { background:var(--bg-section); }
.why-grid { display:grid; grid-template-columns:1fr; gap:var(--sp-2); margin-top:var(--sp-6); }
.why-card { background:var(--surface-why); border:1px solid var(--border-card); border-radius:var(--radius-card); padding:var(--sp-3); text-align:center; }
.why-card h3 { font-family:var(--font-body); text-transform:uppercase; font-size:13px; letter-spacing:1px; font-weight:600; color:var(--text-body); margin:var(--sp-2) 0 var(--sp-1); }
.why-card p { font-size:13px; color:var(--text-muted); }
@media (min-width:640px){ .why-grid{ grid-template-columns:repeat(2,1fr); } }
@media (min-width:1024px){ .why-grid{ grid-template-columns:repeat(5,1fr); } }
```

- [ ] **Step 3: Verificar** — Expected: 5 cards; mobile 1 col, tablet 2, desktop 5.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: secao por que escolher com 5 diferenciais reais"
```

---

## Task 7: Trabalhos Realizados — galeria (placeholders)

**Files:** Modify: `index.html`, `css/style.css`

**Interfaces:** Consumes tokens, `.section-title`. Produces `<section id="trabalhos">` com `.gallery` de placeholders.

- [ ] **Step 1: Markup**

```html
<section id="trabalhos">
  <div class="container">
    <h2 class="section-title">Trabalhos Realizados</h2>
    <!-- TODO: substituir os .gallery-item por <img> das fotos reais da cliente -->
    <div class="gallery">
      <div class="gallery-item"></div>
      <div class="gallery-item"></div>
      <div class="gallery-item"></div>
      <div class="gallery-item"></div>
      <div class="gallery-item"></div>
      <div class="gallery-item"></div>
    </div>
    <div class="center-cta"><a href="https://www.instagram.com/defendi.larissa" class="btn-primary" target="_blank" rel="noopener">Ver mais no Instagram</a></div>
  </div>
</section>
```
> Placeholder estilizado (gradiente bordô), NÃO fotos de stock/terceiros. CTA aponta para o Instagram real (onde estão os trabalhos de verdade).

- [ ] **Step 2: Estilos**

```css
.gallery { display:grid; grid-template-columns:repeat(2,1fr); gap:var(--sp-1); margin-top:var(--sp-6); }
.gallery-item { aspect-ratio:1; border-radius:var(--radius-img); background:linear-gradient(135deg,var(--surface-card),var(--bg-hero-corner)); border:1px solid var(--border-card); }
.center-cta { text-align:center; margin-top:var(--sp-4); }
@media (min-width:768px){ .gallery{ grid-template-columns:repeat(3,1fr); } }
@media (min-width:1024px){ .gallery{ grid-template-columns:repeat(6,1fr); } }
```

- [ ] **Step 3: Verificar** — Expected: grade de placeholders; CTA abre Instagram real.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: galeria de trabalhos com placeholders e CTA instagram"
```

---

## Task 8: Depoimentos (placeholder honesto)

**Files:** Modify: `index.html`, `css/style.css`

**Interfaces:** Consumes tokens, `.section-title`. Produces `<section id="depoimentos">`.

- [ ] **Step 1: Markup (sem nomes/depoimentos inventados)**

```html
<section id="depoimentos">
  <div class="container">
    <h2 class="section-title">Depoimentos</h2>
    <!-- TODO: inserir depoimentos reais de clientes quando disponíveis -->
    <div class="testi-grid">
      <article class="testi-card">
        <p class="testi-empty">Em breve, os depoimentos das nossas clientes aparecem aqui.</p>
        <a href="https://www.instagram.com/defendi.larissa" target="_blank" rel="noopener" class="testi-link">Ver avaliações no Instagram →</a>
      </article>
    </div>
  </div>
</section>
```
> Card único e honesto até haver depoimentos reais. NÃO usar "Juliana R./Marcos T./Camila S." do mockup (são fictícios).

- [ ] **Step 2: Estilos**

```css
.testi-grid { margin-top:var(--sp-6); display:flex; justify-content:center; }
.testi-card { background:var(--surface-testimonial); border:1px solid var(--border-card); border-radius:var(--radius-card); padding:var(--sp-4); max-width:520px; text-align:center; }
.testi-empty { color:var(--text-body); margin-bottom:var(--sp-2); }
.testi-link { color:var(--primary); font-size:14px; font-weight:600; }
```

- [ ] **Step 3: Verificar** — Expected: card centralizado, link para Instagram.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: secao de depoimentos placeholder honesto"
```

---

## Task 9: CTA banner

**Files:** Modify: `index.html`, `css/style.css`

**Interfaces:** Consumes tokens, `.btn-primary`. Produces `.cta-banner`.

- [ ] **Step 1: Markup**

```html
<section class="cta-banner-wrap">
  <div class="container cta-banner">
    <div class="cta-content">
      <h2>Pronta para realçar a sua essência?</h2>
      <p>Agende seu horário e viva um atendimento exclusivo e seguro.</p>
      <a href="https://wa.me/5511993977462" class="btn-primary" target="_blank" rel="noopener">Agendar pelo WhatsApp</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Estilos**

```css
.cta-banner-wrap { background:var(--bg-section); }
.cta-banner { background:linear-gradient(120deg,var(--bg-hero-corner),var(--surface-card)); border:1px solid var(--border-card); border-radius:16px; padding:clamp(32px,6vw,64px); text-align:center; }
.cta-banner h2 { font-size:clamp(28px,5vw,40px); text-transform:uppercase; margin-bottom:var(--sp-2); }
.cta-banner p { color:var(--text-body); margin-bottom:var(--sp-4); }
```

- [ ] **Step 3: Verificar** — Expected: banner destacado, CTA abre WhatsApp.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: banner de CTA para agendamento"
```

---

## Task 10: Onde Estamos (mapa + card de contato real)

**Files:** Modify: `index.html`, `css/style.css`

**Interfaces:** Consumes tokens, `.section-title`. Produces `<section id="localizacao">` com iframe do Google Maps + card de contato.

- [ ] **Step 1: Markup (endereço real)**

```html
<section id="localizacao">
  <div class="container">
    <h2 class="section-title">Onde Estamos</h2>
    <div class="loc-grid">
      <iframe class="loc-map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Rua+Costa+Rego,+21,+Vila+Guilhermina,+São+Paulo+SP+03542-030&output=embed"></iframe>
      <div class="loc-card">
        <img src="img/LOGO.PNG" alt="Defendi Studio" class="loc-logo">
        <p class="loc-addr">Rua Costa Rego, 21<br>Vila Guilhermina — São Paulo/SP<br>CEP 03542-030<br>Interfone 102, Sala 02</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+Costa+Rego,+21,+Vila+Guilhermina,+São+Paulo+SP+03542-030" class="btn-primary" target="_blank" rel="noopener">Como chegar</a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Estilos**

```css
.loc-grid { display:grid; grid-template-columns:1fr; gap:var(--sp-3); margin-top:var(--sp-6); }
.loc-map { width:100%; min-height:300px; border:0; border-radius:var(--radius-card); }
.loc-card { background:var(--surface-contact); border:1px solid var(--border-card); border-radius:var(--radius-card); padding:var(--sp-4); }
.loc-logo { height:56px; width:auto; margin-bottom:var(--sp-3); }
.loc-addr { color:var(--text-body); margin-bottom:var(--sp-4); line-height:1.8; }
@media (min-width:1024px){ .loc-grid{ grid-template-columns:1.6fr 1fr; } }
```

- [ ] **Step 3: Verificar** — Expected: mapa carrega no endereço certo; "Como chegar" abre rota no Maps.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: secao localizacao com mapa e endereco real"
```

---

## Task 11: Footer + interações JS (hamburger, header sticky class)

**Files:** Modify: `index.html`, `css/style.css`, `js/script.js`

**Interfaces:** Consumes tudo. Produces `<footer>` + JS que faz o `.nav-toggle` alternar `.open` na `.site-nav` e o `aria-expanded`.

- [ ] **Step 1: Markup do footer (contato real, só IG + TikTok)**

```html
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <img src="img/LOGO.PNG" alt="Defendi Studio" class="footer-logo">
      <p>Beleza, arte e segurança em cada detalhe.</p>
    </div>
    <div><h4>Navegação</h4><a href="#servicos">Serviços</a><a href="#cursos">Cursos</a><a href="#sobre">Sobre</a><a href="#trabalhos">Trabalhos</a><a href="#localizacao">Localização</a></div>
    <div><h4>Serviços</h4><a href="#servicos">Piercing</a><a href="#servicos">Lobuloplastia</a><a href="#servicos">Remoção de Tatuagem</a><a href="#servicos">Primeiro Furo em Bebê</a><a href="#cursos">Cursos</a></div>
    <div class="footer-contact">
      <h4>Contato</h4>
      <a href="https://wa.me/5511993977462" target="_blank" rel="noopener">WhatsApp: (11) 99397-7462</a>
      <a href="mailto:defendi.larissa@gmail.com">defendi.larissa@gmail.com</a>
      <p class="footer-cnpj">CNPJ 42.066.041/0001-20</p>
      <div class="footer-social">
        <a href="https://www.instagram.com/defendi.larissa" target="_blank" rel="noopener" aria-label="Instagram"><!--SVG IG--></a>
        <a href="https://www.tiktok.com/@defendipiercing" target="_blank" rel="noopener" aria-label="TikTok"><!--SVG TikTok--></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom"><div class="container"><p>© 2026 Defendi Studio. Todos os direitos reservados.</p></div></div>
</footer>
<a href="https://wa.me/5511993977462" class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp"><!--SVG WhatsApp--></a>
```

- [ ] **Step 2: Estilos do footer + botão flutuante**

```css
.site-footer { background:var(--bg-darkest); border-top:1px solid var(--divider); padding-top:var(--sp-8); }
.footer-grid { display:grid; grid-template-columns:1fr; gap:var(--sp-4); }
.footer-logo { height:48px; margin-bottom:var(--sp-2); }
.footer-grid h4 { font-family:var(--font-body); text-transform:uppercase; font-size:13px; letter-spacing:1px; color:var(--text-heading); margin-bottom:var(--sp-2); }
.footer-grid a { display:block; font-size:14px; color:var(--text-muted); margin-bottom:var(--sp-1); }
.footer-cnpj { font-size:12px; color:var(--text-muted); margin-top:var(--sp-2); }
.footer-social { display:flex; gap:var(--sp-2); margin-top:var(--sp-2); }
.footer-social a { color:var(--text-body); }
.footer-bottom { border-top:1px solid var(--divider); margin-top:var(--sp-6); padding-block:var(--sp-3); }
.footer-bottom p { font-size:12px; color:var(--text-muted); text-align:center; }
.whatsapp-float { position:fixed; right:20px; bottom:20px; width:56px; height:56px; border-radius:50%; background:var(--whatsapp); display:flex; align-items:center; justify-content:center; color:#fff; box-shadow:0 4px 16px rgba(0,0,0,.4); z-index:200; }
@media (min-width:768px){ .footer-grid{ grid-template-columns:1.4fr 1fr 1fr 1.2fr; } }
```

- [ ] **Step 3: JS — hamburger + sombra do header ao rolar**

```js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // fecha o menu ao clicar num link (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
});
```

- [ ] **Step 4: Verificar** — Expected: em 375px o hamburger abre/fecha a nav e `aria-expanded` alterna; links fecham o menu; botão WhatsApp flutuante fixo; footer com IG+TikTok (sem Facebook).

- [ ] **Step 5: Commit**

```bash
git add index.html css/style.css js/script.js
git commit -m "feat: footer, botao whatsapp flutuante e menu mobile"
```

---

## Task 12: Passe final — responsividade, âncoras e fidelidade

**Files:** Modify: `css/style.css` (ajustes finos), possivelmente `index.html`.

**Interfaces:** Consome tudo. Produz a página final revisada.

- [ ] **Step 1: Offset de âncora para header sticky**

```css
:target { scroll-margin-top: 80px; }
section[id], header[id] { scroll-margin-top: 80px; }
```

- [ ] **Step 2: Comparação lado a lado com o mockup**

Usar a skill `webapp-testing` (Playwright): servir local, tirar screenshot full-page em 1440px e 390px. Abrir `img/ESCOPO.jpeg` lado a lado e conferir: ordem das seções, cores (contra `SPECS.md`), tipografia, espaçamentos, botões (vinho escuro, não rosa sólido).
Expected: layout desktop fiel ao mockup; mobile empilhado e legível; nenhum overflow horizontal (`document.documentElement.scrollWidth === clientWidth`).

- [ ] **Step 3: Checar todos os links**

Verificar manualmente que abrem: 4× "Saiba mais" + hero + cursos + CTA + nav + float → todos `wa.me/5511993977462`; galeria/depoimentos → Instagram; "Como chegar" → Maps; e-mail → `mailto:`.
Expected: todos corretos, `target="_blank" rel="noopener"` nos externos.

- [ ] **Step 4: Ajustes finos de CSS conforme achados dos steps 2-3.**

- [ ] **Step 5: Commit**

```bash
git add index.html css/style.css
git commit -m "polish: offset de ancora, responsividade e fidelidade ao mockup"
```

---

## Self-Review (feito pelo autor do plano)

**Cobertura do spec (`2026-07-15-defendi-studio-landing-page-design.md`):**
- Header/nav → Task 2 ✓ · Hero + diferenciais → Task 3 ✓ · Serviços 4 cards → Task 4 ✓ · Cursos → Task 5 ✓ · Por que escolher 5 cards → Task 6 ✓ · Trabalhos (placeholder) → Task 7 ✓ · Depoimentos (placeholder honesto) → Task 8 ✓ · CTA → Task 9 ✓ · Onde estamos (endereço real) → Task 10 ✓ · Footer (IG+TikTok, CNPJ) + WhatsApp float → Task 11 ✓ · Responsivo mobile-first → em todas + Task 12 ✓ · Logo como asset → Tasks 1-11 ✓ · Stack HTML/CSS/JS puro → Task 1 ✓.
- **Sem gaps.**

**Placeholders:** os únicos "TODO" no código são intencionais e sinalizados (fotos reais / depoimentos reais / foto do hero) — refletem gaps de asset reais da cliente, não do plano. Nenhum passo do plano tem código faltando.

**Consistência de tipos/nomes:** classes referenciadas entre tasks conferem (`.site-nav`/`.nav-toggle` definidas na Task 2, controladas na Task 11; `.btn-primary`/`.btn-sm` definidas na Task 1/4; tokens `:root` na Task 1 usados em todas).

**Escopo:** uma única página estática — plano único é adequado, sem necessidade de decomposição.
