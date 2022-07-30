// Object literals and "this"

var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this; //(S) a workaround

    // console.log(this); // this: literalCircle object 
                          // - since creating a object literal is the same as saying new Object() then set property...
    var increaseRadius = function () {
      // this.radius = 20; // this: window object
        // when func is defined within a func this points (again, back to) Window object
        // not usually our intention

      self.this = 20; //(S) a workaround
    };
    increaseRadius();
    return Math.PI * Math.pow(this.radius, 2);
  },
};

console.log(literalCircle.getArea());