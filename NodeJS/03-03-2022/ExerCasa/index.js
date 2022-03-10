// Receber o tipo de cerveja como body(pode ser text mesmo)
// Qual método http que cria?
// Pegar o body escrever em um arquivo e responder que deu certo


const http = require('http');
//Apenas chamadas Assincronas
const fsPromise = require('fs').promises;
//Chamada de arquivos
const pafh = require('path');

//Criação do servidor
const server = http.createServer();

//Função que recebe o Body por requisição

function leituraBody(req){

    const body = [];
    //Tratamento da Promisse
    return new Promise((resolve, reject) =>{
        //Aqui ele trata os dados que ele recebe por partes
        req.on('data', chunk => {
            body.push(chunk);
          });
        //Aqui ele resolve finaliza o processo do tratamento data
        req.on('end', () => {
            const data = Buffer.concat(buffers).toString();
            resolve(data);
          });
        //Quando ele detecta o erro ele para.
        req.on('error', (e) => {
            reject(e);
          });
        });
}

// Função para escrever o arquivo

async function arquivos(texto){
    const nomeArquivo = 'Novo.txt';
    const caminho = pafh.join(__dirname,nomeArquivo);

    await fsPromise.writeFile(caminho,texto,'utf-8');
    return {
        filename: nomeArquivo,
        dado: texto
    }
}

server.on('request',async(req,res) => {


    if(req.method === 'POST'){
        const dadosEnviado = await leituraBody(req);
        const leitura = await arquivos(dadosEnviado);
        res.writeHead(201,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(leitura));
    }
})

/*
fsPromise.writeFile(); = Escrever um arquivo novo ou sobrescreve os dados do arquivo
fsPromise.appendFile(); = Ele acrescenta informações dentro de um arquivo criado
*/


server.listen(8080, () => {
    console.log(`escutando em http://localhost:8080`);
  });