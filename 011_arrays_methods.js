{
  let grades = [1, 2, 3, 4, 5, 6, 7]

  // original array changed
  // push to the end
  grades.push(4)
  console.log(grades)

  // pop of the last element
  const poppedOf = grades.pop()
  console.log(poppedOf)
  console.log(grades)

  // shift (remove) & unshift (add)
  // affects the beginning
  grades.unshift(0, 0)
  console.log(grades)
  grades.shift()
  console.log(grades)

  // change a section > splice
  // delet with splice
  // start index, number of items to be deleted
  const spliced = grades.splice(2, 3)
  console.log("Deleted with splice", spliced)
  console.log(grades)

  // add with splice
  // start at, 0 > because we do not want to delete anything, items to add...
  grades.splice(2, 0, 2, 3, 4)
  console.log(grades)

  // replacing with splice
  // start at, number of items to be deleted, items to add...
  grades.splice(2, 3, 99, 99, 99)
  console.log(grades)
}