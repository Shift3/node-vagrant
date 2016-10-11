var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var GithubStrategy = require('passport-github2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(passport.initialize());
passport.use(new GithubStrategy({
  clientID: 'c65098f236dcea5f027a',
  clientSecret: 'c24c05e2bf9f8c442b4dffa28610f0904083e324',
  callbackURL: 'http://localhost:5000/auth/github/callback'
}, function (token, refresh, profile, done) {
  done(null, profile);
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/auth/github', passport.authenticate('github', {scope: ['user:email']}));
app.get('/auth/github/callback', passport.authenticate('github', {
  failureRedirect: '/auth/github',
  session: false
}), function (req, res, next) {
  console.log(req.user);
  res.json(req.user);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
