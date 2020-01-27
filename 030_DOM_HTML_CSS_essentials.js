{
  let myButton = document.getElementById("clickme")
  // myButton.disabled = true
  myButton.style.fontSize = "2em"
  myButton.style.margin = "10px"

  myButton.onclick = function () {
    myButton.style.backgroundColor = "green"
    myButton.style.border = "5px yellow dotted"
    myButton.innerHTML = "CLICKED!!!"
  }
}

/*
DOM - Document Object Model
- this is a structure representation of your page
- document.getElementById > only one way to interact with the DOM...
- there are many...
- nodes, child nodes, parent nodes, siblings
*/
{ 
  // 1: html > childNodes... (head, text, body)
  // expand body > childNodes
  let childs = document.childNodes
  console.log(childs)

  let sauce = document.childNodes[1].childNodes[2].childNodes[3].childNodes[3]
  console.log("childNode:", sauce)
  // retrieve the text of the node in HTML format
  console.log("innerHTML:", sauce.innerHTML)
  // retrieve the text of the node as plain text
  console.log("innerText:", sauce.innerText)
  // similar to innerText but faster
  console.log("textContent:", sauce.textContent)

  // grab a node's parent node
  console.log("parent of sauce:", sauce.parentElement)

  // with the curly braces sauce just lives inside this scope
  // you cannot type it the browser's console directly >
  // do not lives on the global scope >
  // Uncaught ReferenceError: sauce is not defined
  // try it without the enclosing curly braces as well!!! >
  // it will work

  // siblings
  // to skip the text node > double .nextSibling
  console.log("next sibling:", sauce.nextSibling.nextSibling)
  // to skip the text node > double .previousSibling
  console.log("prev sibling:", sauce.previousSibling.previousSibling)
}

