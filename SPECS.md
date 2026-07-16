# SPECS.md — Defendi Studio (Landing Page)

Especificação técnica extraída do mockup `img/ESCOPO.jpeg` com foco em **máxima fidelidade visual**.

> ℹ️ **Nome da marca:** o mockup escreve "Efendi Studio" por engano de digitação do design; o nome oficial confirmado é **Defendi Studio**. Todas as ocorrências abaixo já usam o nome correto.
>
> ⚠️ **Sobre os valores:** tamanhos de fonte, espaçamentos e breakpoints ainda são **estimados por leitura visual proporcional** do JPEG. **As cores (seção 2), porém, foram extraídas por amostragem programática de pixel** (script Python/Pillow lendo o RGB real de ~30 pontos, com verificação visual via marcadores de debug antes de aceitar cada leitura) — ver metodologia no fim da seção 2. Onde houver o arquivo de design original (Figma/PSD), prefira sempre os tokens de lá; a imagem é 759×1600px com compressão JPEG progressiva, o que impõe um teto de precisão mesmo com sampling exato.

---

## 1. Identidade & Direção Visual

- **Segmento:** studio de estética — piercings, remoção de tatuagem, lobuloplastia.
- **Tom:** luxo / refinado / feminino. Sofisticado, íntimo, premium.
- **Tema:** **dark**, base vinho/bordô profundo.
- **Slogan:** `ARTE • SEGURANÇA • AUTOESTIMA`
- **Headline principal (hero):** "Mais que estética, uma experiência que transforma. Realçamos sua essência com personalidade e segurança."
- **Elemento memorável:** o glifo/monograma da marca (traço fino, orgânico, tipo "9"/"D" estilizado) que reaparece como **logo neon com brilho magenta** na seção CTA "PRONTA PARA REALÇAR".

---

## 2. Paleta de Cores (tokens)

Todos os valores abaixo vêm de **leitura direta de pixel** (mediana de patch 3×3 a 5×5px, para reduzir ruído de compressão JPEG), confirmada visualmente com marcadores de debug sobre a imagem original antes de aceitar cada ponto. O nível de confiança está indicado por token.

### Fundos — alta confiança (áreas planas grandes)
| Token | Hex | Uso |
|---|---|---|
| `--bg-darkest` | `#1B0A10` | Fundo do header e do footer |
| `--bg-hero-corner` | `#270D15` | Canto do gradiente do hero (área mais escura) |
| `--bg-hero-mid` | `#10050B` | Fundo do hero na faixa de texto/margem esquerda |
| `--bg-section` | `#13060F` | Fundo das seções de conteúdo (Serviços, Por que escolher, Trabalhos, Depoimentos, Onde estamos) — varia entre `#0A080B` e `#13060F` conforme a seção, todas na mesma família |
| `--bg-feature-strip` | `#080307` | Faixa dos ícones de diferenciais, no rodapé do hero (ponto mais escuro do layout) |

### Superfícies / Cards — confiança alta
| Token | Hex | Uso |
|---|---|---|
| `--surface-card` | `#29161A` | Corpo dos cards de serviço (Piercings, Remoção, Lobuloplastia) |
| `--surface-why` | `#170B0F`–`#2C2125` | Cards "Por que escolher" — leitura variou entre pontos (card é sutilmente mais claro que o fundo da seção, ~`#1E0F14` como valor central) |
| `--surface-testimonial` | `#1D1115` | Card de depoimento |
| `--surface-contact` | `#29141B` | Card de contato ("Onde estamos") |

### Botões — **correção em relação à 1ª versão (amostragem visual havia estimado rosa/mauve sólido; a leitura de pixel mostra outra realidade)**
| Token | Hex | Uso |
|---|---|---|
| `--btn-fill` | `#3A1220` | Preenchimento do botão sólido `AGENDAR AGORA` (vinho escuro saturado, **não** é rosa/mauve claro) |
| `--btn-text` | `#E7D2D7` | Texto do botão sólido (rosa-claro/blush, não branco puro) |
| `--btn-ghost-fill` | `#1B0B0F` | Preenchimento do botão do header `AGENDAR HORÁRIO` — é um botão **outline/fantasma**: mesmo tom do fundo do header, não preenchido |
| `--btn-ghost-text` | `#DCD5D6` | Texto do botão ghost (cinza-claro neutro, quase sem tinta rosa) |

