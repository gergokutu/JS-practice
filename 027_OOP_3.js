/*
Polymorphism
- how to handle an object
- as itself or a part of the inheritance hierarchy
- e.g. user vs student
- other words >
- an object is handled as the type of itself
- or as its parent, or parent's parent...
- we can treat both student and teacher as user
*/
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
  
  // handle users and teachers as they would be the same type
  newMembers.forEach(element => console.log(element.sayHello()))
}