/*
Functions intro
- I/O, transformation
- arguments passed to functions

Example:

function name(variable1, variable2) {
  // function body with codes
  // variable1 is parameter here
  return variable1 * variable2
}

let variable1 = 5
let variable2 = 6
// variable1 is argument when passing to the function
name(variable1, variable2) // 30

- variable1 in function call is differ from variable1 in function declaration
- name() > undefined
- name(5, 6, 7, "hello") > 7, "hello" gonna be ignored

!!!function overloading is not possible in JS!!!

- functions are objects (functions are first class citizens)
  - functions can be assigned to variables
  - functions can be stored in arrays
  - functions can be assigned to object properties (methodes)
  - functions can be assigned to the properties of functions
  - we can pass functions to other other functions (callback)
  - objects can be returned from functions > so functions can be returned from functions
  - so functions can be inout and output
  - bind, this...
  - passing by value, passing by reference...
*/