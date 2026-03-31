# PRD — Centro Musical LB: Landing Page

## 1. Visão Geral

### 1.1 Proposta de Valor
Centro Musical LB é uma escola de música localizada em Porto Alegre (Av. José Gertun) especializada principalmente no **ensino infantil e juvenil**, com aulas também abertas a adultos. O modelo é de **aulas individuais personalizadas** — sem turmas fixas, o aluno define o objetivo e a escola traça o caminho. O público predominante são crianças e adolescentes matriculados por seus pais/responsáveis. Este projeto consiste na criação de uma **Landing Page (LP) de alta conversão** com identidade visual premium, focada em transformar visitantes em alunos matriculados.

### 1.2 Problema que Resolve
- A escola atualmente não possui presença digital profissional que reflita a qualidade do seu ensino.
- Potenciais alunos que "deixaram o sonho de lado" não têm um canal digital que fale diretamente com o seu estado emocional.
- A ausência de SEO local impede que a escola apareça em buscas no Google Maps / Google Search para moradores de Porto Alegre.

### 1.3 Objetivo do Produto
Criar uma LP single-scroll, visualmente excepcional, que:
1. Gere **leads qualificados** via "Aula Experimental" como CTA principal.
2. Comunique a missão emocional da escola — "realizar o sonho que ficou para trás".
3. Ranqueie no Google para buscas locais como _"escola de música Porto Alegre"_.

---

## 2. Personas

> **Nota de produto:** Crianças e adolescentes representam a **maioria** da base de alunos. A LP deve falar primariamente com pais/responsáveis, que são os decisores de compra, mas também emocionar o aluno (criança/teen) que muitas vezes acessa o site junto com os pais.

### Persona A — "O Pai/Mãe que Quer Investir no Filho" ⭐ (Persona Primária)
| Atributo | Detalhe |
|---|---|
| Idade | 28–45 anos |
| Contexto | Procura atividade extracurricular de qualidade e segura para o filho (5–16 anos) |
| Motivação | Desenvolvimento cognitivo, disciplina, criatividade e expressão artística do filho; valoriza aula individual onde o professor foca 100% no aluno |
| Dor | Medo de matricular e o filho desistir; dificuldade em avaliar qualidade sem visitar; preocupação com segurança do ambiente |
| Gatilho | Depoimentos de outros pais, ver crianças tocando nos vídeos, transparência sobre metodologia e professores |
| Jornada | Pesquisa no Google → chega via SEO local → precisa de confiança rápida → entra em contato via WhatsApp |

### Persona B — "A Criança / Adolescente" (Influenciador da decisão)
| Atributo | Detalhe |
|---|---|
| Idade | 6–16 anos |
| Contexto | Quer aprender um instrumento que viu em um vídeo, jogo ou com amigos |
| Motivação | Tocar a música favorita; se sentir "legal"; pertencimento a um grupo |
| Dor | Medo de ser o único iniciante; não saber por onde começar |
| Gatilho | Ver crianças da mesma faixa etária tocando nos vídeos; ícones dos instrumentos chamando atenção |
| Papel | Não decide a matrícula, mas influencia fortemente o pai/mãe |

> **Diferencial a destacar na LP:** Aulas 100% individuais e personalizadas — o aluno aprende no seu ritmo, focado no estilo musical e nas músicas que ele quer tocar. Sem grade fixa, sem comparação com colegas.

### Persona C — "O Adulto que Deixou o Sonho" (Persona Secundária)
| Atributo | Detalhe |
|---|---|
| Idade | 28–50 anos |
| Contexto | Quis aprender música na juventude mas não teve oportunidade/tempo |
| Motivação | Realizar um desejo pessoal represado; busca por lazer com propósito |
| Dor | Acredita que "é tarde demais" ou que vai precisar de muito tempo |
| Gatilho | Ver conteúdo inspiracional de adultos tocando / depoimentos reais |

---

## 3. Escopo do Produto

