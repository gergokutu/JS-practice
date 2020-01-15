{
  const name = "Pocok"

  // strict equality vs loose equality
  // strict > compares both value and type
  if (name === "Pocok") {
    console.log("Welcome!")
  } else if (name === "pocok") {
    console.log("Write pocok with capitol P!")
  } else {
    console.log("Wrong name!")
  }
  // or works with no else part too
  // console.log("Wrong name!")
  // or without anything... > bot no wrong name to console

  switch(name) {
    // if you want to happen something in multiple cases
    // delete everything between the cases
    case "Pocok":
      console.log("Welcome!")
      // try without break
      // break prevents fall-through
      break
    case "pocok":
      console.log("Write pocok with capitol P!")
      break
    default:
      console.log("Wrong name!")
      // break is not necedsary here but good convention
      // other languages can require it
      // easier when we reorder the switch
      break
  }
}

// benefit of control flows
// do something on a condition
// branching
// generalization > program works in different situations

// comparison operators > MDN
{
  const number = 10;

  if (number === 0) {
    console.log("Zero")
  } else if ( number < 0) {
    console.log("Negative")
  } else if (number > 0) {
    console.log("Positive")
  }

  if (number !== 0) {
    console.log("It's not zero")
  }

  // there is also >=, <=, ==...
}

// logical operators
// !, &&, ||
// logical not, and, or
{
  const age = 20
  const isHungry = true
  const isMember = "no"
  const firstTime = false

  if (age >= 20 && isHungry) {
    console.log("Let's eat!")
  }

  if (age >= 20 || isMember === "yes") {
    console.log("Enter the kitchen!")
  }

  if (!firstTime) {
    console.log("Show me your member card, please!")
  }

  // they are the same
  // if (age >= 20 || !(isMember === "yes"))
  // if (age >= 20 || isMember !== "yes"
  // you can check boolean algebra...
}

//single line if statement
{
  const name = "Pocok"
  if (name === "Pocok") console.log(`Welcome ${name}!`)
}

// Ternary operators
{
  const isMemeber = true
  isMemeber ? console.log("Welcome!") : console.log("Good-bye!")

  const pointsA = 10
  const pointsB = 20
  pointsA + pointsB >= 30 ? console.log("Well done") : console.log("Sorry, you failed")
}