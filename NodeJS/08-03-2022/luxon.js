const { DateTime } = require('luxon');
const dt = DateTime.now(-1);
const natalNoBrasil = (
  DateTime
    .fromObject(
      { day: 07, month: 03,year:2022 },
      { zone: 'America/Sao_Paulo' },
    )
);

const reveillon = (
  natalNoBrasil
    .plus({
      days: 7,
      hours: 23,
      minutes: 59,
    })
)

console.log(natalNoBrasil.toString());
// 2022-12-31T23:59:00.000-03:00

/*
const { DateTime } = require('luxon');
const { DateTime } = require('luxon');
const dt = DateTime.now();
const { DateTime } = require('luxon');
const dt = DateTime.local();
const { DateTime } = require('luxon');
const dt = DateTime.local(2017, 5, 15, 8, 30);
// May 15, 2017 at 8:30
const { DateTime } = require('luxon');
const dt = DateTime.fromISO('2017-05-15');
// May 15, 2017 à meia noite
const dt = DateTime.now();
const dt = DateTime.now();
dt.toLocaleString(
  DateTime.DATETIME_MED_WITH_WEEKDAY
)
DATETIME_FULL
DATETIME_FULL_WITH_SECONDS
DATE_HUGE
...
const dt = DateTime.now();
dt.toLocaleString();
const dt = DateTime.now();
dt
  .toLocaleString({
    weekday: 'long',
    era: 'long',
    day: '2-digit',
  });

// 08 Tuesday Anno Domini
const dt = DateTime.now();
dt
  .setLocale('pt-BR')
  .toLocaleString({
    weekday: 'long',
    era: 'long',
    day: '2-digit',
  });

// depois de Cristo terça-feira, 08
const dt = DateTime.now();
const natalNoBrasil = DateTime.fromObject();
const dt = DateTime.now();
const natalNoBrasil = (
  DateTime
    .fromObject(

    )
);
const dt = DateTime.now();
const natalNoBrasil = (
  DateTime
    .fromObject(
      config,
      timezone,
    )
);
const dt = DateTime.now();
const natalNoBrasil = (
  DateTime
    .fromObject(
      { day: 24, month: 12 },
      { zone: 'America/Sao_Paulo' },
    )
);
const dt = DateTime.now();
const natalNoBrasil = (
  DateTime
    .fromObject(
      { day: 24, month: 12 },
      { zone: 'America/Sao_Paulo' },
    )
);

const reveillon = natalNoBrasil.plus();
const dt = DateTime.now();
const natalNoBrasil = (
  DateTime
    .fromObject(
      { day: 24, month: 12 },
      { zone: 'America/Sao_Paulo' },
    )
);

const reveillon = (
  natalNoBrasil
    .plus({
      days: 7,
      hours: 23,
      minutes: 59,
    })
);
const dt = DateTime.now();
const natalNoBrasil = (
  DateTime
    .fromObject(
      { day: 24, month: 12 },
      { zone: 'America/Sao_Paulo' },
    )
);

const reveillon = (
  natalNoBrasil
    .plus({
      days: 7,
      hours: 23,
      minutes: 59,
    })
)

reveillon.toString();
// 2022-12-31T23:59:00.000-03:00
*/