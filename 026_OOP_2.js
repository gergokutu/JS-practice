/*
Prototype inheritance
- allows an object to take parts from another one
- inherit thet parts as its own
- in JS it'S done by the prototype
- prototype is an object where the object inherits from
- saving memory > put methods on prototype's constructor
- prevents the multiplication of that method on every object
- the object always inherits the prototype (__proto__)
- prototype also might have a prototype (prototype chain)
- root prototype > null
- Object.prototype

Prototypes and Constructors
- object literal is basically the same than object constructor
- object literal:

let me = {
  name: "Pocok"
}

- object constructor:

let me = new Object()...

- Object prototype is transferred to the new object > prototype chain (prototype hierarchy)
- so Object.getPrototypeOf(me) equals to Object.prototype
- we can do this with our own constructors
*/

// setting and object prototype with setPrototypeOf
{
  let user = {
    active: true
  }

  let teacher = {
    teaching: ["math", "science"]
  }

  // console.log(teacher)

  // set proto from user to techer
  // check __proto__
  Object.setPrototypeOf(teacher, user)
  console.log(teacher)
  console.log(teacher.active)
}

// override prototypal inheritance
// how to overwrite a particular value
// in the prototype of an object
{
  let user = {
    active: true
  }

  let student = {
    major: "English"
  }

  let teacher = {
    teaching: ["math", "science"]
  }

  Object.setPrototypeOf(teacher, user)
  Object.setPrototypeOf(student, user)

  // overwrite a value (set a value)
  // JS looks for active on the student first >
  // if it does not exist > create it
  // active gonna be directly on the student
  // which overrides the prototypal active: true
  // check in the console with/without the next line
  student.active = false
  console.log("student:", student.active)
  console.log("teacher:", teacher.active)
  console.log("student:", student)
  console.log("teacher:", teacher)
  
  // when asking for a value (e.g. teacher.tacos) >
  // JS goes through the prototype chain
  // if no match > the value gonna be undefined
  console.log("teacher.tacos:", teacher.tacos)
}

// instance properties vs object properties
// when to use which
{
  // sayHello method is general > put it here
  console.log("------INSTANCE vs OBJECT PROPS------")
  let user = {
    active: true,
    sayHello: function() {
      return `${this.name} says hi!`
    }
  }

  let student = {
    // name is individual > put it here
    name: "Pupil",
    major: "English"
  }

  let teacher = {
    name: "Master",
    teaching: ["math", "science"]
  }

  Object.setPrototypeOf(teacher, user)
  Object.setPrototypeOf(student, user)

  student.active = false
  console.log("student:", student.sayHello())
  console.log("teacher:", teacher.sayHello())
}