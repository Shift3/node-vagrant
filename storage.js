'use strict';

let data = {};

setInterval(() => {
  console.log(data); 
}, 1000);

function set(key, value) {
  data[key] = value; 
  return data[key];
}

function get(key) {
  return data[key];
}

module.exports = {
  set,
  get
};


