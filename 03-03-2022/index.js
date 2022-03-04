const beerRouter = require('./beer-router'); 
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const {method, url} = req;

    if(url.startsWith('/beer') ){
        beerRouter(req, res);
    }
   
  });

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});