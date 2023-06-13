const bunyan = require ('bunyan');
const logger = bunyan.createLogger ({name: "allure-single-html-file-ts", streams: [{
    path: process.cwd() + '/' + Date.now().toString() + '_app.log',
  }]});

module.exports = { logger };