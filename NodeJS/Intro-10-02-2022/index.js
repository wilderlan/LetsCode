const{maiorDeIdade,imprimeIdade} = require('./verificador-de-idade'); 
const maiorDeIdadeAscii = require('./verifica-idade-ascii'); 

const figlet = require('figlet');
const redline = require('readline');

const args = process.argv;
const idade = args[2];


console.log({args});
console.log(maiorDeIdade(idade));
imprimeIdade(idade);

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Qual idade verificar?',(idade) =>{
    const msg = maiorDeIdadeAscii(idade);
    figlet(msg, function(err,data){
    console.log(data)
    rl.close();
    })
    
});
