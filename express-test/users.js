'use strict';

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
  });

  app.get('/users', (req, res) => {
    res.send('<h1>You got users!</h1>');
  });
};