const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      
      if (Array.isArray(object1[key]) === Array.isArray(object2[key])) {
        eqArrays(object1[key], object2[key]);
      }
      else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  } else {
  return false;
  }
  return true;
}
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);