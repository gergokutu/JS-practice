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

  // Finding a string in another string
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

// more string methods
{
  // subtstring method > take out a part of the string
  // index to start at (inclusive), index to stop at (exclusive)
  let content = "Today we'll be talking about string methods and how fun they are"
  console.log(content.substring(6, 8)) // we

  // substr
  // index to start at (inclusive), nuber of chars we want to include
  console.log(content.substr(6, 2)) // we

  // really similar to substring
  // diff > when working with negative numbers...
  console.log(content.slice(6, 8)) // we

  // how to modify a string
  // always return a new string
  // keep it > save to a new variable
  let upper = content.toUpperCase()
  let lower = content.toLowerCase()
  console.log(upper)
  console.log(lower)
  console.log(content)

  // trim any kind of white space before and after
  // useful for form validation
  let content2 = " \tToday we'll be talking about\t string methods and how fun they are\n\t"
  console.log(content2)
  console.log(content2.trim())
  console.log(content2.trimLeft())
  console.log(content2.trimRight())
  // exactly the same
  console.log(content2.trimStart())
  console.log(content2.trimEnd())

  // repeat
  console.log("tick-tack ".repeat(3))

  // split by delimiter
  // returns an array
  console.log(content.split(" "))
}