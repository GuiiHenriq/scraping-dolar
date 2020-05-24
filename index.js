const req = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://ptax.bcb.gov.br/ptax_internet/consultarUltimaCotacaoDolar.do';

async function acesso() {
  const res = await req(url);
  let $ = cheerio.load(res);
  let date = $('td[align=CENTER]').text();
  let dollarValue = $('td[align=right]').first().text();

  console.log(`📅 Data: ${date} \n💲 Valor: ${dollarValue}`);
}

acesso();
