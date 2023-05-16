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

// Given [2,2,3,4,4,6,7,8]
// create a function getArrSquared()
//  such that getArrSquared([2,2,3,4,4,6,7,8])
//   returns [4,4,3,16,16,36,49,64]

//Solution 1
function getArraySquared(array1) {
  if (Array.isArray(array1)) {
    return array1.map((x) => x * x);
  } else {
    console.log("Not an array");
  }
}

console.log(getArraySquared(array1));

// Given [2,2,3,4,4,6,7,8]
// create a function getArrOddElements()
//  in a way that getArrOddElements([2,2,3,4,4,6,7,8])
//   returns [3,7] because 3,7 are the only odd elements.

//Solution 2
function getArrOddElements(array) {
  if (Array.isArray(array)) {
    return array.filter((x) => x % 2 !== 0);
  } else {
    console.log("Not an array");
  }
}

console.log(getArrOddElements(array));

function sumAllElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function sumAllElements(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

function sumAllElements(arr) {
  let sum = arr.reduce((accm, curr) => {
    return accm + curr;
  });

  return sum;
}

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, 2, 4, 5, 8, 9];

// create the function for taking 2 arrays as parameters
function unique(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    // indexOf array function returns -1 if a value isn't found, so we'll loop through both arrays to return values not found
    if (arr2.indexOf(arr1[i]) === -1) {
      // and then push the results into a new array
      result.push(arr1[i]);
    }
  }
  // and we did the same for the second array
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      result.push(arr2[j]);
    }
  }
  return result;
}
console.log(unique(array1, array2));
