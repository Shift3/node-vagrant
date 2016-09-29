'use strict';

var express = require('express'),
  router = express.Router();

router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  var users = require('../users.json');

  for (var i = 0; i < users.users.length; i++) {
    let user = users.users[i];
    
    if (user.email === req.body.email && user.password === req.body.password) {
      //we found the user!
      return res.redirect('/');
    }
  }
});

module.exports = router;