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

{
  // primitives are immutable
  let myName = "Pocok"
  myName.toLocaleUpperCase()
  console.log(myName) // Pocok
  myName = myName.toLocaleUpperCase()
  console.log(myName) // POCOK
}

{
  // primitives has their object counterpart
  // object counterparts can have properties!!
  let myName = "Pocok"
  let yourName = new String("Mogyi")
  console.log(typeof(myName)) // string
  console.log(typeof(yourName)) // object
}