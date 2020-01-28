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

ourList.onmouseenter = () => {
  console.log("mouse enter")
  ourList.childNodes[1].childNodes[0].nodeValue = "Love Pasta"
  ourList.childNodes[3].childNodes[0].nodeValue = "Love Sauce"
  // ourList.childNodes[5].childNodes[0].nodeValue = "Love Cheese"
  document.getElementById("cheese").innerText = "Love Cheese"
}

ourList.onmouseleave = () => {
  console.log("mouse leave")
  ourList.childNodes[1].childNodes[0].nodeValue = "Pasta"
  ourList.childNodes[3].childNodes[0].nodeValue = "Sauce"
  // ourList.childNodes[5].childNodes[0].nodeValue = "Love Cheese"
  document.getElementById("cheese").innerText = "Cheese"

  // or erase the list
  // ourList.remove()
}

// working with attributes in the DOM
// check the input node attributes in DOM structure
console.log(document.childNodes)
document.getElementById("input").value = "!!! instead of stuff"

console.log(document.getElementById("input").hasAttribute("tacos"))
console.log(document.getElementById("input").getAttribute("tacos"))
console.log("attributes of input:", document.getElementById("input").attributes)

// Dynamically adding nodes
console.log("-----Adding Nodes-----")

// add something to the list by clicking the button
const addButton = document.getElementById("add-button")
addButton.onclick = function () {
  // create the element
  const node = document.createElement("li")

  // needs a text node
  node.appendChild(document.createTextNode(
    // take the input box value as text
    document.getElementById("input").value
  ))

  // make it show up on the page
  ourList.appendChild(node)
}

// remove the last list item
console.log(ourList.children)
const removeButton = document.getElementById("remove-button")
removeButton.onclick = () => {
  // ourList.removeChild(ourList.children[ourList.children.length - 1])
  // more simple with lastChild
  ourList.removeChild(ourList.lastChild)
}