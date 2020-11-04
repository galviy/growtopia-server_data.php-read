let request = require('request');
const log4js = require('log4js')
const data = log4js.getLogger('data');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

log4js.configure({
  appenders: {
    multi: { type: 'multiFile', base: 'logs/', property: 'categoryName', extension: '.html' }
  },
  categories: {
    default: { appenders: [ 'multi' ], level: 'debug' }
  }
});

console.log('Growtopia/serve_data.php reader coded by GalvinID credit to Clayne (C)')
readline.question('Target IP : ', ip => {
    request.post(`http://${ip}/growtopia/server_data.php`, function(err, response, body) {
    data.info(`${response && response.statusCode}\n${body}`)//saved in /logs (auto save)
	console.log(`${response && response.statusCode}\n${body}`)//will shown in terminal
	console.log('html/css copied successfully')
    readline.close();
  });
})
