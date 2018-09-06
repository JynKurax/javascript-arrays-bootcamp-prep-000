var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles")

function addElementToBeginningOfArray(array, element){
 return array.unshift('element')
}

function destructivelyAddElementToBeginningOfArray(array, element){
 return ['element', ...array] 
}

function addElementToEndOfArray(array, element){
  return [...array, 'element']
}

function destructivelyAddElementToEndOfArray(array, element){
    return array.push('element')
}

function accessElementInArray(array, index){
  return array['index']
}

function destructivelyRemoveElementFromBeginningOfArray(array)

function removeElementFromBeginningOfArray(array){
  return array.slice()
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}