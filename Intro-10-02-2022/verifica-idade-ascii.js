function verificaIdadeII(idade){
    let msg;

    if(!isNaN(idade) && idade >= 18){
        msg = 'Maior de Idade';
    }
    else if(!isNaN(idade) && idade < 18){
        msg = 'Menor de Idade';
    }
    else{
        msg = 'Erro';
    }
    return msg;
}

module.exports = verificaIdadeII;