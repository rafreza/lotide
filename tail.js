const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let elements = [];
  if (arr.length <= 1) {
    return elements;
  } else {
    for (let i = 1; i < arr.length; i++) {
      elements.push(arr[1]);
    }
    return elements;
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);