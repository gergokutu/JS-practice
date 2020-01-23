// Prototypes of a function
function doSomething() {
  return 1 + 1
}

console.log(doSomething.prototype)
// doSomething.prototype is an object which has a property constructor
// this constructor is the function what we are created...
// wierd loop... so
/*
- we create doSomething() function >
- this has a prototype which is what it inherits from >
- which is an object
- and this object has a constructor property > object.constructor
- which brought it into existence
- and this constructor points back to the function
- and it's a loop (infinite)
*/

// call the function as a constructor
// the prototype of the function
// is transfered to the new object as its prototype
let test = new doSomething()
// __proto__ of test is the same as doSomething.prototype
console.log("test:", test)

// check it programmatically
if (doSomething.prototype === Object.getPrototypeOf(test)) {
  console.log("Prototypes are the same.")
}

// create a Taco constructor
function Taco() {
  this.toppings = ["cheese"]
}

// set a function onto the prototype of the Taco function
Taco.prototype.makeTaco = function() {
  console.log("Making a taco")
}

let myTaco = new Taco()
console.log("Taco.prototype", Taco.prototype)
console.log("myTaco", myTaco)