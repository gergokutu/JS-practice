/*
Exception handling
- check MDN
- exceptions should be used only for exceptional things...
- try, catch, throw, finally
- Control flow (e.g if, switch) and error handling
- do not use error handling as control flow!!
*/
{
  // execute a statement that does not exists
  // Uncaught ReferenceError: doesNotExist is not defined
  // runtime error > happens when running the program

  //  doesNotExist

  /*
  - solve it with try - catch - finally
  - catch > catch the exception if something goes wrong
  - finally is execute a code >
  - no matter if there is or ther is not an error
  - try to comment out "doesNotExist"
  - we can rid of the catch section 
  - as long as we have a finally section > try!
  - catch can have an argument >
  - gives information about the error
  */
  try {
    console.log("Try")
    doesNotExist
  } catch (e) {
    console.log("Catch")
    console.log(e)
  } finally {
    console.log("Finally")
  }
  console.log("AFTER")

  // you can throw your own exception on various types
  function doSomething() {
    console.log("-------THROW OWN TYPE-------")
    throw { error: "This broke", code: -1 }
  }

  // doSomething()

  try {
    console.log("Try")
    doSomething()
  } catch(e) {
    console.log("Catch")
    console.log(e)
    console.log("Error caught")
  } finally {
    console.log("Finally")
  }

  // special constructor > Error
  // throws a simple "Uncaught Error"
  console.log("use Error constructor")
  throw new Error()

  // there are several Error types > check MDN
}