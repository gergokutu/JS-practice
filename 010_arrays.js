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