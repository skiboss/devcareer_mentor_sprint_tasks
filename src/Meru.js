function length(str) {
  return str.length;
}

function arrSwap(arr) {
  if (!Array.isArray(arr)) {
    console.log("Not an array");
    return;
  }
  if (arr.length < 2 || arr.length > 2) {
    console.log("Please use an array with two elements");
    return;
  }
  let tempArr = arr[0];

  arr[0] = arr[1];
  arr[1] = tempArr;

  // return [arr[1], arr[0]]

  return arr;
}
