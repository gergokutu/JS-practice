/*
Hoisting
- function declarations and expressions are hoisted differently
- hoisting
  - JS codes scanned first
    - variable declarations
  - then executed
- all function declarations are hoisted
  - included the functions inside the body
- func expression > only the variable hoisted

- let and const gives you error when var gives you undefined
*/

{
  console.log(x)
  var x = 10 // undefined

  doStuff() // Done
  function doStuff() {
    console.log("Done")
  }

  // y() // error: y is not a function
  var y = function() {
    console.log("Hoisted")
  }
}

{
  
}