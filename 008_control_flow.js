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
    case "Pocok":
      console.log("Welcome!")
      // try without break
      break
    case "pocok":
      console.log("Write pocok with capitol P!")
      break
    default:
      console.log("Wrong name!")
      // break is not necedsary here but good convention
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
}