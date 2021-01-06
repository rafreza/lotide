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

const letterPositions = function (sentence) {
  const results = {};
  let counter = 0;
  for (let letter of sentence) {
    let index = [];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(counter);
      } else {
          results[letter] = [counter];
      }
    }
    counter ++;
  }
  console.log(results);
  return results;
}

assertArraysEqual(letterPositions("hello").e, [1]);
