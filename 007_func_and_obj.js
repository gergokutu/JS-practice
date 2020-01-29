// functions are objects as well in JS
{
  let position = {
    // properties
    x: 10,
    y: 20,
    // methods
    // this > in case of method
    // refers to this instance of the object
    // the function context defines what this represents
    print: function() {
      console.log(`X: ${this.x} and Y: ${this.y}`)
    },

    // nested object
    nestedObject: {
      name: "triangle",
      family: "rectangles"
    }
  }

  let myPosition = position
  console.log("position", position)
  console.log("myPosition", myPosition)

  // myPosition is the same like position
  // they referencing the same object
  // not a copy like with primitives
  myPosition.x = 15
  console.log("position", position)
  console.log("myPosition", myPosition)

  // !!!next line needs ;
  // to the end because the IIFE starts with (...)
  // the JS engine thinks that the line is continued...
  position.print();

  // this in another context
  // this > refers to the window object (global variable)
  (function() {
    console.log(this)
  })();

  // this in another context with 'use strict'
  // this > undefined
  (function() {
    'use strict'
    console.log(this)
  })()

  console.log(myPosition.nestedObject.name)

  // JSON > javascript object notation
  let myJSON = 
  {
    "name" : "Pocok",
    "age" : 999
  }
  console.log(myJSON)
}