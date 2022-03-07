const fs = require('fs');
const path = require('path');

//Aqui está pegando os arquivos e jogando em um array
const filePath = [
    path.join(__dirname,'file1.txt'),
    path.join(__dirname,'file2.txt'),
    path.join(__dirname,'file3.txt')
];

// criando uma variavel para ser alimentada depois
let texto = '' ;

//Percorre todo o array e inclui as informações em Texto com uma quebra de linha no inicio e uma no fim 
filePath.forEach((indice) =>{
    texto = texto.concat(`\n${fs.readFileSync(indice, 'utf-8')}\n`)
});

console.log(`Arquivos lidos:  ${texto}`);

//Aqui ele inclui os dados no arquivo file-resultado.txt
fs.writeFileSync('file-resultado.txt', texto);

//Criado o caminho da leitura do arquivo novo
const filePath2 = path.join(__dirname,'file-resultado.txt');

// Retorno Sincrono do arquivo
const novoFile = fs.readFileSync(filePath2, 'utf-8');

//Resultado do mesmo no terminal
console.log(`Leitura do novo arquivo ${novoFile}`);


/*

--->Aqui ele percorre o array e em seguida efetua o delete dos arquivos<---

filePath.forEach((indice) => {
    fs.unlinkSync(indice);
});
*/