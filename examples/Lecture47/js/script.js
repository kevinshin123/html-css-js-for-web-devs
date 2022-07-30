/*
  Primitives are passed(copied) by value, 
  Objects are passed(copied) by reference. 
   - Under the hood, everything is actually passed by value 
*/

// // Copy by Reference vs by Value
// var a = 7; // a -> 0x001[7]
// var b = a; // b -> 0x002[7]
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5; // b -> 0x002[5]
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);



// var a = { x: 7 }; //a -> 0x001[0x003] -> 0x003[x: 7] 
//                   // - actually, 0x003 has list of memory locations 
//                   // in which one element points to a location containing 7
// var b = a; //b -> 0x002[0x003] -> 0x003[x: 7]
// console.log(a);
// console.log(b);

// b.x = 5; // b -> 0x002[0x003] -> 0x003[x: 5]
// console.log("after b.x update:");
// console.log(a);
// console.log(b);






// // Pass by reference vs by value
// function changePrimitive(primValue) {
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);
  
//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);



function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);





