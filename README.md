COMO RODAR O PROJETO BAIXADO
Instalar as dependências
### npm install

Rodar o projeto
### npm run dev

SEQUENCIA EXECUTADAS E BIBLIOTECAS INSTALADAS DURANTE A SEMANA DE IMERSÃO
Criar o arquivo package.json
### npm init

Instalar o react e o next [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)
instala o next , o rect e o react-dom 

### npm install next react react-dom

Rodar o projeto
### npm run dev

Abrir o projeto endereço padrão
[http://localhost:3000](http://localhost:3000) 

Instalar o Bootstrap
### npm install --save bootstrap

Instalar o ReactStrap
### npm install --save reactstrap react react-dom

## Na documentacao do NEXT JS
# Adding a Global Stylesheet
Criar file _apps.js dentro de pages
colar dentro :
  import '../styles.css'
  // This default export is required in a new `pages/_app.js` file.
  export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />  
  }


Instalar a biblioteca de ícone
### npm i --save @fortawesome/fontawesome-svg-core npm install --save @fortawesome/free-solid-svg-icons npm install --save @fortawesome/react-fontawesome