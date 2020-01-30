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
- value is being copied...
- name() > undefined
- name(5, 6, 7, "hello") > 7, "hello" gonna be ignored

!!!function overloading is not possible in JS!!!

- functions are objects (functions are first class citizens)
  - functions can be assigned to variables
  - functions can be stored in arrays
  - functions can be assigned to object properties (methodes)
  - functions can be assigned to the properties of functions
  - we can pass functions to other functions (callback)
  - objects can be returned from functions > so functions can be returned from functions
  - so functions can be input and output
  - bind, this...
  - passing arguments by value, passing arguments by reference...

  Passing arguments:
  - passed by value > the value of the argument is copied into the parameter
  - changes made to variable inside the function does not persist outside of the function
  - e.g. variable1 stays 5 (in case of primitives)
  - in case of complex types (objects) > passed by reference
    - assign an object to a variable > stores a reference to that object (where it is stored in the memory)
    - the passed argument and the parameter references (points) to the same object
    - changes in the function affects the object outside of the function!!!
    - exception > new object cannot be created this way
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

/*
Callbacks
- pass a function as an argument to another function
- and that function invokes the passed function
- higher order functions > the function that accepts another function
*/

{
  function add(a, b) {
  return a + b
  }

  let subtract = (boci, pipi) => boci - pipi

  function addOrSubtract (num1, num2, callback) {
    return callback(num1, num2)
  }

  // function expression
  // let addOrSubtract = function(num1, num2, callback) {
  //   return callback(num1, num2)
  // }

  // same with arrow function
  // let addOrSubtract = (num1, num2, callback) => callback(num1, num2)

  const number1 = 10
  const number2 = 20

  // when passing the function > do not use the ()!!!
  // because that would invoke the function
  console.log(addOrSubtract(number1, number2, add))
  console.log(addOrSubtract(number1, number2, subtract))

// Async callbacks
// use a function expression
// setTimeout is a higher order function
// AJAX > Async Javascript and XML > load data to page async without page reload...
  let print = function(){
    console.log("Async => Delayed")
  }

  setTimeout(print, 1000)
  setTimeout(print, 0)
  console.log("Not Async")
}

// function declarations and expressions
// func declaration
{
  function pow(base, pow) {
    let total = 1;
    for (let i = 0; i < pow; i++) {
      total *= base
    }
    return total
  }
  
  // invoking the func inside console.log
  console.log("Pow func:", pow(2, 3))

  // assign it to a variable
  let pow2 = function(base, pow) {
    let total = 1;
    for (let i = 0; i < pow; i++) {
      total *= base
    }
    return total
  }
  
  console.log("Pow func assigned to a variable:", pow2(2, 3))

  // with arrow function
  let pow3 = (base, pow) => {
    let total = 1;
    for (let i = 0; i < pow; i++) {
      total *= base
    }
    return total
  }
  
  // ; > because of the next IIFE
  console.log("Pow func => :", pow3(2, 3));

  // IIFE
  // because of IIFE default value needed
   (function(base = 2, pow = 3) {
    let total = 1;
    for (let i = 0; i < pow; i++) {
      total *= base
    }
    console.log("IIFE:", total)
  })();

  // IIFE with arrow function
  ((base = 2, pow = 3) => {
    let total = 1;
    for (let i = 0; i < pow; i++) {
      total *= base
    }
    console.log("IIFE => :", total)
  })();
}