> A borda do pill (se existir) não pôde ser isolada do anti-aliasing na amostragem — trate como uma borda 1px na cor `--primary` abaixo, com baixa confiança.

### Marca / Acentos
| Token | Hex | Confiança | Uso |
|---|---|---|---|
| `--primary` | `#8E4A63` | estimativa (não verificado por pixel) | Sublinhados de seção, ícones de destaque, texto de labels — tom médio da família rosa/vinho |
| `--gold` | `#CFAD66` | **alta** (pico de saturação encontrado varrendo a linha das estrelas) | Estrelas das avaliações (⭐) |
| `--whatsapp` | `#35A169`–`#44CD6F` | média (amostra pegou borda do ícone) | Botão flutuante do WhatsApp — o verde oficial da marca é `#25D366`; usar esse valor padrão é mais seguro que a amostra |
| `--accent-glow` | `#E8578C` | estimativa (não verificado — é um glow/brilho, sem área plana amostrável) | Logo neon na seção CTA |

### Texto — confiança média-alta (pequenas glifos têm ruído de anti-aliasing; usados picos de brilho como proxy do valor "puro")
| Token | Hex | Uso |
|---|---|---|
| `--text-heading` | `#FDF7FA` | Wordmark do logo — na prática, branco quase puro (não o creme `#F3EAE4` estimado antes) |
| `--text-body` | `#E7D2D7` | Parágrafo do hero sobre fundo escuro/foto |
| `--text-title` | `#96828B` | Títulos de card (`PIERCINGS` etc.) — tom mais fechado, rosa-acinzentado/taupe |
| `--text-section-heading` | `#B9B2B6` | Headings de seção (`NOSSOS SERVIÇOS` etc.) — cinza-rosado claro |
| `--text-muted` | `#9B7C85` | estimativa — labels pequenos, legendas, copyright |

### Linhas / Estados (estimativa — não amostrável diretamente, são transparências sutis)
| Token | Valor (aprox.) | Uso |
|---|---|---|
| `--border-card` | `rgba(190,130,150,0.15)` | Borda sutil de cards |
| `--divider` | `rgba(255,255,255,0.07)` | Divisórias / borda do footer |
| `--overlay-img` | `rgba(20,6,10,0.35)` | Overlay avinhado sobre fotos para integrar ao tema |

### Metodologia da amostragem
1. Script Python (Pillow) carregou `img/ESCOPO.jpeg` (759×1600px, JPEG progressivo).
2. Para cada elemento, um ponto (x,y) foi escolhido a partir da leitura visual do layout; a cor foi lida como **mediana de um patch 3×3–5×5px** ao redor do ponto (reduz ruído de blocos de compressão JPEG vs. pixel único).
3. Um overlay de debug com marcadores verdes foi gerado sobre a imagem original e **visualizado antes de aceitar os valores** — pontos que caíram em cima de texto, fotos ou botões errados foram identificados e re-amostrados (aconteceu com os botões, título de cards e logo).
4. Para o dourado das estrelas, foi feita uma varredura de linha (scan) buscando o pixel de maior saturação amarelo/dourado na área das estrelas, em vez de um ponto fixo.
5. Para os botões, foi feito um scan horizontal/vertical completo do pill, revelando que os valores oscilam entre "cor de preenchimento" e "cor do texto" — a mediana dos pontos de preenchimento (excluindo outliers claros de texto) deu o valor final.
6. Tokens marcados como "estimativa" não puderam ser isolados com confiança (glow difuso, bordas finas, ou cor sem área plana suficiente) — ficam como estavam na leitura visual original.

