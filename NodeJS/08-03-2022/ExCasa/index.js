
const { DateTime } = require('luxon');

// Criar e imprimir o dia de ontem.
const ontem = (DateTime.now().plus({day:-1}));
console.log (`Ontém foi : ${ontem.toLocaleString(DateTime.DATE_SHORT)}`);


// Criar o dia 5 do mês de Julho deste ano às 15h usando o método fromObject.
const dataExpecifica = (DateTime.fromObject({day:5, month:7, year:2022, hour:15}));
console.log(`${dataExpecifica.toLocaleString(DateTime.DATETIME_HUGE)}`);

// Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera de natal de 1980
const natal = (DateTime.fromObject({day:24, month:12, year:1980},{zone:'Europe/Berlin'}));
const diasAntes = (natal.plus({day:-15}));
console.log (`${diasAntes.setLocale ('de-de').toLocaleString(DateTime.DATETIME_HUGE)}`);