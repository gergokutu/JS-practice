/*
Arrays
- collection
- consist of elements (members, items)
- every element gets an index
- 0 indexed
- ages[0] > 18
- ages[2] > 61

let ages = [18, 22, 61]
ages.length // 3
ages[ages.length - 1] // last element

- you can change the length
- putting gaps
- e.g. a for loop goes over the gaps as well

ages.length = 30
ages[100] = "hey"

Multidimensional arrays:
- arrays inside of arrays (nestes arrays)

let stuff = [12, "hey", function(){console.log("hoooo")}, ["nested", "array"]]
let grades = [
  [5, 5, 5],
  [3, 4, 5],
  [4, 4, 5]
]
grades[1] // [3, 4, 5]
grades[1][2] // 4
*/

{
  let array = [12, 43, 43, function(){console.log("Hohhohohoooo")}]
  console.log(array)
  console.log(array[0])
  console.log(array[3]())

  let grades = []
  grades[0] = 12
  grades[1] = 31
  grades[5] = 99
  console.log(grades[2]) // undefined (but the place exists)
  console.log(grades[5])
  console.log(grades[6]) // undefined but the place does not exist

  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
  }

  // you can change the length
  grades.length = 100
  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
  }

  // the array can crop the length
  grades.length = 2
  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
  }
}

{
  let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43]
  grades.length = 30
  grades[34] = 40

  // just iterate through
  // but skip the empty places
  for (let i = 0; i < grades.length; i++) {
    if (typeof(grades[i]) !== "undefined") console.log(grades[i])
  }

  // search in array
  let found = false
  let search = 43

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === search) {
      // you can use found as a flag
      found = true
      console.log("Found:", grades[i], "at index:", i)
      // stop after the first hit
      break
    }
  }

  // use the flag
  if (found) {
    // do something
  }

  // find the biggest element in the array
  // assume that the first the largest
  // compare it to the next
  // reassign the value of largest
  let largest = grades[0]

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > largest) largest = grades[i]
  }

  console.log("1 Largest is", largest)

  // or > map + ternary
  grades.map(number => number > largest ? largest = number : largest)
  console.log("2 Largest is", largest)

  // or > sort()
  // if there is empty values >
  // at the and you find in this case undefined
  // so reassign the array
  grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43]
  console.log("3 Largest is", grades.sort((a,b) => a-b)[grades.length - 1])
  // reverse()
  console.log("4 Largest is", grades.sort((a,b) => a-b).reverse()[0])

  // or > Math.max
  console.log("5 Largest is", Math.max(...grades))

  // or > Math.max.apply()
  console.log("6 Largest is", Math.max.apply(null, grades))

  // or > reduce + ternary
  largest = grades.reduce((a, b) => a > b ? a : b)
  console.log("7 Largest is", largest)

  // or > reduce + ternary
  largest = grades.reduce((a, b) => Math.max(a, b))
  console.log("8 Largest is", largest)
}

{
  let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43]
  grades.length = 30
  grades[34] = 40

  // find the average
  // be careful with the gaps
  // we have to know the lenght but cannot use the method because of gaps
  let count = 0;
  let total = 0;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== undefined) {
      count++
      total += grades[i]
    }
  }
  
  let average = total / count
  console.log("1 Average:", average)

  // or > reduce
  // cannot be a gap
  grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 40]

  const total2 = grades.reduce((a, b) => a + b, 0)
  const average2 = total2 / grades.length
  // in 1 step
  // const average2 = grades.reduce((a, b) => a + b, 0) / grades.length

  console.log("2 => Average:", average2)

  // reduce without arrow function
  const total3 = function(array) {
    return array.reduce(function(accumulator, currentValue) {
      return (accumulator + currentValue) 
    }, 0)
  }
  const average3 = total3(grades) / grades.length
  
  console.log("3 Average:", average3)

  const average4 = function(array) {
    return array.reduce(function(accumulator, currentValue) {
      return (accumulator + currentValue) 
    }, 0) / array.length
  }

  console.log("4 Average:", average4(grades))
}

// fill in an array with user input
// indefinite (infinite) loop & sentinel value
{
  let grades = []

  while (true) {
    // prompt creates a string
    let input = prompt("Add a grade")
    // how to stop > sentinel value
    // quit > q or 0 or escape
    // or parseInt(input) === 0, input == 0, Number(input) === 0
    if (input === "q" || input === null || input === "0") {
      break
    }
    
    // grades.push(input)
    // we want a number > Number() constructor or parseInt
    // grades.push(parseInt(input))
    grades.push(Number(input))

    console.log(grades)
  }
}