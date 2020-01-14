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