// window object > global scope
// can be accessed from everywhere in our code
// naming conflicts
// function body > local scope (a new scope)

// IIFE - immediately invoked function expression
(function(){
  // age just accessible inside the function
  // not for window object
  var age = 5
  console.log(age)
})()

// the engine takes our code and executes it
// ECMAScript (ES) is a standard
// Javascript is a implementation of the standard (ES)
// browser is the runtime environment
// JS engine is part of the browser
// node.js > environment for back-end JS codes
// JS > JIT compilation (JS engine compiles executable...)
// truth > up to the engine if JS is compiled or interpreted
// it's an implementation detail..

// var, let, const - global vs local
// var > function scope (goes up if does not find)
// let > block scope
// const > block, values cannot be reassignable
