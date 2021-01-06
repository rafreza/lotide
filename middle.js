
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
   console.log(`😁😁😁Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😩😩😩Assertion failed: ${arr1} !== ${arr2}`);
  }
 };

const middle = function(array) {
  let mid = [];
  if (array.length <= 2) {
    return mid;
  } else if ((array.length % 2) === 1) {
    mid.push(array[(Math.round((array.length / 2) - 1))]);
    return mid;
  } else if ((array.length % 2) === 0) {
    mid.push(array[((array.length / 2) - 1)]);
    mid.push(array[((array.length / 2))]);
    return mid;
  }
 };

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));