// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello() {
  var name = document.getElementById("name").value;
  var msg = "<h2>Hello " + name + "!</h2>";

  // document.getElementById("content").textContent = msg; //just inputs "<h2>..." as text content
  document.getElementById("content").innerHTML = msg;

  if(name === "student"){
    var title 
      // = document.getElementById("title").value;
      = document.querySelector("#title").textContent; //more generic way of selecting an element. ~ CSS selector
    title += " & Lovin' it!";
    document.querySelector("h1").textContent = title; //will match the first h1 element. if list needed, use querySelectorAll
  }
}