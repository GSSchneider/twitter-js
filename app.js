const express = require('express');
const app = express(); // creates an instance of an express application

app.listen(3000, () => {
  console.log('server listening');
});

app.get('/', (req, res) => {
  res.send('Sup.');
});

