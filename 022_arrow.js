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

  // create an object literal
  // and invoke them as a method
  let functions = {
    // to check the this in the time of object literal creation
    this: this,
    arrow: arrow,
    normal: normal,
    // "this" with Arrow Methods and Object Literals
    // create an arrow function inside of an object
    arrowTest: () => this
  }

  console.log(functions)
  // window again
  console.log("arrow:", functions.arrow())
  // refers to the functions object itself 
  console.log("normal:", functions.normal())
  // window again > when the object literal is created >
  // this still refers to the window object
  console.log("arrow method:", functions.arrowTest()) 
}