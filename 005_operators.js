// arithmetic operators
{
  var slicesOfPizza = 10;
  console.log(slicesOfPizza + 5)
  console.log(slicesOfPizza - 5)
  console.log(slicesOfPizza * 5)
  console.log(slicesOfPizza / 5)
  console.log(slicesOfPizza % 5)

  var presedence1 = 5 + 3 * 12 - 20 / 10
  var presedence2 = 5 + (3 * 12) - (20 / 10)
  var presedence3 = (5 + 3) * 12 - (20 / 10)
  console.log(presedence1, presedence2, presedence3)

  // MDN > operaton presedence chart
  // modulo (%) same level as * or /
  // association > left-to-right (default), right-to-left

  console.log(slicesOfPizza**3) // 10^3 > 1000
}

// other operators
{
  let slicesOfPizza = 10

  // postfix increment
  // slicesOfPizza = slicesOfPizza + 1
  // slicesOfPizza += 1
  slicesOfPizza++
  console.log(slicesOfPizza)

  // postfix decrement
  slicesOfPizza--
  console.log(slicesOfPizza)

  slicesOfPizza *= 2
  console.log(slicesOfPizza)

  slicesOfPizza /= 2
  console.log(slicesOfPizza)

  slicesOfPizza %= 2
  console.log(slicesOfPizza)

  // prefix increment/decrement
  slicesOfPizza = 10
  // increment happening after the assignment
  let newPizza1 = slicesOfPizza++
  console.log("slicesOfPizza:", slicesOfPizza)
  console.log("newPizza1:", newPizza1)

  // increment happening before the assignment
  let newPizza2 = ++slicesOfPizza
  console.log("slicesOfPizza:", slicesOfPizza)
  console.log("newPizza1:", newPizza2)

  // same with slicesOfPizza-- vs --slicesOfPizza
  // better to design your code with the prefix way (slicesOfPizza++)
  
}

// there are a lot of number methods like parseInt and parseFloat
{
  // Number.
  // x.
  // similar to static methods > an instance is not compulsory..
  let x = 5
  let y = "10"
  let yInt = Number.parseInt(y)
  console.log(x + y)
  console.log(x + yInt)

  // parseInt does not round but truncates
  let zInt = Number.parseInt("10.9") // 10
  console.log(zInt)

  // parseFloat
  let zInt2 = Number.parseFloat("10.9") // 10.9
  console.log(zInt2)

  let zInt3 = Number.parseInt("10.9 should be a number") // 10
  console.log(zInt3)
}