/*
Arrow functions
- new way to create the function
- (a, b) => expression
- () => {
  return...
}
- let d = x => x + x
- etc.
- there are couple of variotons for the synthax (one line, with args...)
- the value of "this" always gonna be the same
  - value determined by => where the function is created
  - and not how it's called...
*/
{
  function cube(x) {
    return x * x * x
  }
  console.log("Regular func:", cube(5))

  // arrow version
  // 1 param > () not required
  let cubeArrow = x => x * x * x
  console.log("=> func:", cubeArrow(5))

  let cubeArrow2 = x => {
    return x * x * x
  }
  console.log("2nd ver => func:", cubeArrow2(5))
}

// this inside arrow function
// does not matter how you call the arrow func > value of this is the same
// value of this is only determined by the creation of the arrow func
{
  let arrow = () => this

  function normal() {
    return this
  }

  console.log("Arrow this:", arrow()) // window
  console.log("Normal this:", normal()) // window

  // check them inside an object
  // and invoke them as a method
  let functions = {
    arrow: arrow,
    normal: normal
  }

  console.log(functions)
  console.log("arrow:", functions.arrow()) // window
  console.log("normal:", functions.normal()) // refers to the functions object itself
}