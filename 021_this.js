/*
"THIS"
- function context
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
  name: "Pocok"
  test: function() {
    console.log (this.name) // refers.to me.name ("Pocok")...
  }
}
*/