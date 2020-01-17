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

}