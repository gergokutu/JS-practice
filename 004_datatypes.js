// object
// property: Value (key - value pairs)
let person = {
  name: "Pocok",
  age: 999,
  favFood: "Everything except sweet tomato soup",
  fun: function(){
    console.log("Juhuuuu :)")
  }
}

person.fun()
console.log(person.age)
console.log(person["favFood"])

// pre-defined, built-in
let now = new Date()
console.log(now)

// arrays
// arrays are also object
// index: value (key - value pairs)
// 0 indexed
let grades = [30, 40, 20, 12, 25]
console.log(grades[0])

let index = 3
console.log(grades[index])