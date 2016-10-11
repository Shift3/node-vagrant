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
  name: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  colors: [String],
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
});
let Widget = mongoose.model('Widget', WidgetSchema);

let UserSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true}
});
let User = mongoose.model('User', UserSchema);

Widget.find({name: '12 Pronged Widget'})
  .sort('name asc')
  .populate('user')
  .exec()
  .then(widgets => {
    console.log(`Hi, my name is ${widgets[0].user.firstName} ${widgets[0].user.lastName}`);
  });

// let jules = new User({
//   firstName: 'Jules',
//   lastName: 'Goforth',
//   email: 'jules.goforth',
//   phone: '555-555-5555' 
// });
//
// jules.save()
//   .then(() => {
//     console.log(jules);
//    
//     let widget1 = new Widget({
//       prongs: 12,
//       name: '12 Pronged Widget',
//       colors: ['Red', 'Green', 'Blue'],
//       user: jules._id
//     });
//    
//     widget1.save()
//       .then(() => {
//         console.log(widget1); 
//       });
//   });















