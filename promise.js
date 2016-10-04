'use strict';

let capitalizeOpts = {
  uri: 'http://geekwise-node.shift3sandbox.com:3000/capitalize',
  method: 'POST',
  json: {word: 'geekwise'} 
};

let exclaimOpts = {
  uri: 'http://geekwise-node.shift3sandbox.com:3000/exclaim',
  method: 'POST'
};

let request = require('request');

request(capitalizeOpts, (err, httpResp, body) => {
  exclaimOpts.json = {word: body};
  request(exclaimOpts, (err, httpResp, body) => {
    console.log(body); 
  });
});
