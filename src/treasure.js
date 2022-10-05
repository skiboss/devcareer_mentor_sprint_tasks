// function stringLength(userInput) {
//   return userInput.length
// }
// console.log(stringLength('randomstring'))

function swapElements(array, firstItem, secondItem) {
  var arrayTray = array[firstItem];
  array[secondItem] = array[firstItem];
  array[secondItem] = arrayTray;
}
var array = ["a", "b"];
swapElements(array, 0, 1);
console.log(array);
