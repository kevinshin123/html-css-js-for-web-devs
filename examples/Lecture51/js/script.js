// Closures

/*
 Functions in JavaScript form closures. 
 A closure is the combination of a function and the lexical environment within which that function was declared. 
 This environment consists of any local variables that were in-scope at the time the closure was created. 
 In this case, doubleAll is a reference to the instance of the inner function that is created when makeMultiplier is run. 
 The instance of the inner function maintains a reference to its lexical environment, within which the variable name exists. 
 For this reason, when doubleAll is invoked, the variable name remains available for use. 
*/

function makeMultiplier(multiplier) {
  // var multiplier = 2;
  function b() {
    console.log("Multiplier is: " + multiplier);
  }
  b();

  return function (x) {
    return multiplier * x;
  };
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env
