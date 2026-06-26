# Guia do projeto — NN Promotora (nnpromotora)

> **Leia isto primeiro.** Tudo que você precisa para se achar está aqui.

---

## 1. O que é este projeto?

Um **site de uma página só** (landing page) feito com **React + Vite**.

- Nome da marca: **NN Promotora**
- Identificador do projeto: **nnpromotora**
- Não tem várias páginas/URLs — só seções na mesma tela (`#inicio`, `#faq`, etc.)

---

## 2. Como rodar

```bash
npm install
npm run dev
```

Abra o link que aparecer (geralmente `http://localhost:5173`).

---

## 3. Mapa mental — como o site monta

Pense em **3 camadas**:

```
┌─────────────────────────────────────────┐
│  CAMADA 1 — Entrada                     │
│  index.html  →  main.jsx                │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  CAMADA 2 — Casca (sempre igual)        │
│  Preloader, Header, Footer, BackToTop   │
│  Arquivo: app/App.jsx                   │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  CAMADA 3 — Conteúdo da página          │
│  Hero, FAQ, Formulário, etc.            │
│  Arquivo: pages/HomePage.jsx            │
└─────────────────────────────────────────┘
```

**Ordem de leitura recomendada (15 min):**

1. `src/main.jsx` — ponto de partida
2. `src/app/App.jsx` — o que envolve o site
3. `src/pages/HomePage.jsx` — lista das seções
4. `src/config/site.js` — **dados da empresa (edite aqui!)**

---

## 4. Pastas — o que é cada uma

| Pasta | Em português simples |
|-------|----------------------|
| `src/config/` | **Configuração** — telefone, e-mail, logos, Instagram |
| `src/constants/` | **Textos fixos** — FAQ, menu, bancos, passos do “como funciona” |
| `src/pages/` | **Páginas** — hoje só existe a Home |
| `src/components/layout/` | **Partes fixas** — topo, rodapé, menu, preloader |
| `src/components/sections/` | **Blocos da página** — cada seção do site |
| `src/components/ui/` | **Botões pequenos** — ex.: troca de tema |
| `src/hooks/` | **Comportamentos** — menu no scroll, botão voltar ao topo |
| `src/lib/` | **Funções úteis** — validar CPF, telefone, cookie |
| `src/app/providers/` | **Estado global** — tema claro/escuro |
| `public/` | **Arquivos públicos** — CSS, imagens, fontes |

### O atalho `@/`

Em vez de `../../../config/site`, escreva:

```js
import { site } from '@/config/site'
```

`@/` = pasta `src/`.

---

## 5. ONDE MEXER — tabela principal

| Quero alterar… | Abra este arquivo |
|----------------|-------------------|
| Nome da empresa, telefone, e-mail, Instagram, logos | **`src/config/site.js`** |
| Links do menu | `src/constants/navigation.js` |
| Perguntas do FAQ | `src/constants/faq.js` |
| Bancos parceiros | `src/constants/parceiros.js` |
| Textos “como funciona” | `src/constants/steps.js` |
| Painéis INSS / Federal | `src/constants/linhasCredito.js` |
| Posts do Instagram | `src/constants/instagram.js` |
| Opções do formulário | `src/constants/simulacaoForm.js` |
| Prazos do hero (106x / 120x) | `src/constants/hero.js` |
| **Ordem das seções** na página | **`src/pages/HomePage.jsx`** |
| Visual de UMA seção | `src/components/sections/NomeDaSecao.jsx` |
| Cores e layout geral | `public/css/style.css` |
| Título da aba do navegador | `index.html` |
| Imagens | `public/img/` |

---

## 6. Cada seção do site → arquivo

