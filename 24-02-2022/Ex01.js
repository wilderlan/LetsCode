// Criar 3 endpoints (e.g. /foo, /baz, /bar) e retornar 3 tipos (html, json, e...) diferentes de dado

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const {method, url} = req;

    if(method === 'GET' && url === '/foo'){
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            nome: 'wilderlan!',
            ano : 1991
        }));
    }

    else if(method === 'GET' && url === '/baz'){
        res.statusCode = 202;
        res.setHeader('Content-Type', 'text/html')
        res.end(
            `<body>
            <h1>Retorno</h1>
            <p>de HTML</p>
            </body>`
        );
    }

    else if(method === 'PUT' && url === '/bar'){
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/css')
        res.end(
            `Teste PUT com sucesso!!`
        );
    }
  })

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});