### 3.1 Dentro do Escopo (v1.0)
- [x] Landing Page single-scroll com 5 seções principais
- [x] Design system com dark theme (preto `#0a0a0a`) e accent amarelo da marca (`#FFD600`)
- [x] Integração de áudio por instrumento (hover-to-play, 2s de preview)
- [x] CTA sticky "Reserve sua Aula Experimental" no mobile
- [x] Carrossel de depoimentos com clipes de vídeo de alunos
- [x] Botão de WhatsApp com trigger direto
- [x] SEO técnico com Schema.org `MusicSchool`
- [x] Otimização de imagens (WebP/AVIF via `vite-plugin-image-optimizer`)
- [x] Scroll-spy na Navbar
- [x] Efeito parallax nos instrumentos (Framer Motion)
- [x] Cursor customizado no desktop

### 3.2 Fora do Escopo (v1.0)
- [ ] Portal do aluno (login, pagamentos, grade de aulas)
- [ ] Blog / conteúdo educativo
- [ ] Sistema de agendamento online integrado
- [ ] App mobile nativo
- [ ] Multi-idioma

---

## 4. Arquitetura das Seções (Single-Scroll)

```
┌─────────────────────────────────────┐
│  01. HERO                           │
│  "Domine seu instrumento,           │
│   no seu ritmo."                    │
│  Background: video ou foto full-hd  │
│  CTA: Glassmorphic card             │
├─────────────────────────────────────┤
│  02. THE WHY (Mission)              │
│  "Founder's Note" estilo editorial  │
│  Tipografia large serif, whitespace │
├─────────────────────────────────────┤
│  03. CURSOS                         │
│  Grid de instrumentos               │
│  Hover → audio preview + detalhes  │
├─────────────────────────────────────┤
│  04. SOCIAL PROOF                   │
│  Depoimentos (carrossel horizontal) │
│  Cards de professores               │
├─────────────────────────────────────┤
│  05. LOCALIZAÇÃO / CONTATO          │
│  Mapa integrado                     │
│  WhatsApp one-click                 │
└─────────────────────────────────────┘
```

### 4.1 Detalhamento por Seção

#### Seção 01 — Hero
- **Conteúdo principal:** Headline bold (Bebas Neue / Montserrat Black), subtítulo em Inter
- **Background:** Vídeo em loop (fallback: foto high-res) com overlay escuro semi-transparente
- **CTA Card:** Estilo glassmorphism — `backdrop-blur`, borda `#FFD600/25`, campos: Nome + WhatsApp + Instrumento desejado
- **Tagline sugerida:** _"Aulas individuais. No seu ritmo. Para onde você quer chegar."_
- **Toggle Sound:** Ícone de som no canto superior direito; habilitado por padrão `off` (LGPD/UX)

#### Seção 02 — The Why
- **Layout:** Coluna única centralizada, texto largo, margem generosa
- **Componente:** "Founder's Note" — foto do fundador à esquerda, citação em blockquote estilizado
- **Tom (secundário — adultos):** Emocional — _"Nunca é tarde para começar."_
- **Proof points visuais:** Número de alunos, anos de experiência, destaques do modelo individual ("Nenhum aluno igual ao outro")
- **Animação:** Texto entra via fade-in conforme scroll (Framer Motion `whileInView`)

#### Seção 03 — Cursos
- **Layout:** Grid responsivo (2 col mobile / 4 col desktop)
- **Instrumentos disponíveis:** Bateria, Violão, Guitarra, Baixo, Piano/Teclado, Canto
- **Interação:** Hover ou tap no card → expande detalhes + toca preview de áudio 2s
- **Card contém:** Ícone customizado do instrumento, nome, breve descrição, badge "Aula Individual" e CTA "Quero aprender"
- **Sem referência a níveis fixos** — a comunicação é "você aprende no seu ritmo"

#### Seção 04 — Social Proof
- **Sub-seção A (Depoimentos — prioridade: pais falando sobre os filhos):** Carrossel horizontal, auto-play suave, cada card com: foto do pai/mãe (ou da criança tocando), nome, instrumento do filho, depoimento em texto + botão "▶ Assista" que abre modal de vídeo com o aluno tocando
- **Sub-seção B ("Conheça Nossos Alunos" — mini-galeria):** 3–4 vídeos curtos em destaque de crianças/teens tocando. Alta carga emocional para os pais que estão avaliando.
- **Sub-seção C (Professores):** Grid de cards com foto do professor, nome, instrumento ensinado, breve bio, experiência com crianças destacada, links para **Instagram** e **YouTube** do professor (quando disponível)