**Sublinhado de título de seção:** pequeno traço horizontal centralizado (~40px de largura, ~2px de altura) na cor `--primary`, logo abaixo de cada heading (`NOSSOS SERVIÇOS`, `DEPOIMENTOS`, etc.).

---

## 3. Tipografia

Duas famílias (par display serifado + corpo sans). Fontes exatas não confirmadas — abaixo, as correspondências mais prováveis (Google Fonts) para reproduzir o visual.

### Famílias
| Papel | Fonte sugerida | Fallback | Observação |
|---|---|---|---|
| **Display / Serif** | `Cormorant Garamond` (alt: `Playfair Display`) | `Georgia, serif` | Logo, headings de seção, headline do hero. Serifa fina, alto contraste, elegante. |
| **Corpo / Sans** | `Montserrat` (alt: `Poppins`) | `system-ui, sans-serif` | Navegação, botões, parágrafos, labels. Geométrica, limpa. |

### Escala tipográfica (desktop)
| Elemento | Fonte | Tamanho (aprox.) | Peso | Tracking | Transform |
|---|---|---|---|---|---|
| Logo "Defendi Studio" (hero) | Serif | 64–72px | 400 | normal | Title case |
| Logo (header) | Serif | 22–24px | 400 | ~1px | Title case |
| Slogan `ARTE • SEGURANÇA • AUTOESTIMA` | Sans | 11–12px | 500 | ~3px | UPPERCASE |
| Heading de seção (`NOSSOS SERVIÇOS`) | Serif | 28–32px | 400–500 | ~3–4px | UPPERCASE |
| Headline CTA (`PRONTA PARA REALÇAR…`) | Serif | 34–40px | 500 | ~1px | UPPERCASE |
| Título de card (`PIERCINGS`) | Sans | 16–18px | 600 | ~1.5px | UPPERCASE |
| Título "Por que escolher" (col.) | Sans | 13–14px | 600 | ~1px | UPPERCASE |
| Parágrafo / descrição | Sans | 14–15px | 400 | normal | none |
| Nav links | Sans | 12–13px | 500 | ~1.5px | UPPERCASE |
| Botões | Sans | 12–13px | 600 | ~2px | UPPERCASE |
| Labels pequenos / legendas | Sans | 11px | 500 | ~1px | UPPERCASE |
| Copyright / footer fino | Sans | 12px | 400 | normal | none |

- **Line-height corpo:** ~1.6. **Headings:** ~1.2.

---

## 4. Layout & Grid

- **Container central (max-width):** ~1200px, centralizado, com padding lateral ~24px (mobile) / ~40px (desktop).
- **Hero:** full-bleed (imagem do modelo sangra até a borda direita). Split 2 colunas: ~45% texto (esquerda) / ~55% imagem (direita).
- **Grid de serviços:** 3 colunas iguais, gap ~24–30px.
- **Grid "Por que escolher":** 5 colunas iguais, gap ~16px.
- **Galeria "Trabalhos realizados":** faixa de miniaturas — grupos de imagens em linha única (parece ~9 thumbs em blocos), gap ~8–12px, cantos arredondados ~6px.
- **Depoimentos:** 3 colunas iguais, gap ~24px.
- **CTA banner:** 1 bloco full-width com imagem à esquerda, texto ao centro, logo neon à direita.
- **Onde estamos:** 2 colunas — mapa (~60%) + card de contato (~40%).
- **Footer:** 4–5 colunas (marca | Navegação | Serviços | Contato | Siga-nos).

