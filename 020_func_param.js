// Default Parameters, Rest Parameters, Implicit Parameters
{
  // default y
  function pow(x, y) {
    // instead of default y
    // if (y === undefined) { y = 2 }
    // with ternary
    // y = typeof y === "undefined" ? 2 : y
    
    let total = 1

    for (let i = 0; i < y; i++) {
      total *= x
    }

    return total
  }

  console.log(pow(3))
}