'use strict';

// function foo(a, b, c) {
//   console.log(arguments); 
// }
//
// foo(1, 2, 'a', 'b', 3, 4);

//Rest Paramaters
// const adder = (...numbers) => numbers.reduce((acc, val) => acc += val, 0);
// console.log(adder(1, 2, 3, 4, 5, 6));

//Spread Operator
// const subtract = (a, b) => a - b;
// numbers = [10, 7];
// console.log(subtract(...numbers));

////template strings
// const template = `6 - 2 = ${subtract(6, 2)}`;
// console.log(template);

////Destructuring
// let [a, b, c] = [1, 2, 3];
// console.log('a = 1', a === 1);
// console.log('b = 2', b === 2);
// console.log('c = 3', c === 3);
// console.log('c = 4', c === 4);

////alternative object syntax
// const foo = 'bar',
//  baz = 'bleep';
//
// const obj = {
//  foo,
//  baz,
//  sayFoo() {
//    console.log(this.foo);
//  }
// };
//
// obj.sayFoo();
//
////classes
class Person {
  constructor(fname, mname, lname, ...data) {
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.data = data;
  }

  greet() {
    console.log(`Hello there, ${this.fname} ${this.mname} ${this.lname}`);
  }
  
  logData() {
    this.data.forEach(item => console.log(item));
  } 
}

const details = ['Greg', 'David', 'Goforth', 36, 2, 'Tahoe'];

const greg = new Person(...details);
greg.greet();
greg.logData();
