'use strict';

let Promise = require('bluebird');

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('I am done'); 
    }, 3000);
  });
}

myPromise()
  .then(data => {
    console.log(data); 
  })
  .catch(err => {
    console.log('ERR: ', err); 
  });


// let request = require('request-promise');
// let word = 'geekwise';
//
// let capOpts = {
//   uri: 'http://geekwise-node.shift3sandbox.com:3000/capitalize',
//   method: 'POST',
//   json: true,
//   body: {word: word} 
// };
//
// let exclaimOpts = {
//   uri: 'http://geekwise-node.shift3sandbox.com:3000/exclaim',
//   method: 'POST',
//   json: true
// };
//
// function exclaim(data) {
//   exclaimOpts.body = {word: data};
//   return request(exclaimOpts)  
// }
//
// function bigExclaim() {
//   return request(capOpts)
//     .then(exclaim);
// }
//
// bigExclaim()
//   .then(final => {
//     console.log(final); 
//   })
//   .catch(err => {
//     
//   });


// let exclaimOpts = {
//   uri: 'http://geekwise-node.shift3sandbox.com:3000/exclaim',
//   method: 'POST'
// };
//
// request(capOpts, (err, httpRes, body) => {
//   exclaimOpts.json = {word: body};
//   request(exclaimOpts, (err, httpRes, body) => {
//     console.log(body);
//   });
// });


