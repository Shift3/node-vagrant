'use strict';

module.exports = (environment) => {
  return function (req, res, next) {
    console.log(environment === 'dev' ? 'This is from the dev environment' : 'this is from the prod environment');
    next();
  };
};
