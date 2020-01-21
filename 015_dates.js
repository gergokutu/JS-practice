/*
Dates
- date objects
- constructor Date
- do not forget the new keyword
- everytime you refresh the date is going to be uodated

// Tue Jan 21 2020 09:41:54 GMT+0100 (Central European Standard Time)
var today = new Date()
console.log(today)

- to define what date you want
- bare minimum > year, month
- year, month, day...
- the month is 0 based

var date = new Date(1990, 11) // 11 > Dec

UNIX Epoch
- milliseconds from a particular date
- Jan 1, 1970
- pass a milisecond to the constructor

// Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time) {}
var unixEpoch = new Date (0)
// now in millisecs from UNIX Epoch
// 1579596483644
Date.now()
*/
{
  // if we give a non-valid value > converts it to valid
  // e.g 2020, 12, 21 > jan 21, 2021
  let myDate = new Date(2020, 0, 21)
  console.log(myDate)
}

{
  // with 1 argument passed > miliseconds > from UNIX Epoch
  let myDate = new Date(2020324535234242)
  console.log(myDate)

  let dateNow = new Date(Date.now())
  // keep track of time
  let time = Date.now()
  console.log(dateNow)

  // get the time span of executing codes
  let start = Date.now()
  let x = 0
  for (i = 0; i < 1000000; i++) {
    x += i 
  }
  let stop = Date.now()
  let totalTime = stop - start
  console.log("Time took:", totalTime)
  console.log(x)
}

{
  // add and subtract dates
  let before = new Date(2020, 0, 21)
  let after = new Date(2020, 0, 26)
  let days = after - before
  console.log(days) // milliseconds
  // convert the milliseconds to days
  // divide the miliseconds by millisecs-in-1-day
  let oneDay = 1000 * 60 * 60 * 24
  console.log("Days:", days / oneDay)
}