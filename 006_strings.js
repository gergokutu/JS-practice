{
  let myName = "Pocok"
  let otherName = new String("Kutu")
  console.log(myName, otherName)
  console.log("Pocok lenght:", myName.length)
  console.log("Pocok lenght:", myName[0])
  console.log("Pocok lenght:", myName[100])

  // escaping characters, special chars
  // MDN escape notation
  let escaping = "Po\tc\nok\n#@*|*@#"
  console.log(escaping)

  // concatenate strings
  console.log("My name is " + myName + "!")

  // templetized string
  console.log(`My name is ${myName}!
  hmmmm.....
And the new line is totally ok!!! ;)`)
}