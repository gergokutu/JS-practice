// Memoization and Algorithm Optimization
// Memoization >
// attach a property to a function
// to keep a memory of all the computed values
// if you have a computationally expensive algorithm >
// and do not want to recalculate the same values
// e.g calculate the factorial/pow for large numbers
{
  pow.calculated = []
  console.log(pow.calculated)

  function pow(base, toPow) {
    let total = 1

    for (let i = 0; i < toPow; i++) {
      total *= base
    }

    pow.calculated.push(total)
    console.log(pow.calculated)
    return total
  }

  pow(3, 3)
  pow(3, 3)



  // function factorial(num) {
  //   let result = 1

  //   for (let i = 1; i <= num; i++) {
  //     result *= i
  //   }

  //   return result
  // }
  // console.log(factorial(5))
}