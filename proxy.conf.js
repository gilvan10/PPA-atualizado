//Mas não funcionou, resolveu o problema de Cors, mas deu erro no servidor 504 Time Out

//No arquivo package.json coloca esse comando "start": "ng serve --proxy-config proxy.conf.js" indicando o arquivo
//No serviço na url coloca apenas o que fica depois de 8080/ por exemplo: ppa/infor-acao-prefeitura-bairro/1/2018-2021

const PROXY_CONFIG = [
  {
     context: ['/ppa'],
     target: ['http://localhost:8080/'],
     secure: false, //está false por que é é a http, em produção seria teria que ser https 
     logLevel: 'debug',
     //changeOrigin: true,
  }
];

module.exports = PROXY_CONFIG;

