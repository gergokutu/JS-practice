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
  let i = 0
  while (i < 10) {
    console.log("while loop:", i)
    i++
  }
  // do while > if you want the loop running at least 1 time
  // and check the condition after that
  let j = 10
  do {
    console.log("do-while loop:", j)
    j++
  } while (j < 10)

  // for
  for (let i = 0; i < 10; i++) {
    console.log("for loop:", i)
  }
}