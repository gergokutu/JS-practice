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

  // converting object literals to constructors
  // constructor is a much more scalable option
  // this case > you're not gonna see anything about the user
  // because there is no prototype chain
  console.log("-----converting object literals to constructors-----")

  // create the constructors (ctor)
  function UserCtor() {
    this.active = false
  }

  UserCtor.prototype.sayHello = function() {
    return this.name + "says hi!"
  }

  function StudentCtor(name, major) {
    this.name = name
    this.major = major
  }

  function TeacherCtor(name, teaching) {
    this.name = name
    this.teaching = teaching
  }

  // instantiate an object of them
  let student2 = new StudentCtor("Pupil", "English")
  let teacher2 = new TeacherCtor("Master", ["math", "science"])

  console.log("student2 with ctor:", student2)
  console.log("teacher2 with ctor", teacher2)

  // Setting Prototypes with Constructors
  // set up an inheritance hierarchy
  console.log("-----Setting Prototypes with Constructors-----")

  StudentCtor.prototype = new UserCtor()
  TeacherCtor.prototype = new UserCtor()
  TeacherCtor.prototype.sayHello = function() {
    return "Teacher says hi!"
  }

  let student3 = new StudentCtor("Pupil", "English")
  let teacher3 = new TeacherCtor("Master", ["math", "science"])

  console.log("student3 with ctor + prototype chain:", student3)
  console.log("teacher3 with ctor + prototype chain:", teacher3)
  console.log("sayHello on prototype:", teacher3.sayHello())

  // instanceof Operator
  // see if an object has a particular type
  console.log("-----instanceof Operator-----")

  console.log(teacher3 instanceof TeacherCtor)
  console.log(teacher3 instanceof UserCtor)
  console.log(teacher3 instanceof StudentCtor)
  
  teacher3 instanceof StudentCtor ? console.log("Yep") : console.log("Nope")

  // if the type matches to UserCtor > return 5
  // if not > return -1
  function doSomething(user) {
    if (user instanceof UserCtor) {
      return 5
    } else {
      return -1
    }
  }

  console.log(doSomething(teacher3))
  console.log(doSomething(teacher))
}