* Portugues Brasil
# Defendi Studio

Landing page institucional do Defendi Studio (piercing, lobuloplastia, remoção de tatuagem/micropigmentação, cursos e joias). Site estático, sem build step nem frameworks.

## Plataformas obrigatórias Responsivo:
- Desktop (PC)
- Firest Mobile (Telas menores)

## Tecnologias
- HTML5
- CSS3 (custom properties, flexbox/grid, `clamp()` para escalas fluidas)
- JavaScript vanilla (sem bibliotecas externas, sem bundler)

## Estrutura do projeto
```
index.html              → página única
css/style.css           → estilos e design tokens
css/background.css      → camada de fundo (glows, ruído, linhas)
js/script.js            → carrosséis, lightbox, menu mobile, scroll reveal
img/                     → imagens (.webp otimizadas + favicons .png)
robots.txt / sitemap.xml → SEO técnico
```

### Seções da página (`index.html`)
`header` (`#inicio`) → `hero` → `flagship-banner` → `#servicos` → `shop-banner` → `#cursos` → `#sobre` (Por que escolher) → `#trabalhos` (carrossel) → `#guia-furos` → `#depoimentos` (carrossel) → `cta-banner` → `#localizacao` → `footer`.

### JavaScript (`js/script.js`)
- **Carrossel genérico (`initCarousel`)**: usado em Serviços, Trabalhos Realizados e Depoimentos. Loop infinito via clonagem dos primeiros cards, autoplay a cada 4s, pausa no hover, 3 cards por view no desktop (≥1024px), 2 no tablet (≥640px), 1 no mobile. Pausa o autoplay quando a aba fica em segundo plano (`visibilitychange`) para evitar que o carrossel "fuja" da tela.
- **Lightbox (`initLightbox`)**: usado no Guia de Piercings e no catálogo de cores de anodização — abre a imagem em tela cheia, fecha com X, clique fora ou Esc.
- **Scroll reveal (`initScrollReveal`)**: anima elementos `.reveal` (fade + leve deslocamento) ao entrarem na tela, via `IntersectionObserver`; respeita `prefers-reduced-motion`.
- **Depoimentos (`initTestimonialExpand`)**: mostra "Ver mais" apenas nos cards cujo texto é cortado pelo line-clamp.

## SEO
- `index.html` usa semântica HTML5 (`main`, `section`, `article`, `header`, `footer`), hierarquia de headings estruturada (h1 → h2 → h3), meta description, Open Graph, Twitter Card e Schema Markup (JSON-LD, tipo `BeautySalon` com avaliações e catálogo de serviços).
- `robots.txt` e `sitemap.xml` na raiz do projeto, apontando para `https://studio.defendipiercing.com.br/`.
- Favicons em `img/favicon-16.png`, `img/favicon-32.png` e `img/favicon-180.png` (apple-touch-icon).

## Identidade visual — "Dark Luxury Glass"

### Paleta de cores (`css/style.css`, `:root`)

| Token | Valor | Uso |
|---|---|---|
| `--bg-darkest` | `#1B0A10` | Fundo geral da página |
| `--bg-hero-corner` | `#270D15` | Gradiente de canto do hero |
| `--surface-card` | `#29161A` | Superfície de cards |
| `--surface-why` | `#1E0F14` | Superfície da seção "Por que escolher" |
| `--surface-testimonial` | `#1D1115` | Superfície dos cards de depoimento |
| `--btn-fill` | `#3A1220` | Preenchimento sólido de botão |
| `--btn-text` | `#E7D2D7` | Texto de botão |
| `--btn-ghost-fill` | `#1B0B0F` | Preenchimento de botão ghost |
| `--btn-ghost-text` | `#DCD5D6` | Texto de botão ghost |
| `--primary` | `#8E4A63` | Cor de destaque principal (vinho) |
| `--gold` | `#CFAD66` | Dourado, usado na tag "flagship" e detalhes premium |
| `--whatsapp` | `#25D366` | Verde do botão flutuante do WhatsApp |
| `--accent-glow` | `#E8578C` | Rosa vibrante, usado em glows/sombras |
| `--text-heading` | `#FFFFFF` | Títulos |
| `--text-body` | `rgba(255,255,255,.72)` | Texto de corpo |
| `--text-title` | `#96828B` | Títulos de card de serviço |
| `--text-section-heading` | `#B9B2B6` | Título de seção (`.section-title`) |
| `--text-muted` | `#9B7C85` | Texto secundário/legendas |
| `--border-card` | `rgba(190,130,150,.15)` | Borda de cards |
| `--divider` | `rgba(255,180,220,.08)` | Linhas divisórias |
| `--overlay-img` | `rgba(20,6,10,.35)` | Overlay sobre imagens |

