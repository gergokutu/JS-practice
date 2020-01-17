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

  // forEach ignores them
  // pass a callback to forEach
  // does not return anything
  // modify the original array
  grades.forEach(function(item){
    console.log("forEach:", item)
  })

  // with arrow functon
  grades.forEach(item => console.log("forEach => :", item))

  // with map
  // ignores the undefined as well
  // returns a new array
  grades.map(item => console.log("map:", item))
}