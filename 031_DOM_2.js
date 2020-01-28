let myButton = document.getElementById("clickme")
// myButton.disabled = true
myButton.style.fontSize = "2em"
myButton.style.margin = "10px"

let paragraphs = document.getElementsByTagName("p")
let span = paragraphs[0].childNodes[1]
let spanText = span.childNodes[0]
spanText.nodeValue = "CONSOLEEEE!!!"

// Practice with Event Listeners
myButton.onclick = function () {
  myButton.style.backgroundColor = "green"
  myButton.style.border = "5px yellow dotted"
  myButton.innerHTML = "CLICKED!!!"
}

let list = document.getElementsByTagName("ol")
console.log(list)

// to be able to attach an event listener
// we need an actual node instead of a HTML collection
let ourList = list[0]
console.log(ourList)

ourList.onmouseover = () => {
  console.log("mouse over")
  ourList.childNodes[1].childNodes[0].nodeValue = "Love Pasta"
  ourList.childNodes[3].childNodes[0].nodeValue = "Love Sauce"
  // ourList.childNodes[5].childNodes[0].nodeValue = "Love Cheese"
  document.getElementById("cheese").innerText = "Love Cheese"
}