#### Seção 05 — Localização / Contato
- **Mapa:** Embed do Google Maps apontando para Av. José Gertun, PA
- **Informações:** Endereço completo, horários de funcionamento, WhatsApp
- **Horários:**
  - Segunda: Fechado
  - Terça a Sexta: 09:00 – 20:00
  - Sábado: 09:00 – 17:00
- **WhatsApp CTA:** Botão com mensagem pré-preenchida: _"Olá! Gostaria de agendar uma Aula Experimental."_
- **Agendamento:** Via WhatsApp (modelo atual; migração para sistema online prevista em versão futura)

---

## 5. Design System

> **Identidade Visual:** O logo é um círculo amarelo com as letras **LB** em preto bold. A paleta deriva diretamente disso: **preto como base**, **amarelo vibrante como accent**. É uma identidade forte, contrastante e reconhecível — diferente de qualquer outra escola da região.

### 5.1 Paleta de Cores
| Token | Valor | Uso |
|---|---|---|
| `bg-primary` | `#0a0a0a` | Background global (preto profundo) |
| `bg-surface` | `#141414` | Cards, seções alternadas (preto elevado) |
| `brand-yellow` | `#FFD600` | Accent principal — CTAs, destaques, ícones ativos |
| `brand-yellow-hover` | `#FFBE00` | Hover states do amarelo |
| `brand-yellow-muted` | `rgba(255,214,0,0.15)` | Fundos sutis, bordas glass |
| `text-primary` | `#FFFFFF` | Textos principais |
| `text-muted` | `#888888` | Textos secundários |
| `glass-border` | `rgba(255,214,0,0.25)` | Bordas glassmorphism |

### 5.2 Tipografia
> O logo usa letras serifadas bold e compactas. A tipografia do site deve honrar essa energia: **forte, direta, sem floreios excessivos**.

| Uso | Família | Peso | Tamanho |
|---|---|---|---|
| Headline hero | **Bebas Neue** ou **Montserrat Black** | 900 | 80px (desktop) / 52px (mobile) |
| Section titles | Montserrat | 700 | 48px / 32px |
| Body text | Inter | 400 | 16px / 14px |
| Labels / UI | Inter | 600 | 14px / 12px |

> **Alternativa tipográfica:** Cormorant Garamond como headline se quiser dar toque mais "escola de artes" ao invés de impacto gráfico. Decisão a validar com o cliente.

### 5.3 Efeitos Visuais
| Efeito | Implementação | Onde |
|---|---|---|
| Glassmorphism | `backdrop-blur-md bg-white/5 border border-[#FFD600]/25` | Hero CTA card |
| Parallax | Framer Motion `useScroll` + `useTransform` | Imagens de instrumento |
| Cursor customizado | `div` overlay com `mix-blend-mode: difference` | Desktop global |
| Hover audio | `HTMLAudioElement.play()` com flag de unmute | Cards de curso |
| Fade-in scroll | `whileInView={{ opacity: 1 }}` | Todas as seções |

---

## 6. Requisitos Funcionais

### RF-01 — Navbar com Scroll-Spy
- A navbar deve ser sticky e transparente no topo, ficando sólida (`bg-black/95 backdrop-blur`) após 80px de scroll.
- O item de menu ativo deve ser destacado em `#FFD600` (amarelo da marca) com underline animado.
- Em mobile: menu hamburguer com drawer lateral.

### RF-02 — Toggle de Som
- Estado padrão: `muted`
- Ao ativar, habilita os previews de áudio nos cards de instrumento.
- Ícone de onda/volume no canto superior direito da Navbar.
- Persistir preferência em `sessionStorage` (não localStorage — evitar surpresas em visitas futuras).

### RF-03 — CTA Sticky Mobile
- Abaixo do Hero, um botão "Reserve sua Aula Experimental" deve aparecer fixado no bottom da tela em mobile (`position: fixed; bottom: 0`).
- Deve desaparecer quando o usuário estiver na seção #contact (para evitar sobreposição com o formulário).
- Ao clicar, rola para a seção Hero ou abre um modal de formulário simplificado.

