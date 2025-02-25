// Event handling

//Unobstrusive event binding
//document.querySelector("button").addEventListener("click", )

/*... put it in document.addEventListner("DOMContentLoaded", function(event) {...} )
  so that the functions get invoked AFTER DOM contents are loaded
*/

document.addEventListener("DOMContentLoaded", 
  function(event) {
    function sayHello(event) {
      
      this.textContent = "Said it!";
       //convenient
      
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";
      
      document.getElementById("content").innerHTML = message;
      
      if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
      }
    }

    document.querySelector("button").addEventListener("click", sayHello);
    document.querySelector("body").addEventListener("mousemove", function (event) {
      if(event.shiftKey === true) {
        console.log("x: " + event.clientX);
        console.log("y: " + event.clientY);
      }
    });
  }
);