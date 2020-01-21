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