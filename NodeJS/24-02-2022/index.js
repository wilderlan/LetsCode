const http = require('http');

const server = http.createServer();
/*
server.on('request', (req, res) => {
  res.write('Olá mundo!');
  res.end();
});*/

server.on('request', (req, res) => {
    const {method, url} = req;

    if(method === 'GET' && url === '/teste'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            tipo: 'Olá mundo!!!',
            ano : 2022
        }));
    }

    else if(method === 'PUT' && url === '/teste2'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end(
            '<body>tipo: Olá mundo</body>'
        );
    }
  });

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});