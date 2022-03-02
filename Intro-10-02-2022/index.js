const{maiorDeIdade,imprimeIdade} = require('./verificador-de-idade'); 

const args = process.argv;
const idade = args[2];


console.log({args});
console.log(maiorDeIdade(idade));
imprimeIdade(idade);