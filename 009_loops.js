/*
Loops
- ICU: Initialization, Condition, Update
- while

let i = 0
while (i < 10) {
  console.log(i)
  i++
}

- for (usually with certain number of loops)

for (let i = 0; i < 10; i++) {
  console.log(i)
}
*/

{
  // while
  // try with i = 10
  // condition first
  let i = 0

  while (i < 10) {
    console.log("while loop:", i)
    i++
  }
  // do while > if you want the loop running at least 1 time
  // do comes first
  // and check the condition after that
  let j = 10

  do {
    console.log("do-while loop:", j)
    j++
  }
  while (j < 10)

  // for
  // condition first
  for (let i = 0; i < 10; i++) {
    console.log("for loop:", i)
  }
}

{
  // let password

  // do {
  //   password = prompt("What's the password")
  // }
  // while (password.toLowerCase() !== "secret")
}

{
  // count even numbers
  for (let i = 1; i < 10; i = i + 2) {
    console.log("even:", i)
  }

  // count down with odd numbers
  // 0 included
  for (let i = 10; i >= 0; i -= 2) {
    i != 0 ? console.log(i) : console.log("BAAAMMMM")
  }

  let list = ["Yippie", "Yuppieeee", 5, 6, { name: "Pocok", title: "code"}]
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
  }

  // search for a particular char in a string
  const name = "Pocok"
  const searchChar = 'c'
  for (let i = 0; i < name.length; i++) {
    name[i] === searchChar ? 
      console.log(`Found 'c' letter on place ${i + 1} of the word "Pocok".`) :
      console.log(name[i])
  }
}