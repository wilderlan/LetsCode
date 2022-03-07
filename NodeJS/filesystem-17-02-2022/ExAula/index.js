const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'file.txt');

fs.readFile(filePath,'utf-8',(err,data) => {
    console.log(`Mensagem a receber é:  ${data}`);
});

const syncro = fs.readFileSync(filePath,'utf-8');

console.log(`Mensagem a receber de Sync: ${syncro}`)

fs.promises
    .readFile(filePath,'utf-8')
    .then((promi) => {
        console.log('Isso tá acontecendo dentro da Promises\n',promi);
    });
