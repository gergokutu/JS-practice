// window object > global scope
// can be accessed from everywhere in our code
// naming conflicts
// function body > local scope (a new scope)

// IIFE - immediately invoked function expression
(function(){
  // age just accessible inside the function
  // not for window object
  var age = 5
  console.log("IIFE - age:", age)
})()

// the engine takes our code and executes it
// ECMAScript (ES) is a standard
// Javascript is a implementation of the standard (ES)
// browser is the runtime environment
// JS engine is part of the browser
// node.js > environment for back-end JS codes
// JS > JIT compilation (JS engine compiles executables...)
// truth > up to the engine if JS is compiled or interpreted
// it's an implementation detail..

// var, let, const - global vs local
// var > function scope (goes up if does not find)
// let > block scope
// const > block, values cannot be reassignable

// attached to the window object
// check in the console > window.y > 10
// this is polluting the global variable...
// it can be overwritten accidentally...
var y = 10

// let is similar to var
// not stored on window object
// but in a declarative environment
// check in the console > window.z > undefined
// accessible globally
// block scope {}
let z = 20
{
  let y = 1000
  let z2 = 25
  console.log(y) // 1000
  console.log(z) // 20
  console.log(z2) // 25
}
console.log(y) // 10
console.log(z) // 20
// console.log(z2) // error > is not defined

console.log(y, z) // 10 20

// cannot change the value
const x = 30

// how to replace IIFE > e.g. block scope (let)
