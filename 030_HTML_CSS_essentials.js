let myButton = document.getElementById("clickme")
// myButton.disabled = true
myButton.style.fontSize = "2em"
myButton.style.margin = "10px"

myButton.onclick = function () {
  myButton.style.backgroundColor = "green"
  myButton.style.border = "5px yellow dotted"
  myButton.innerHTML = "CLICKED!!!"
}