### RF-04 — Formulário de Lead
- Campos: Nome do responsável (ou do aluno adulto), WhatsApp, Instrumento de interesse (select), Objetivo / O que quer aprender? (textarea curto, opcional).
- **Submit: abre WhatsApp** via `wa.me` deep link com os dados formatados na mensagem. Não há backend — fluxo 100% client-side.
- Mensagem gerada automaticamente: _"Olá! Me chamo [Nome], tenho interesse em aulas de [Instrumento]. [Objetivo]."_
- Validação client-side (React Hook Form + Zod).
- Feedback visual: loading state + mensagem de sucesso antes de redirecionar.

### RF-05 — Carrossel de Depoimentos
- Auto-play com intervalo de 5s, pausar ao hover.
- Navegação manual por setas e dots.
- Swipe em mobile.
- Modal de vídeo ao clicar em "▶ Assista" (YouTube embed ou vídeo local).

### RF-06 — Audio Preview por Instrumento
- Cada card de instrumento tem um arquivo de áudio de ~2s associado.
- Audio inicia no `mouseenter` (desktop) e `touchstart` (mobile), para no `mouseleave`/`touchend`.
- Condicionado ao toggle de som (RF-02) estar ativo.
- Fade-in/fade-out de 200ms para evitar clipping.

---

## 7. Requisitos Não-Funcionais

### RNF-01 — Performance
| Métrica | Meta |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Score (Performance) | ≥ 90 |
| Tamanho do bundle inicial (JS) | < 150KB gzip |

### RNF-02 — SEO
- Meta tags: `title`, `description`, `og:*` (Open Graph para WhatsApp e Instagram)
- Links canônicos para o perfil do **Instagram** e canal do **YouTube** da escola no footer
- JSON-LD Schema.org `MusicSchool`:
```json
{
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  "name": "Centro Musical LB",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. José Gertun",
    "addressLocality": "Porto Alegre",
    "addressRegion": "RS",
    "addressCountry": "BR"
  },
  "telephone": "+55...",
  "openingHours": "...",
  "url": "https://..."
}
```
- `sitemap.xml` e `robots.txt`
- Imagens com atributos `alt` descritivos

### RNF-03 — Acessibilidade
- WCAG 2.1 nível AA como target
- Contraste de texto mínimo 4.5:1
- Navegação por teclado funcional
- `aria-label` em todos os botões de ícone
- Respeitar `prefers-reduced-motion` desabilitando parallax e animações

### RNF-04 — Responsividade
| Breakpoint | Comportamento |
|---|---|
| Mobile (< 640px) | Layout single-column, CTA sticky, hamburguer menu |
| Tablet (640–1024px) | Grid 2 colunas para cursos |
| Desktop (> 1024px) | Grid 4 colunas, cursor customizado ativo |

### RNF-05 — Segurança
- Sem dados sensíveis no client-side
- Headers de segurança via `Vercel` / servidor de deploy (CSP, X-Frame-Options)
- O formulário de lead não deve expor chaves de API no frontend

---

## 8. Stack Técnica

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Framework | **Vite + React 18** | Build rápido, HMR, tree-shaking agressivo |
| Linguagem | **TypeScript** | Segurança de tipos, melhor DX |
| Estilização | **Tailwind CSS v4** | Utility-first, fácil dark mode, customização via CSS vars |
| Animações | **Framer Motion** | Parallax, whileInView, transições fluidas |
| Formulários | **React Hook Form + Zod** | Performance, validação tipada |
| Carrossel | **Embla Carousel** | Leve, acessível, suporte a swipe |
| Imagens | **vite-plugin-image-optimizer** | Conversão automática para WebP/AVIF |
| Fontes | **Fontsource** (Bebas Neue / Montserrat + Inter) | Self-hosted, sem dependency externa em runtime |
| SEO | **react-helmet-async** | Meta tags dinâmicas e JSON-LD |
| Deploy | **Vercel** | Edge network, preview deployments, analytics |

---

