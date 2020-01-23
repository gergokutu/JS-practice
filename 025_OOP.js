/*
Object Oriented Javascript
- a bit different from OOP with other languages
- an object describes an entity, it can model the real world
- constructor function same as classes in JS
  but diff syntax
- this in constructor function (ctor)
- ctor does not return anything >
- use new keyword to create a new instance
  and assign it to a new variable
- classes a syntactic sugar in JS
  to help people coming from other OOP languages
  (like C++)
*/

// creating a constructor function (ctor)
// to create users
// this refers to the new object we are creating
{
  function User0() {
    console.log(this)
    this.name = "0"
  }

  let person0 = new User0()
  console.log(person0)

  function User(name, interests) {
    // properties
    this.name = name
    this.interests = interests
    // methods
    // not always recommended >
    // it copies the method to all object
    this.print = () => console.log(`Helloooo ${this.name}!`)
  }

  let me = new User("Pocok", ["cooking", "diving", "travelling", "coding", "music", "snowboarding"])
  // add new property
  me.membership = "Gold"
  console.log(me)

  let person1 = new User("Mogyi", ["diving", "travelling", "detective stories", "politics"])
  let person2 = new User("Pista", ["gardening"])
  let person3 = new User("Mariska", ["knitting"])
  console.log(person1)
  console.log(person2)
  console.log(person3)

  person3.print()
}

// creating a Factory Function
// similar to ctor
// but has return value
// do not prefix it with the new keyword
// constructor is the recommended
{
  function User(name, interests) {
    let person = {
      name: name,
      interests: interests
    }

    return person
  }

  let me = User("Pocok", ["cooking", "diving", "travelling", "coding", "music", "snowboarding"])
  // add new property
  me.membership = "Gold"
  console.log(me)

  let person1 = User("Mogyi", ["diving", "travelling", "detective stories", "politics"])
  let person2 = User("Pista", ["gardening"])
  let person3 = User("Mariska", ["knitting"])
  console.log(person1)
  console.log(person2)
  console.log(person3)
}