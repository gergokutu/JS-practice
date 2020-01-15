{
  let name = "Pocok"

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