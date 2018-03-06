const express = require('express');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const log = console.log;
const app = express(); // creates an instance of an express application

const things = [{item: 'Ladder'}, {item: 'Mirror'}, {item: 'Cat'}];


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates; not caching



app.use('/', (req, res, next) => {
  log(chalk.magenta(req.method + ' ' + req.path)); //+ chalk.cyan(`/ ${req.params.something}`));
  next();
});

app.get('/', (req, res) => {
  res.render( 'index', {title: 'Danger Zone', things: things} );
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
