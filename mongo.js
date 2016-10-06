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

// let widget = new Widget({
//   prongs: 22,
//   name: "Widget E",
//   colors: ['red', 'white', 'blue']
// });
//
// widget.save()
//   .then(() => {
//     console.log(widget); 
//   })
//   .catch(err => {
//     console.log('THE ERROR: ', err); 
//   });

// Widget.findById('57f5c02d9aa3fb291c55b8be')
//   .then(widget => {
//     widget.prongs = 'a200';
//     widget.save()
//       .then(() => {
//         console.log('The updated widget', widget); 
//       })
//       .catch(err => {
//         console.log(err); 
//       });
//   });

function remove(id) {
  return Widget.findByIdAndRemove(id);
}

function findAllAndLogLength() {
  return Widget
    .find({})
    .then(widgets => console.log(widgets.length));
}

remove('57f5b699de7f07280246bbe9')
  .then(findAllAndLogLength);

// Widget.findByIdAndRemove('57f5b4458fe3d027637b2394')
//   .then(() => {
//     Widget.find({})
//       .then(widgets => {
//         console.log(widgets.length); 
//       });
//   });


