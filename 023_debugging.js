// debugging with google chrome devtools
// (you can do the same with VS Code debugger)
// inspect > source
// choose the proper JS file 
// and put a breakpoint where total would be calculated >
// just click on the number of the proper code-line...
// breakpoint > execution will pause at this point
// then refresh the page > execuiton pauses at the breakpoint
// you can see a lot of useful info (e.g passed values..., info about the breakpoint...)
// like in this case > breakpoint > i: 4
// ooops > this is a problem because it should be 5 in the first iteration
// check why?? > number - 1 > not ok, so correct it > number
// super, it works well now :)
// you have navigation buttons to continue with the iteration, etc...
// how to make conditional breakpoint >
// right click on breakpoint > edit breakpoint >
// you can give the condition (e.g stop when total is greater than 5)...
{
  function factorial(number) {
    let total = 1

    for (let i = number; i > 1; i--) {
      total *= i
    }

    return total
  }

  console.log(factorial(5))

  // Event Listener Breakpoints > google chrome devtools
// events > drag, clicks, etc...
// 

  document.getElementById("only").onclick = () => console.log("Clicked")
}

