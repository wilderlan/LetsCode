require('dotenv')
  .config({ override: true });


console.log(
    process.env.Nome,
    process.env.SOBRENOME
);
/*

require('dotenv').config();

require('dotenv')
  .config({ override: true });

  process.env = {
    API_KEY: '12345',
    CLIENT_ID: 'lets-code-id',
  }

require('dotenv').config();

  function vazarSegredos() {
    console.log();
  }

  require('dotenv').config();

  function vazarSegredos() {
    console.log(
      'Minha API_KEY é',
      process.env.API_KEY,
    );
  }

require('dotenv').config();
  const axios = require('axios').default;

require('dotenv').config();
  const axios = require('axios').default;
  
axios
    .get();

require('dotenv').config();
const axios = require('axios').default;
    
axios
    .get(
        URL,
        {
          'Authorization': process.env.API_KEY
        }
      );
*/