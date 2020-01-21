// functions as first class citizen objects
// just means that functions handled as other objects
{
  function pow(base, pow) {
    let total = 1

    for (let i = 0; i < pow; i++) {
      total *= base
    }

    return total
  }

  console.log(pow(2, 3))

  // add to an array
  let coolFunctions = [pow]
  console.log(coolFunctions)
  console.log(coolFunctions[0](2, 3))

  // add to an object
  let coolMethods = {first: pow}
  console.log(coolMethods)
  console.log(coolMethods.first(2, 3))

  // add properties to a function
  // describe the function in a property
  pow.description = "Raise the passed base to the passed power. Returns a number."
  console.log(pow.description)
}