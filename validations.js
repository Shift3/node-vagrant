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
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (value) => {
        //a@b.c 
        //greg@gmail.com
        return /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/.test(value);
      },
      message: '{VALUE} is not a valid value for email dude.'
    }
  },
  age: {type: Number, min: 0, max: 150, required: true},
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(value);
      },
      message: '{VALUE} is not a valid phone number'
    }
  }
});

UserSchema.methods.addYears = function (years) {
  return this.age + years;
};

let User = mongoose.model('User', UserSchema);

let greg = new User({
  firstName: 'Greg',
  lastName: 'Goforth',
  age: 149,
  email: 'greg@goforth.com',
  phone: '555-555-5555'
});

greg.save()
  .then(() => {
    console.log(greg.addYears(10));
  })
  .catch(err => {
    console.log('ERROR: ', err);
  });


