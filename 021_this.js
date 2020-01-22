/*
"THIS"
- function context is another word for 'this'
- arguments passed to the function > 
- inside the function definition we call them parameters
- explicit vs implicit arguments (e.g this)
- the value of this can change based on how we invoke it
- 'use strict' also changes the value of this
- but most of the time this refers to an object that has a method on it

dog.x()

function x(a, b) {
  console.log(this) // refers to dog...
}

let me = {
  name: "Pocok",
  test: function() {
    console.log (this.name) // refers.to me.name ("Pocok")...
  }
}
*/

{
  // other programming languages the next is the only usage of this
  let me = {
    name: "Pocok",
    outPutMe: function() {
      console.log ("Entire object:", this)
    },
    outPutName: function() {
      console.log ("Name:", this.name)
    }
  }

  // get the object itself
  // outPutMe method
  me.outPutMe()
  // get the name
  me.outPutName()

  // same result but create the function outside of the object
  // but it's still attached to the object as a method
  let otherPerson = {
    name: "Kutu",
    outPutMe: outPutMe
  }

  function outPutMe() {
    console.log (this)
  }

  otherPerson.outPutMe()

  // invoke it as a function
  // it's gonna be the window global object
  outPutMe()

  // call it as a function using strict mode
  // gonna be undefined
  function outPutMeStrict() {
    'use strict'
    console.log (this)
  }

  outPutMeStrict()

  // call a function as a contstructor
  // empty object > refers to the new object (instance)
  // created by the Person constructor
  function Person() {
    console.log("1st:", this)
    this.name = "Pocok"
    console.log("2nd:", this)
  }

  let person1 = new Person()
}

// call and apply methods
// useful with this > modifies the value of this
// modifies the value right when calling the function
{
  function doStuff(input, input2) {
    console.log(input, input2)
    console.log(this)
  }

  console.log("Simple doStuff:")
  doStuff(5)

  // change the value of this
  // (valut to change, argument(s) (input) value we want to pass)
  console.log("Call method:")
  doStuff.call("hello", 5)
  doStuff.call("hello", 5, 10)
  console.log(this)

  // apply method is similar
  // but put the passed arguments in an array
  console.log("Apply method:")
  let args = [5, 10]
  doStuff.apply("hello", args)
  // doStuff.apply("hello", [5, 10])
}

// bind
// also changes the value of this
// but works in a different way than apply/call
// bind gives you a new function where the value of this is PERMANENTLY changed
{
  function doStuff(input, input2) {
    console.log(input, input2)
    console.log(this)
  }

  // invoke like the call method
  // nothings shows up
  // because it does not calls the function
  // but creates a new function
  console.log("Bind method:")
  doStuff.bind("hello", 5, 10)
  // we have to assign it to a variable
  let me = { name: "Pocok" }
  let newFunction = doStuff.bind(me, 5, 10)
  newFunction()
}