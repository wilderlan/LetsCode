//Importações de modulo

const fs = require('fs');
const path = require('path');
//-----------------------------------
//Irá resolver o path da melhor forma

//Pegar o caminho do arquivo
//Para o exemplo abaixo irá rodar o arquivo no local onde está rodando a aplicação
//--const filePath = path.join('file.txt');--

//Para o exemplo abaixo irá rodar idependendo do local
//__dirname -- diretório onde está o arquivo
//__filename -- verificar se está na tred principal ou secundária
//O primeiro parâmetro ajuda a não ser obrigado a informar o caminho todo de onde está o arquivo ex:
//C:.../.../... 
const filePath = path.join(__dirname,'file.txt');

//Aqui ele recebe o caminho do arquivo, o formato a ser lido e
//ele recebe o calback de erro ou os dados
//Retorno assíncrono
fs.readFile(filePath,'utf-8',(err,data) => {
    console.log(`Os dados do arquivo são ${data}`);
});

//Para ser Sincrono
const testeSyncro = fs.readFileSync(filePath,'utf-8');

console.log(`Os dados do arquivo testeSyncro é ${testeSyncro}`)

//Retorno sincrono
console.log('teste');

//Promisses

function cumprimenta(nome){
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve('Olá, ' + nome);
       },2000);
   });
}

//Para retornar a mesma deve seguir o exemplo abaixo

cumprimenta('Wilderlan').then((res) => {
    console.log(res);
})

//Usando Promisse com readFile
fs.promises
    .readFile(filePath,'utf-8')
    .then((res) => {
        console.log('Isso tá acontecendo dentro da fs.promises.readFile\n',res);
    });

