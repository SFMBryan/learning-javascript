function sayHi() {
  console.log('Hi');
};

console.log(sayHi.toString())

// this does an implicit return. it returns the value without using return
const addOneToOne = () => 1 + 1;

// Log to the console
console.log(addOneToOne())
