// Arrays

/*
  A single JS array can contain many different objects and primitives
*/

var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
var names = ["Yaakov", "John", "Joe"];
names[3] = "Kevin";
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim"; //sparse array ok
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
} // Hello undefined for 96 lines

var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};

// traverse properties in an object using for ... in
for (var prop in myObj) { //prop: [name, course, platform]
  console.log(prop + ": " + myObj[prop]);
}

for (var singleName in names2) {
  console.log("Hello " + names2[singleName]);
} 

names2.greeting = "Hi!"; 
/*
  names2
   0 : "Yaakov"
   1 : "John"
   2 : "Joe"
   greeting : "Hi!:

  caution
   names.length == 3
*/

console.log(names2);

for (var singleName in names2) {
  console.log("Hello " + names2[singleName]);
}





































