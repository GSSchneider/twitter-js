const express = require('express');
const chalk = require('chalk');
const log = console.log;
const app = express(); // creates an instance of an express application

app.use('/', (req, res, next) => {
  log(chalk.magenta(req.method + ' ' + req.path)); //+ chalk.cyan(`/ ${req.params.something}`));
  next();
});

app.get('/', (req, res) => {
  res.send('Sup.');
});

app.get('/news', (req, res) => {
  res.send('No news to be found here.');
});

app.post('/post', function (req, res) {
  res.send('POST request to homepage');
});

app.listen(3000, () => {
  console.log('server listening');
});