## 9. Estrutura de Componentes

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Scroll-spy, sound toggle, hamburger
│   │   ├── Footer.tsx
│   │   └── StickyMobileCTA.tsx # RF-03
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Mission.tsx
│   │   ├── Courses.tsx
│   │   ├── SocialProof.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── CourseCard.tsx      # Com audio preview
│       ├── TestimonialCarousel.tsx
│       ├── VideoModal.tsx
│       ├── LeadForm.tsx
│       ├── CustomCursor.tsx
│       └── GlassCard.tsx
├── hooks/
│   ├── useScrollSpy.ts
│   ├── useSoundEnabled.ts
│   └── useReducedMotion.ts
├── assets/
│   ├── audio/                  # Previews 2s por instrumento
│   ├── images/                 # Fontes de imagem (webp/avif gerados no build)
│   └── video/                  # Hero background video
├── lib/
│   └── schema.ts               # JSON-LD MusicSchool
└── App.tsx
```

---

## 10. Métricas de Sucesso (KPIs)

| Métrica | Meta (30 dias pós-launch) |
|---|---|
| Taxa de conversão LP → lead | ≥ 3% |
| Sessões orgânicas (Google) | ≥ 200/mês |
| Ranking Google "escola de música infantil Porto Alegre" | Top 5 |
| Ranking Google "escola de música Porto Alegre" | Top 10 |
| Tempo médio de sessão | ≥ 1m30s |
| Bounce rate | ≤ 60% |
| Ligações/WhatsApp geradas | ≥ 20/mês |
| Leads com campo "objetivo" preenchido | ≥ 50% |

---

## 11. Fases de Desenvolvimento

### Fase 1 — Foundation (Semana 1–2)
- [ ] Setup do projeto Vite + React + TS + Tailwind
- [ ] Design system (tokens de cor, tipografia, componentes base)
- [ ] Layout da Navbar com scroll-spy
- [ ] Seção Hero (estático, sem vídeo ainda)
- [ ] Deploy inicial na Vercel com domínio

### Fase 2 — Core Sections (Semana 3–4)
- [ ] Seção Mission / Founder's Note
- [ ] Seção Courses com grid e CourseCard
- [ ] Seção Social Proof com carrossel de depoimentos
- [ ] Seção Contact com mapa e formulário de lead

### Fase 3 — "Wow" Factor (Semana 5)
- [ ] Integração de áudio nos cards de instrumento
- [ ] Parallax com Framer Motion
- [ ] Cursor customizado no desktop
- [ ] Hero com vídeo em loop
- [ ] CTA sticky mobile (RF-03)

### Fase 4 — Performance & SEO (Semana 6)
- [ ] Otimização de imagens (WebP/AVIF pipeline)
- [ ] Lazy loading das seções abaixo do fold
- [ ] JSON-LD Schema.org MusicSchool
- [ ] Meta tags, OG
- [ ] Auditoria Lighthouse (meta: ≥ 90)
- [ ] Testes de acessibilidade (axe-core)

---

## 12. Questões em Aberto

| # | Questão | Status | Owner | Prioridade |
|---|---|---|---|---|
| Q1 | Qual o destino final dos leads? | ✅ **WhatsApp** | Negócio | Alta |
| Q2 | Temos vídeos de alunos para o carrossel? | ✅ **Sim, disponíveis** | Conteúdo | Alta |
| Q3 | Qual o domínio final do site? | ✅ **Definido — informar ao final** | Negócio | Alta |
| Q4 | Faixas etárias atendidas? | ✅ **Sem restrição de idade** | Negócio | Alta |
| Q5 | Turmas ou aulas individuais? | ✅ **Aulas 100% individuais e personalizadas** | Negócio | Alta |
| Q6 | Fundador tem material para "Founder's Note"? | ✅ **Sim** | Conteúdo | Média |
| Q7 | Horários de funcionamento? | ✅ **Seg: Fechado / Ter–Sex: 09–20h / Sáb: 09–17h** | Negócio | Média |
| Q8 | Há orçamento para fotos/vídeos profissionais? | ⏳ Em aberto | Negócio | Média |
| Q9 | Modelo de agendamento da aula experimental? | ✅ **WhatsApp por enquanto; sistema online em versão futura** | Negócio | Baixa |
