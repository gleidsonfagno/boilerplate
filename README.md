# Boilerplate Next.js do React Avançado

Este é um boilerplate Next.js usado no curso chamado React Avançado.

## O que está incluído?

Este projeto utiliza muitas ferramentas, como:

- TypeScript
- Next.js
- Styled Components
- Jest
- React Testing Library
- Storybook
- ESLint
- Prettier
- Husky

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

- configurar o .editorconfig

- configurar o Eslint

```bash
npx eslint --init

instala tudo

npx eslint src
# serve para verificar os errros no codigo

npm run lint

```

configurar o pritter com eslint

```bash

npm install --save-dev --save-exact prettier

npm install --save-dev eslint-plugin-prettier eslint-config-prettier

```

Configurando um git hook com Husky e Lint-Staged

```bash
npm install --save-dev husky
# passo 2
npx husky init
```

instalando e configurando o Jest com TypeScript

Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade

```bash
npm install --save-dev jest @babel/preset-typescript @types/jest
# instalndo jest com babel e o typescript
npm run test
# comando de test
```

Instalando o React Testing Library e escrevendo primeiros testes

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom

# depois de instalar colocar no setup.ts
import '@testing-library/jest-dom'

```

```javascript
<!-- no curso esta assim -->

"test:watch": "npm test --watch",
<!-- atualizei para esse  -->
"test:watch": "jest --watch",

// e executo o comando

npm test --watch
```

retonarnod e configurando

```javascript
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*": [
      "npm run lint --fix",
      "npm test --bail"
    ]
  },
// removido do arquivo packeg.json
```

Instalando o Styled Components e configurando o SSR

```bash
npm install styled-components

npm install --save--dev @types/styled-components babel-plugin-styled-components

```

Módulo 1 Criando Boilerplate do NextJS finalizado

Criando estilos no primeiro componente

```bash

```

00:18:30 15. Configurando o Storybook e escrevendo stories

```bash
npx storybook@latest init

npm install --dev storybook/preset-typescript
```

no packege.json

```javascript
"storybook": "storybook dev s- ./public -p 6006",

mp arquivo main.ts
'../src/**/*.mdx',
```

tem que instalar

```bash

npm install --dev storybook/preset-typescript
npm install @storybook/addon-knobs --dev

npm uninstall --save-dev @storybook/addon-knobs

```

Migrando Storybook para versão 6.x

```javascript
// nao precisa desses pluguin na vai ser usado
"@storybook/addon-interactions": "7.6.10",
    "@storybook/addon-knobs": "^7.0.2",
    "@storybook/addon-links": "7.6.10",

```

Configurando o PWA

```javascript
npm install next-pwa
npm install webpack@latest

configurar o next

$env:NODE_ENV="production"; npm run build

```

Iniciando um projeto através do nosso boilerplate

```bash
npx create-next-app nome-do-seu-projeto -e https://github.com/gleidsonfagno/boilerplate
```

Atualizando story book

```bash
npm run build-storybook

npx http-server ./path/to/build

```

configurando plop

```bash
# 1 instalacao
npm uninstall plop
```

configuraçao no packege .js

```javascript
"generate": "npx run plop --plopfile ./generate/plopfile.js",

```

rodA comando

```bash
npm run generate
```
