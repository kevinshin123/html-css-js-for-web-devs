// 1
// var name = "Yaakov";
// function sayHello() {
//   console.log("Hello " + name);
// }

// 2 - fake namespace using objects. 
// var yaakovGreeter = {};
// yaakovGreeter.name = "Yaakov";
// yaakovGreeter.sayHello = function() {
//   console.log("Hello " + yaakovGreeter.name);
// }

// 3 - fake namespace using immediately invoked function expressions(IIFEs)

(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello "; //... this is not exposed(private)
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter; //expose object to window...

})(window);