| O que você vê no site | Arquivo |
|------------------------|---------|
| Animação ao carregar | `components/layout/Preloader.jsx` |
| Menu do topo | `components/layout/Header.jsx` |
| Banner principal (INSS / Federal) | `components/sections/Hero.jsx` |
| Logos dos bancos | `components/sections/Parceiros.jsx` |
| Painéis INSS e Governo | `components/sections/LinhasCredito.jsx` |
| Sobre a empresa | `components/sections/Sobre.jsx` |
| Como funciona (3 passos) | `components/sections/ComoFunciona.jsx` |
| Showcase / experiência | `components/sections/Experiencia.jsx` |
| Instagram | `components/sections/InstagramFeed.jsx` |
| Perguntas frequentes | `components/sections/Faq.jsx` |
| Formulário de simulação | `components/sections/SimulacaoForm.jsx` |
| WhatsApp / contato | `components/sections/Contato.jsx` |
| Rodapé (CNPJ, endereço) | `components/layout/Footer.jsx` |
| Botão voltar ao topo | `components/layout/BackToTop.jsx` |
| Botão tema claro/escuro | `components/ui/ThemeToggle.jsx` |

---

## 7. Arquivos em `public/`

| Pasta/arquivo | Função |
|---------------|--------|
| `public/css/style.css` | Visual principal (classes `nn-*`) |
| `public/css/bootstrap.min.css` | Grid e formulários |
| `public/css/default.css` | Espaçamentos (`mt-50`, etc.) |
| `public/css/elegant-icons.min.css` | Ícones (+, seta, check) |
| `public/css/responsive.css` | Celular e tablet |
| `public/img/logo/` | Logos (`logo-nn.png`, `logo-nn-branca.png`, `logo-nn.svg`) |
| `public/img/saas-app/` | Imagens das seções |
| `public/img/bancos/` | Logos dos bancos |
| `public/favicon.svg` | Ícone da aba |

> As logos atuais são cópias da marca anterior. Troque os arquivos em `public/img/logo/` quando tiver a arte da NN Promotora.

---

## 8. Conceitos React (só o essencial)

| Conceito | O que é | Onde ver no projeto |
|----------|---------|---------------------|
| **Componente** | Função que desenha HTML | Qualquer `.jsx` em `components/` |
| **useState** | Dado que muda a tela | `Hero.jsx` (botões INSS/Federal) |
| **useEffect** | Roda ao carregar / escutar eventos | `Preloader.jsx`, hooks em `hooks/` |
| **Context** | Dado global (tema) | `app/providers/ThemeProvider.jsx` |
| **.map()** | Repete lista sem copiar HTML | Menu, FAQ, bancos |

---

## 9. Roteiro de estudo (se tiver perdido)

### Dia 1 — Só olhar
1. Rode `npm run dev`
2. Abra `src/pages/HomePage.jsx` e veja a lista de seções
3. Mude o telefone em `src/config/site.js` e salve — veja atualizar no rodapé

### Dia 2 — Uma seção
1. Abra `components/sections/Hero.jsx`
2. Mude um texto
3. Compare com o que aparece no navegador

### Dia 3 — Textos centralizados
1. Abra `constants/faq.js`
2. Adicione uma pergunta
3. Veja em `#faq` no site

### Dia 4 — Formulário
1. Abra `components/sections/SimulacaoForm.jsx`
2. Leia `lib/cpf.js` e `lib/phone.js`

### Dia 5 — Tema
1. Abra `components/ui/ThemeToggle.jsx`
2. Abra `app/providers/ThemeProvider.jsx`

---

## 10. Perguntas frequentes

**Onde mudo o nome da empresa?**  
Só em `src/config/site.js` — vários textos já usam `site.brand.name` automaticamente. Textos em `constants/` você edita manualmente se mudar o nome.

**Por que tem classe `nn-` no CSS?**  
É o prefixo da marca (NN Promotora). Antes era `primme-`; foi renomeado.

**As imagens sumiram?**  
Confira se existem em `public/img/`. Se faltar, copie do site HTML original.

**O projeto parece grande demais?**  
O `style.css` veio de um template enorme — **ignore o que não usa**. Mexa só nos arquivos da tabela da seção 5.

---

## 11. Glossário rápido

| Termo | Significado |
|-------|-------------|
| Vite | Ferramenta que roda o projeto (`npm run dev`) |
| React | Biblioteca que monta a interface |
| JSX | HTML dentro do JavaScript |
| Hook | Função `use...` do React |
| Landing page | Site de uma página com várias seções |
| Provider | Envolve o app e guarda estado global (tema) |

---

*Projeto: **nnpromotora** · Marca: **NN Promotora** · Guia único — não há outros docs.*
