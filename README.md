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
