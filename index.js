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