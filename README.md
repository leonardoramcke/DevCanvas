# 🎨 DevCanvas - Modern CSS Generator

[![CI](https://github.com/leonardoramcke/DevCanvas/actions/workflows/ci.yml/badge.svg)](https://github.com/leonardoramcke/DevCanvas/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/leonardoramcke/DevCanvas/blob/main/LICENSE)

> Gerador moderno de CSS com preview em tempo real. Crie efeitos visuais incríveis como Glassmorphism, sombras compostas, gradientes e border radius de forma simples e intuitiva.

---

## 🚀 Funcionalidades

- **Preview em Tempo Real:** Visualize todas as alterações na interface instantaneamente.
- **Efeito Glassmorphism:** Ajuste transparência, blur (desfoque) e bordas para criar o efeito de vidro.
- **Box Shadow:** Configure sombras com offset X/Y, desfoque e opacidade.
- **Exportação Rápida:** Copie o código CSS gerado com apenas um clique.
- **Alternância de Tema:** Suporte a Light Mode e Dark Mode.
- **Persistência de Dados:** Salva suas preferências usando `localStorage`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Estruturação semântica)
- **CSS3** (Variáveis CSS, Flexbox, Grid, Animações e Glassmorphism)
- **JavaScript (ES6+)** (Manipulação do DOM e lógica do gerador)

---

## 📦 Como Executar o Projeto Localmente

Como o projeto foi desenvolvido em **HTML, CSS e JavaScript puros**, você não precisa instalar nenhuma dependência do Node.js ou gerenciador de pacotes!

### Passo a passo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/leonardoramcke/DevCanvas.git
   ```

2. **Abra o projeto:**
   Navegue até a pasta clonada e abra o arquivo `index.html` diretamente no navegador, ou utilize uma extensão como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code para recarregamento automático.

---

## 🧪 Qualidade de Código

Este projeto usa **ESLint** e **Prettier** para manter o código consistente, e **GitHub Actions** para rodar essas checagens automaticamente em cada push/pull request.

> Essa parte é opcional — só é necessária se você for **contribuir com o código**. Para apenas visualizar o site, o passo a passo acima é suficiente (nenhuma dependência de Node.js é exigida para rodar a aplicação).

Para rodar localmente:

```bash
npm install       # instala as ferramentas de desenvolvimento
npm run lint      # verifica problemas de código
npm run format    # formata os arquivos automaticamente
```
