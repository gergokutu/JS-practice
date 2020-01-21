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
  - passing arguments by value, passing arguments by reference...

  Passing arguments:
  - passed by value > the value of the argument is copied the parameter
  - changes to variable inside the function does not persist outside of the function
  - e.g. variable1 stays 5 (in case of primitives)
  - in case of complex types (objects)
    - assign an object to a variable > stores a reference to that object (where it is stored in the memory)
    - the passed argument and the parameter references (points) to the same object
    - changes in the function affects the object outside of the function!!!
    - passing by reference
    - exeption > new object cannot be created this way
      - it will live only inside the function scope
*/

{ 
  // let myObject // with this line the console.log > same as inside create()
  const passToObj = {name: "Kutu", age: "1"}
  function create(name) {
    // myObject = {name: "Pocok", age: 999}
    let myObject = {name: "Pocok", age: 999}
    console.log(myObject)
    
    myObject.name = name.name
    myObject.age = name.age
    console.log(myObject)
  }

  // create()
  create(passToObj)
  // myObject is not defined if it is only declared inside the function
  // console.log(myObject)
}