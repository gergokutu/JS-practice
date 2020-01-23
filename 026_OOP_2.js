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