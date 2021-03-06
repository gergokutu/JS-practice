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
  const charToSearch = 'c'
  for (let i = 0; i < name.length; i++) {
    name[i] === charToSearch ? 
      console.log(`Found ${charToSearch} letter on place ${i + 1} of the word "Pocok".`) :
      console.log(`Not found on place ${i + 1}.`)
  }
}

// break
// find just the first occurence
{
  const name = "Pocok rock"
  const charToSearch = 'c'

  for (let i = 0; i < name.length; i++) {
    if (name[i] === charToSearch) {
      console.log(`Found ${charToSearch} letter on place ${i + 1} of the word "Pocok".`)
      // no iteration after the first 'c' because of break
      break
    }
    console.log(`Not found on place ${i + 1}.`)
  }
  console.log("Jump here because of break")
}

// continue
// do something in every occurence
// except for some >
// print HI ecxept for 'c'
{
  const name = "Pocok"
  const charToSearch = 'c'

  for (let i = 0; i < name.length; i++) {
    if (name[i] === charToSearch) {
      // in this case nothing happens because of continue
      // you can use else instead of continue
      continue
    }
    console.log("hi")
  }
}

// nested loops
// create a downstair on the webpage
// id="destination"
{
  let destination = document.getElementById("destination")
  const space = ' '

  for (let i = 0; i < 10; i++) {
    for (let k = i; k >= 0; k--) {
      destination.append(k + space)
    }
    // create a break > new line
    const br = document.createElement("br")
    destination.appendChild(br)
  }
}

// create a pyramid
{
  let destination2 = document.getElementById("destination2")
  const level = 10
  const underscore = '_'
  const hash = '#'
  const star = '*'

  for (let i = 0; i < level; i++) {
    for (let j = level - i - 1; j > 0; j--) {
      destination2.style.color = "blue"
      destination2.append(underscore)
    }

    for (let k = i; k >= 0; k--) {
      destination2.append(hash)
    }
    
    for (let k = i - 1; k >= 0; k--) {
      destination2.append(star)
    }
    // create a break
    const br = document.createElement("br")
    destination2.appendChild(br)
  }
}