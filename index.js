// Import stylesheets
import './style.css';

// Review of Function Currying in JavaScript
// *****************************************

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 3, 5)); //10

//sum(2,3,5) => sum(2)(3)(5)
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5)); //10

//breakdown of curriedSum
const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);

console.log(add5); //10

// Review of 'this' keyword
// *********************************

function sayMyName(name) {
  console.log(`My name is ${name}`);
}

sayMyName('Walter White');
sayMyName('Heisenburg');

//determing 'this'
// ----------------

//a. Implicit binding
const person = {
  name: 'Mary',
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName();

//b. Explicit binding

function saySomething() {
  console.log(`My name is ${this.name}`);
}

saySomething.call(person);

//c. New binding

function Person(name) {
  //this = {}
  this.name = name;
}

const p1 = new Person('Viswas');
const p2 = new Person('Batman');
console.log(p1.name);
console.log(p2.name);

//d. Default binding

//test this section in Vistual Studio Code editor.
// const name = 'Superman';
// globalThis.name = 'Superman';

// saySomething();

// Prototype
// *******************

function People(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const people1 = new People('Bruce', 'Wayne');
const people2 = new People('Kent', 'Clark');

//Adding a method specific to people1
people1.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

console.log(people1.getFullName()); //Bruce Wayne
//console.log(people2.getFullName()); //Error: people2.getFullName is not a function

//Adding a method for all instances
People.prototype.getCompleteName = function () {
  return 'My name is ' + this.firstName + ' ' + this.lastName;
};

console.log(people1.getCompleteName());
//My name is Bruce Wayne
console.log(people2.getCompleteName());
// My name is Kent Clark
