

var chocolateBars = ["snickers", "hundred gran", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array,element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray (array,element){
  array.push(element)
  return array
}

function accessElementInArray = [access, index]
console.log(accessElementInArray[index];)