### Espaçamento (escala base 8px)
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 120`

| Contexto | Valor (aprox.) |
|---|---|
| Padding vertical de seção | 80–100px |
| Gap entre título de seção e conteúdo | 40–48px |
| Padding interno de card | 24–28px |
| Gap entre cards (grids) | 24–30px |
| Altura do header | ~72–80px |

### Border-radius
| Elemento | Raio (aprox.) |
|---|---|
| Cards (serviço, depoimento, contato) | 8px |
| Imagens / thumbnails | 6px |
| Botões CTA primários (`AGENDAR AGORA`) | pill / totalmente arredondado (~999px) |
| Botões secundários (`SAIBA MAIS`, `COMO CHEGAR`) | ~4–6px (levemente arredondado) |
| Botão nav (`AGENDAR HORÁRIO`) | pill (~999px) |
| Botão WhatsApp | círculo (50%) |

### Sombras / Efeitos
- Cards: sombra difusa e sutil + borda de 1px `--border-card`.
- Hero e seções: gradiente radial/linear vinho para dar profundidade (atmosfera, não cor sólida).
- Logo neon (seção CTA): `text-shadow`/`filter: drop-shadow` em `--accent-glow` (glow magenta, múltiplas camadas de blur).
- Fotos: leve overlay avinhado (`--overlay-img`) para integrar ao tema.

---

## 5. Componentes (seção a seção)

### 5.1 Header (sticky)
- Fundo `--bg-darkest` (translúcido ao rolar, sugestão).
- Esquerda: monograma + "Defendi Studio" (serif).
- Centro/direita: nav — `INÍCIO · SERVIÇOS · SOBRE · TRABALHOS · DEPOIMENTOS · LOCALIZAÇÃO`.
- Item ativo (`INÍCIO`) com destaque sutil (sublinhado/cor).
- Direita: botão pill `AGENDAR HORÁRIO` (fundo `--primary`, texto creme).

### 5.2 Hero
- Coluna esquerda: monograma grande + wordmark, slogan `ARTE • SEGURANÇA • AUTOESTIMA`, parágrafo, botão pill `AGENDAR AGORA`.
- Coluna direita: foto do modelo (perfil, piercings na orelha + tatuagem no pescoço), sangrando na borda.
- Faixa de 4 diferenciais com ícone (linha, outline) + label em 2 linhas:
  `PROFISSIONAIS ESPECIALIZADOS · MATERIAIS PREMIUM · HIGIENE E SEGURANÇA · ATENDIMENTO PERSONALIZADO`.

### 5.3 Nossos Serviços
- Heading centralizado + sublinhado.
- 3 cards. Cada card: imagem topo (16:9~), título UPPERCASE, descrição, botão `SAIBA MAIS`.
  - **PIERCINGS** — "Aplicação com técnica precisa, joalheria premium e total segurança para um resultado perfeito."
  - **REMOÇÃO DE TATUAGEM** — "Tecnologia avançada para remoção segura e eficaz, sem agredir sua pele."
  - **LOBULOPLASTIA** — "Correção de rasgos e alargamentos no lóbulo da orelha com técnica minimamente invasiva."

### 5.4 Por que escolher o Defendi Studio?
- Heading + sublinhado.
- 5 colunas (card vinho `--surface-why`), cada uma com ícone outline + título + descrição curta:
  1. **PROFISSIONAIS EXPERTS** — "Equipe especializada e apaixonada pelo que faz."
  2. **MATERIAIS PREMIUM** — "Joias de titânio, aço cirúrgico e ouro 18k."
  3. **ESTERILIZAÇÃO RIGOROSA** — "Ambiente seguro, esterilizado e dentro das normas da Anvisa."
  4. **ATENDIMENTO PERSONALIZADO** — "Cada detalhe pensado para você se sentir única."
  5. **CONFORTO E EXCLUSIVIDADE** — "Espaço moderno, acolhedor e discreto."

### 5.5 Trabalhos Realizados
- Heading + sublinhado.
- Faixa de miniaturas (piercings, narinas, tatuagens, orelhas), cantos arredondados.
- Botão centralizado `VER MAIS TRABALHOS` (secundário/outline).

### 5.6 Depoimentos
- Heading + sublinhado.
- 3 cards. Cada: ícone de aspas (`--primary`), texto, 5 estrelas `--gold`, avatar circular + nome.
  - "Experiência incrível! Profissionais muito atenciosos e o resultado superou minhas expectativas." — **Juliana R.**
  - "Fiz a remoção da minha tatuagem e me surpreendi com o resultado. Tecnologia de ponta!" — **Marcos T.**
  - "Lobuloplastia impecável! Atendimento humanizado e ambiente super acolhedor." — **Camila S.**

### 5.7 CTA — "Pronta para realçar a sua essência?"
- Banner full-width, cantos arredondados. Imagem (orelha com piercings) à esquerda, texto ao centro, **logo neon magenta** à direita.
- Texto: "Agende seu horário e viva a diferença de um atendimento exclusivo e seguro."
- Botão pill `AGENDAR AGORA`.

### 5.8 Onde Estamos
- Heading + sublinhado.
- Esquerda: mapa (Google Maps embed) com pin, cantos arredondados.
- Direita: card de contato — monograma + "Studio", endereço "Rua das Flores, 123 · Vila Madalena – São Paulo/SP", "Horário de Atendimento: Segunda a Sábado, 10h às 20h", botão `COMO CHEGAR`.

### 5.9 Footer
- Fundo `--bg-darkest`, borda-topo `--divider`.
- Col. 1: monograma + wordmark + "Beleza, arte e segurança em cada detalhe."
- Col. 2 **NAVEGAÇÃO:** Início · Serviços · Sobre · Trabalhos · Depoimentos · Localização.
- Col. 3 **SERVIÇOS:** Piercings · Remoção de Tatuagem · Lobuloplastia.
- Col. 4 **CONTATO:** ☎ (11) 99999-9999 · @defendistudio · contato@defendistudio.com.br.
- Col. 5 **SIGA-NOS:** ícones Instagram, Facebook, TikTok.
- Linha inferior: "© 2025 Defendi Studio. Todos os direitos reservados." + "Desenvolvido com ♥ por Defendi Studio".

### 5.10 WhatsApp flutuante
- Canto inferior direito, fixo. Círculo verde `--whatsapp` com ícone WhatsApp branco, sombra + halo/anel sutil.

---

## 6. Ícones

- **Estilo:** line/outline, traço fino, monocromático (creme/`--text-secondary`).
- **Bibliotecas compatíveis:** Lucide, Feather ou Phosphor (weight "light/regular").
- Diferenciais do hero e cards "Por que escolher" usam ícones simples de contorno dentro de moldura arredondada.

---

## 7. Breakpoints (responsividade)

O mockup é **desktop**. Layout mobile não foi fornecido — abaixo, a estratégia recomendada (a validar/confirmar):

| Breakpoint | Largura | Comportamento sugerido |
|---|---|---|
| **xl** | ≥ 1440px | Container 1200px centralizado |
| **lg** | 1024–1439px | Layout desktop cheio |
| **md** | 768–1023px | Serviços 3→2 col; "Por que escolher" 5→3 col; depoimentos 3→2; hero pode empilhar |
| **sm** | 481–767px | Grids → 1–2 col; hero empilha (texto sobre imagem); nav vira menu hambúrguer |
| **xs** | ≤ 480px | Tudo em 1 coluna; padding lateral 16–20px; tipografia reduzida (~85%) |

> ⚠️ Como não há mockup mobile, os pontos de quebra e o comportamento acima são **decisões de design a confirmar**, não extraídos da imagem.

---

## 8. Pendências / Decisões antes de codar

1. **Fontes exatas:** confirmar se são Cormorant Garamond + Montserrat ou o arquivo original tem outras (não há como extrair fonte de um JPEG — permanece estimativa).
2. **Hex de baixa confiança:** `--primary`, `--accent-glow` e a borda dos botões não puderam ser isolados por pixel (glow difuso / sem área plana) — seção 2 já indica quais tokens são amostrados vs. estimados; se houver Figma/PSD original, revalidar esses específicos.
3. **Layout mobile:** não existe no escopo — precisa de aprovação da estratégia responsiva.
4. **Conteúdo real:** telefone, e-mail, @social, endereço e imagens são placeholders do mockup? → substituir pelos reais.
5. **Stack:** HTML/CSS puro, React, ou outro framework? (o `SPECS.md` é agnóstico).
