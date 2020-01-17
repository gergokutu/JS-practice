// labels with break ans continue
// labels >
// allows you to mark an outer for loop
// and the let you go there
// when breaks out / continue from an inner loop
{
  let grades = [
    [0],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  grades.length = 5
  grades[3].length = 5
  console.log(grades)

  // lets look for a particular value > 5
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== undefined) {
      console.log("----------New row-----------")
      for (let j = 0; j < grades[i].length; j++) {
        if (grades[i][j] !== undefined) console.log("for:", grades[i][j])
        if (grades[i][j] === 5) {
          console.log("Value found")
          // skip the rest of the inner for loop
          // no 6...
          break
        }
        // 3 "Do stuff" after 9
        // becuse it's done for the undefined as well
        console.log("Do stuff")
        // // only 1 "Do stuff" after 9
        // if (grades[i][j] !== undefined) console.log("Do stuff")
      }
    }
  }

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== undefined) {
      console.log("----------New row-----------")
      for (let j = 0; j < grades[i].length; j++) {
        if (grades[i][j] !== undefined) console.log("for:", grades[i][j])
        if (grades[i][j] === 5) {
          console.log("Value found")
          // let's go to the next iteration of the inner for loop
          // no "Do stuff" after 5
          continue
        }
        if (grades[i][j] !== undefined) console.log("Do stuff")
      }
    }
  }

  // apply labels
  // we can reference outerLoop
  // to jump there instead of the next inner loop
  outerLoop: for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== undefined) {
      console.log("----------New row-----------")
      for (let j = 0; j < grades[i].length; j++) {
        if (grades[i][j] !== undefined) console.log("for:", grades[i][j])
        if (grades[i][j] === 5) {
          console.log("Value found")
          // no "Do stuff" after 5
          // no 6...
          continue outerLoop
        }
        if (grades[i][j] !== undefined) console.log("Do stuff")
      }
    }
  }
}