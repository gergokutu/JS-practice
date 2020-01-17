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

{
  let grades = [1, 2, 3, 4, 5, 6, 7]
  grades.push(8, 9, 0, 11, 11, 2, 345)

  // sort
  // by default > sort it alphabetically
  const simpleSort = grades.sort()
  console.log("Simple sort:", simpleSort)

  // correction ascending
  // define how to use
  // if a - b is positive > flip the order
  const correctSortAscending = grades.sort((a, b) => a - b)
  console.log("Ascending sort:", correctSortAscending)

  // with callback function
  function correctSortAscending_2(arr) {
    return arr.sort(function(a, b) {
      return a - b
    })
  }
  console.log("Ascending_2 sort:", correctSortAscending_2(grades))
  console.log(grades)

  // with callback function ver 2
  const correctSortAscending_3 = function(arr) {
    return arr.sort(function(a, b) {
      return a - b
    })
  }
  correctSortAscending_3(grades)
  console.log("Ascending_3 sort:", grades)

  // correction ascending
  const correctSortDescending = grades.sort((a, b) => b - a)
  console.log("Descending sort:", correctSortDescending)

  // reverse method
  // also alters the original array
  grades.reverse()
  console.log(grades)

  // fill a section of the array with a particular value
  // value, start index (inclusive), stop index (exclusive)
  grades.fill("ho", 3, grades.length)
  console.log(grades)

  // copyWithin > copy a portion of the array to the portion of the same array
  // no length modificaton
  // copy to, start (inclusive), stop (exclusive))
  console.log(grades.copyWithin(4, 0, 3))
}