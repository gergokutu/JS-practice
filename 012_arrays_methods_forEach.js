{
  // iterating through an array with forEach method
  let grades = [12, 22, 33, 44, 55]
  grades.length = 7

  // standard way to itarate through the array
  // but it takes the undefined(s)
  for (let i = 0; i < grades.length; i++) {
    // correct undefined
    if (grades[i] !== undefined) console.log("for:", grades[i])
  }

  // forEach ignores the undefined
  // pass a callback to forEach
  // does not return anything
  grades.forEach(function(item, index, array){
    console.log("forEach:", item + 1000, "index:", index, "array:", array)
  })
  console.log("grades:", grades)

  // with arrow functon
  grades.forEach(item => console.log("forEach => :", item))

  // with map
  // ignores the undefined as well
  // returns a new array
  // faster than forEach
  grades.map(item => console.log("map => :", item))

  // how to handle the index
  // pass it as the 2nd argument
  // check map > MDN
  grades.map((item, index, array) => console.log("map2 => :", item, "index:", index, "array:", array))

  // also has a 4th argument > thisArg
  // item, index, array, thisArg...
  const thisArg = 1000

  grades.map((item, index, array) => console.log("map3 => :", item, "index:", index, "array:", array, "Use 4th arg:", (thisArg + item)), thisArg)

  let newArray = grades.map(function (item, index, array) {
    console.log("map4:", item, "index:", index, "array:", array, "thisArg", thisArg)
    return thisArg + item
  }, thisArg)

  console.log("New array:", newArray)
  console.log("grades:", grades)
}