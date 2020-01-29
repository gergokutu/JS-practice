// labels with break and continue
// labels >
// allows you to mark an outer for loop
// and then let you go there
// when using break / continue keywords
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
          // no "Do stuff" after 5
          // no 6...
          break
        }
        // 3 "Do stuff" after 9
        // becuse it's done for the undefined as well
        // not in the scope of the if statement on line 23...
        // or only 1 "Do stuff" after 9
        // if (grades[i][j] !== undefined) console.log("Do stuff")
        console.log("Do stuff")
      }
      console.log("****************************")
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
      console.log("****************************")
    }
  }

  // apply labels!
  // we can reference outerLoop
  // to jump there instead of the next inner loop
  // continue with the next outerLoop!
  outerLoop: for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== undefined) {
      console.log("----------New row-----------")

      for (let j = 0; j < grades[i].length; j++) {
        if (grades[i][j] !== undefined) {
          console.log("for:", grades[i][j])

          if (grades[i][j] === 5) {
            console.log("Value found")
            // no "Do stuff" after 5
            // no 6...
            // no **********************
            continue outerLoop
          }
          // no 3 "Do stuff" after 9
          // check the function body (scope)!!!
          console.log("Do stuff")
        }
      }
      console.log("****************************")
    }
  }

  // jump out from both loops
  // break out from the outerLoop!
  outerLoop: for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== undefined) {
      console.log("----------New row-----------")

      for (let j = 0; j < grades[i].length; j++) {
        if (grades[i][j] !== undefined) {
          console.log("for:", grades[i][j])

          if (grades[i][j] === 5) {
            console.log("Value found")
            // nothing after 5
            break outerLoop
          }
          console.log("Do stuff")
        }
      }
      console.log("****************************")
    }
  }
}