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
  // better to design your code with the postfix way (slicesOfPizza++)
  
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

// converting numbers
{
  var input = 11
  console.log("Decimal:", input)
  // radix > the base
  // Number.parseInt(input, radix)
  // binary 11 > is decimal 3 
  console.log("Binary:", Number.parseInt(input, 2))
  console.log("Octal:", Number.parseInt(input, 8))
  console.log("Hexadecimal:", Number.parseInt(input, 16))

  // toString(radix) > transform it
  console.log("Decimal", input + " to decimal:", input)
  console.log("Decimal", input + " to binary:", input.toString(2))
  console.log("Decimal", input + " to octal:", input.toString(8))
  console.log("Decimal", input + " to hexadecimal:", input.toString(16))
}

// Number instance methods and Math object
{
  // Number.
  // blue boxes in VS code > properties (values)
  // purple boxes > methods
  // call them directly on Number
  // Number is a contstructor > way to create new objects
  console.log(Number.parseInt("10.9")) 

  // call it on an instance
  let x = 25
  xString = x.toString()
  console.log(xString, "is a string now")

  // __proto__ > prototype/inheritance chain
  // new instances (like x) is automatically attached to prototype (like Number object)

  // convert 25 to exponential format with .00000 (five zeros)
  console.log(x.toExponential(5))  // 2.500000e+1 > 2.5 * 10^1 > 25
  console.log("$", x.toFixed(2))

  let y = 25.2501212423423
  console.log("EUR", y.toLocaleString())
  console.log(y.toPrecision(3))
  
  // valueOf > returns the primitive value of the object
  let z = new Number(25.2501212423423)
  console.log(typeof(z))
  console.log(typeof(z.valueOf()))

  // Math object
  var abs = Math.abs(-36) // 36
  console.log(abs)

  var roundUp = Math.ceil(.0001) // 1
  console.log(roundUp)

  var roundDown = Math.floor(.9999) // 0
  console.log(roundDown)

  var raiseToPower = Math.pow(3, 2) // 9
  console.log(raiseToPower)

  var squareRoot = Math.sqrt(9) // 3
  console.log(squareRoot)

  var round1 = Math.round(4.9) // 5
  var round2 = Math.round(5.1) // 5
  console.log(round1)
  console.log(round2)

  var isPositive = Math.sign(-Infinity) // -1 (false)
  console.log(isPositive)

  var getInt = Math.trunc(4.99999) // 4
  console.log(getInt)
}