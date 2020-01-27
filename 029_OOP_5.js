// Check an Object for a Property Using "in"
{
  let user = {
    active: true,
    sayHello: function() {
      return `${this.name} says hi!`
    }
  }

  let student = {
    name: "Pupil",
    major: "English"
  }

  let teacher = {
    name: "Master",
    teaching: ["math", "science"],
    sayHello: function() {
      let message = this.name + " teaches "
      this.teaching.forEach(e => message += e + " ")
      return message
    }
  }

  Object.setPrototypeOf(teacher, user)
  Object.setPrototypeOf(student, user)

  let newMembers = [teacher, student]
  
  newMembers.forEach(element => console.log(element.sayHello()))

  // check programatically if the object has a name property
  // also checks the prototype > active
  console.log("Name in teacher:", "name" in teacher) // true

  // similar way with doing a test
  // also checks the prototype > active
  console.log("Name in teacher 2:", teacher.name !== undefined)

  console.log(teacher)

  // hasOwnProperty() method
  // checks directly the object and not the proptotype
  // "active" property on user > false
  // "name" property on teacher > true
  console.log("hasOwnProperty:", teacher.hasOwnProperty("name"))

  // list the properties of an object
  // with prototypes too
  let properties = [];

  for (let prop in teacher) {
    properties.push(prop)
  }

  console.log("props of teacher:", properties)

  // list only the own properties
  let properties2 = []

  for (let prop in teacher) {
    if (teacher.hasOwnProperty(prop)) {
      properties2.push(prop)
    }
  }

  console.log('own props of teacher:', properties2)
}