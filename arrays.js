function addElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = array.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.unshift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
}
