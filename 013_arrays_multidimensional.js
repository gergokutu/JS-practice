// iterate through on multidimensional arrays
{
  let grades = [
    [0],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  // outer for > rows
  // inner > columns
  for (let i = 0; i < grades.length; i++) {
    // just put a separator line
    // to gain better visualization
    console.log("New row")

    for (let j = 0; j < grades[i].length; j++) {
      console.log("for:", grades[i][j])
    }
  }

  // forEach
  grades.forEach(function (row) {
    // return is not necessary to the next line
    row.forEach(function (item) {
      console.log("forEach:", item)
    })
  })

  // forEach + =>
  grades.forEach(row => row.forEach(item => console.log("forEach => :", item)))
  // map + =>
  grades.map(row => row.map(item => console.log("map => :", item)))
}