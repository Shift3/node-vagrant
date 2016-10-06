'use strict';

let mongoose = require('mongoose');

/**
 * Database connection.
 */
mongoose.connect('mongodb://greg:1234@ds139655.mlab.com:39655/nodegeekwise');
let db = mongoose.connection;
db.on('open', () => console.log('database connected'));
mongoose.Promise = require('bluebird');

let WidgetSchema = new mongoose.Schema({
  prongs: {type: Number, required: true},
  name: String,
  created_at: {type: Date, default: Date.now},
  colors: [String]
});

let Widget = mongoose.model('Widget', WidgetSchema);

let widget = new Widget({
  prongs: '22abc',
  name: "Widget D",
  colors: ['red', 'white', 'blue']
});

widget.save()
  .then(() => {
    console.log(widget); 
  })
  .catch(err => {
    console.log('THE ERROR: ', err); 
  });

