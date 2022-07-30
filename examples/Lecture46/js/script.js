// Functions are First-Class Data Types
// Functions ARE objects
//  - pass, assign to variable, return as a result, pass as arguments, set properties ... all available
function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 3));
multiply.version = "v.1.0.0";
console.log(multiply); //the function code itself (has inherent method toString)
 // <=> console.log(multiply.toString()); 
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };

  return myFunc;
} // A function that returns a function

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(9));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


// Passing functions as arguments
function doOperationOn(x, operation){
  // x : value, operation: any function
  // return: operation(x);

  return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);