**Sistema "glass" (cards e botões):**

| Token | Valor |
|---|---|
| `--glass-card-bg` | `linear-gradient(180deg, rgba(65,22,36,.72), rgba(30,14,22,.96))` |
| `--glass-border` | `rgba(255,180,220,.10)` |
| `--glass-shadow` | `0 10px 40px rgba(0,0,0,.35), 0 0 18px rgba(255,70,130,.08), inset 0 1px rgba(255,255,255,.04)` |
| `--glass-shadow-hover` | `0 25px 60px rgba(0,0,0,.45), 0 0 30px rgba(255,60,130,.18)` |
| `--btn-glass-bg` | `linear-gradient(180deg, #7C2E54, #541D39)` |
| `--btn-glass-bg-hover` | `linear-gradient(180deg, #A33E70, #6D274A)` |
| `--btn-glass-border` | `rgba(255,180,220,.15)` |
| `--btn-glass-shadow` | `0 0 18px rgba(255,60,120,.22), 0 8px 24px rgba(0,0,0,.35)` |
| `--btn-glass-shadow-hover` | `0 0 35px rgba(255,70,130,.35)` |

### Tipografia

- **Display (títulos)**: `'Cormorant Garamond', Georgia, serif` — usado em `h1`, `h2`, `h3` (peso 500, `line-height:1.2`).
- **Corpo/UI**: `'Montserrat', system-ui, sans-serif` — usado em texto corrido, navegação, botões e labels em caixa alta.
- Fontes carregadas via Google Fonts: pesos 400/500/600 de ambas as famílias.

| Elemento | Fonte | Tamanho | Peso | Observações |
|---|---|---|---|---|
| `h1` (hero) | Display | `clamp(30px, 5.8vw, 54px)` | 500 | `max-width:26ch` |
| `.section-title` (h2) | Display | `clamp(24px, 4vw, 30px)` | 500 | Uppercase, `letter-spacing:3px` |
| `.flagship-card h2` | Display | `clamp(24px, 4.2vw, 36px)` | 500 | Uppercase |
| `.cta-banner h2` / `.shop-banner h2` | Display | `clamp(28px, 5vw, 40px)` | 500 | Uppercase |
| `.service-body h3` | Corpo | `18px` | 600 | Uppercase, `letter-spacing:1.5px` |
| `.cursos-list h3` | Display | `clamp(17px, 2.4vw, 19px)` | 500 | Uppercase |
| `.why-card h3` | Corpo | `13px` | 600 | Uppercase, `letter-spacing:1px` |
| `.footer-grid h3` | Corpo | `13px` | normal | Uppercase, `letter-spacing:1px` |
| `.hero-text` / `.flagship-card p` | Corpo | `16px` | normal | Texto de destaque |
| `.service-body p` / `.why-card p` | Corpo | `13px` | normal | `line-height:1.7` |
| `.site-nav a` | Corpo | `13px` | 500 | Uppercase, `letter-spacing:.08em` |
| `.btn-primary` | Corpo | `12px` | 600 | Uppercase, `letter-spacing:2px` |
| `.eyebrow` / `.hero-tagline` | Corpo | `12–14px` | normal | Uppercase, letter-spacing largo (label de destaque) |

### Layout e espaçamento
- Container principal: `--container: 1320px` (`.container { max-width; margin-inline:auto; padding-inline:clamp(20px,5vw,40px) }`).
- Escala de espaçamento (`--sp-*`): `8px, 16px, 24px, 32px, 48px, 64px, 80px, 120px`.
- Raios: `--radius-card: 8px`, `--radius-img: 6px`.
- Breakpoints principais: `480px` (mobile pequeno), `640px` (2 cards por view), `1024px` (desktop, 3 cards por view e menu expandido).
