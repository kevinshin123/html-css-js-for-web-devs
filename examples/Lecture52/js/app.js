// 1
// sayHello(); //Hello John
// sayHi(); //Hi John

// 2
yaakovGreeter.sayHello(); //Hello John
johnGreeter.sayHi(); //Hi John

// 3 - Immediately Invoked Function Expression (IIFE)
(function (name) {
    console.log("Hello " + name);
  })("Coursera!");
  
// a function object: (function() {console.log...})
// call it :          (function() {console.log...})();
  
  
  
