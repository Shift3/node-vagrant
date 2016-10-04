var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Geekwise',
    course: 'Intro to Node.js',
    subjects: [
      'node.js',
      'express',
      'restify',
      'mongo & mongoose'
    ],
    details: {
      time: '6pm',
      length: '3hr'
    }
  });
});

module.exports = router;
