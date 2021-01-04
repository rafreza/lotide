const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  let element = '';
  if (arr === "") {
    element = undefined;
    return element;
  } else {
    element = arr[0];
    return element; 
  }
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");