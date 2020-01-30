/*
Hoisting
- function declarations and expressions are hoisted differently
- hoisting
  - when codes scanned first
    - variable declarations happens
  - then codes are executed line by line
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
  y() // works here
}

{
  var x
  console.log(x)
  x = 10 // 10

  // let and const are different from var
  // never can be able to use the variable before it'S assigned!!!
  // 3 step process
  // declaration (let does not get a memory place with undefined), initialization, assignement...
  console.log(z)
  let z = 10 // error: cannot access z before initialization
}