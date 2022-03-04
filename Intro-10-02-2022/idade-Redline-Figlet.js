const redline = require('readline');

const figlet = require('figlet');

function verificaIdadeII(idade){
    return Number.parseInt(idade) >= 18;
    
}

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/*rl.question('Qual idade verificar?',(idade) =>{
    console.log(`\nÉ maior de idade?`,verificaIdadeII(idade));

    rl.close();
});*/

rl.question('Qual idade verificar?',(idade) =>{
    const msg = verificaIdadeII(idade)? 'Maior' :'Menor';
    figlet(msg, function(err,data){
    console.log(data)
    rl.close();
    })
    
});
