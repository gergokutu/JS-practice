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
  console.log(yourName) // String {"Mogyi"} > 0: "M", 1: "o", ... length: 5
  
  // convert back to primitive
  yourName = yourName.valueOf();
  console.log(typeof(yourName)) // string

  // 99% of time you can use the primitive types
}

{
// numbers
// by default 64bit floating point numbers > double precision floating point numbers
// limits of storing integers safely
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

let x = 5
console.log(Number.isSafeInteger(x)) // true
x = 9007199254740992
console.log(Number.isSafeInteger(x)) // false

// special values
// Nan > not a number
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)

let babies = 9007199254740991
console.log(Math.pow(babies, 200)) // Infinity
console.log(Math.pow(babies, 200) * -2) // -Infinity

let name = "Bori"
console.log(Math.pow(name, 200)) // Nan
}