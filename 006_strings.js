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

// string methods
{
  // String.
  // myName.
  let favFood = "spagetti"
  console.log(favFood.charAt(0))
  // favFood is not gonna be modified
  // if you want to store it
  // do it in a new variable
  console.log(favFood.concat(" is supercool", "! ", "But", " ", "pizza as well!"))

  // Finding a string in anouther string
  let search1 = "age"
  let search2 = "word"
  console.log(favFood.includes(search1)) // true
  console.log(favFood.includes(search2)) // false
  // 2nd argument > serachIn.includes(search_what, index_to_start_at)
  console.log(favFood.includes(search1, 3)) // false

  // where things are
  console.log(favFood.indexOf(search1)) // 2
  console.log(favFood.indexOf(search1, 2)) // 2
  // find the second "t"
  console.log(favFood.indexOf("t", favFood.indexOf("t") + 1)) // 6
  console.log(favFood.includes(search2)) // -1 (false)

  // last index
  // works like the prev
  console.log(favFood.lastIndexOf("t")) // 6

}