// Memoization and Algorithm Optimization
// Memoization >
// attach a property to a function
// to keep a memory of all the computed values
// if you have a computationally expensive algorithm >
// and do not want to recalculate the same values
// e.g calculate the factorial/pow for large numbers
{
  // pow.calculated = []
  // look up if the value is already calculated
  // we need a key value pair system
  // we have to track the input besides the output value
  // use objet instead of array
  pow.calculated = {}

  function pow(base, toPow) {
    // next string gonna be the key
    let stringVersion = base + "^" + toPow
    console.log("String:", stringVersion)

    // check the value
    // The in operator returns true
    // if the specified property is in the specified object
    // or its prototype chain.
    // check MDN!!!
    if (stringVersion in pow.calculated) {
      console.log("Found")
      return pow.calculated[stringVersion]
    }

    console.log("Calculated!")
    let total = 1
    for (let i = 0; i < toPow; i++) {
      total *= base
    }

    // pow.calculated.push(total)
    // now it's a object
    // key > stringVersion, value > total
    pow.calculated[stringVersion] = total
    console.log(pow.calculated)
    return total
  }

  pow(3, 3)
  pow(3, 3)
  pow(3, 4)
  pow(5, 3)

  // function factorial(num) {
  //   let result = 1

  //   for (let i = 1; i <= num; i++) {
  //     result *= i
  //   }

  //   return result
  // }
  // console.log(factorial(5))
}