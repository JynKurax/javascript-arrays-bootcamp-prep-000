var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles")

function addElementToBeginningOfArray(array, element){
  array = [element, ...array] 
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array = array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array = array.pop(0, array.length-1)
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array
}