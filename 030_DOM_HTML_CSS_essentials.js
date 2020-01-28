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

  // getElementsByTagName and getElelementsByClassName
  console.log("-----NEXT SESSION-----")

  // by tag name
  const list2 = document.getElementsByTagName("li")
  console.log(list2)

  // by class name
  const shortList = document.getElementsByClassName("list-member")
  console.log(shortList)

  // Node names and types
  // check MDN
  // Element nodes (value: 1), text nodes (value: 3)
  console.log("-----NODE NAMES/TYPES-----")
  // element node has a nodeType
  console.log("nodeType:", sauce.nodeType)
  // element node has a nodeType
  // sauce is a element node
  // and has a text node child
  // which has the value > "Sauce"
  console.log("nodeValue:", sauce.childNodes[0].nodeValue)

  if (sauce.nodeType === 1) console.log("element")
  if (sauce.childNodes[0].nodeType === 3) console.log("text")

  console.log("nodeName:", sauce.childNodes[0].nodeName)
}

