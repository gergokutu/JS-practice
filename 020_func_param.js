// Default Parameters, Rest Parameters, Implicit Parameters
{
  // dealing with less params > default params
  // default y
  // more params > ...extra (spread synthax) > rest params
  function pow(x, y = 2, ...extra) {
    console.log('Extra:', extra)
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
  // passing more params
  // after defined ones > arguments ignored by the function
  console.log(pow(3, 3, 3, 3))

  // when unlimited arguments are useful
  // rest params
  function largest(x, ...extra) {
    let largest = x

    for (let i = 0; i < extra.length; i++) {
      largest < extra[i] ? largest = extra[i] : largest
    }

    return largest
  }

  console.log(largest(1, 4, 55, 6, 7, 89, 3))

  // use implicit params
  // e.g "this", arguments...
  function add(x, y) {
    console.log(this) // window object
    // arguments > look like an array
    // but does not have all the capabilities of an array
    // arguments can be used instead of rest params
    // if working on legacy code and
    // cannot use the spread synthax
    console.log(arguments)
    return x + y
  }
  console.log(add(2, 3))
  console.log(add(6, 4))
}