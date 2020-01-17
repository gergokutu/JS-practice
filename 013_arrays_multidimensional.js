// iterate through on multidimensional arrays
{
  // start with a square array
  let grades = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  // outer for > rows
  // inner > columns
  for (let i = 0; i < grades.length; i++) {
    for (let j = 0; j < grades[i].length; j++) {
      console.log(grades[i][j])
    }
  }
}