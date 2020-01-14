// inside the web browser > JS engine
// rigth click > inspect (dev tools) > console
// alert("Hello World");
// we will use VS Code

// when click on the button
// Change the "Confirm purchase?" >
// "Order placed. Check email for confirmation"
document.getElementById("button").onclick = function(){
  document.getElementById("confirm").innerHTML = "Order placed. Check email for confirmation"
}