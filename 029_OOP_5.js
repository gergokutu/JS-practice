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
  console.log("Name in teacher:", "name" in teacher) // true

  // similar way with doing a test
  console.log("Name in teacher:", teacher.name !== undefined)

  console.log(teacher)
}