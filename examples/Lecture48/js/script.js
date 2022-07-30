/*
  Another way to create objects: Function constructors

*/

// Compare normal function vs. function constructor
function anyFunc() {
  console.log(this); //this: Window object
}
anyFunc();

function ConstrFunc(foo) {
  console.log(this); //this: ConsrFunc object
  this.x = foo;
}
var bar = new ConstrFunc(5);


function Circle(radius) {
  // it is a convention to name a function starting with a capital letter 
  // to let ppl know it's a FUNCTION CONSTRUCTOR (not a regular function)

  this.radius = radius;
  
  // this.getArea = function() {
  //   return Math.PI * Math.pow(this.radius, 2);
  // }; //(P) this is a waste of memory since it gets created everytime we say new Circle(sth);
}
//(S) use prototype -> now it's in one place and is not created over and over
// Caution1. Do not put this inside a function constructor since it would be a waste of process (not memory, but time)
Circle.prototype.getArea = function() {
  return Math.PI * Math.pow(this.radius, 2);
};

// Caution2. Use new
var myCircle = new Circle(10); // ~ new Object()
console.log(myCircle);
var myOtherCircle = new Circle(10); // ~ new Object()
console.log(myOtherCircle);
