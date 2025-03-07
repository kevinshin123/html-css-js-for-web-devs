(function (global) { //IIFE

  // Set up a namespace for our utility
  var ajaxUtils = {};

  // not attached to ajaxUtils -> hidden function from world
  // Returns an HTTP request object
  function getRequestObject() {
    if (global.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else if (global.ActiveXObject) {
      // For very old IE browsers (optional)
      return new ActiveXObject("Microsoft.XMLHTTP");
    } else {
      global.alert("Ajax is not supported!");
      return null;
    }
  }

  // Makes an Ajax GET request to 'requestUrl'
  ajaxUtils.sendGetRequest = function (requestUrl, responseHandler) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function () {
        handleResponse(request, responseHandler);
      }; //a function value
    request.open("GET", requestUrl, true); //true: asynchronous
    request.send(null); // null: for POST only
  };

  // Only calls user provided 'responseHandler'
  // function if response is ready
  // and not an error
  function handleResponse(request, responseHandler) {
    if (request.readyState == 4 && request.status == 200) {
      responseHandler(request);
    }
  }

  // Expose utility to the global object
  global.$ajaxUtils = ajaxUtils;
})(window);
