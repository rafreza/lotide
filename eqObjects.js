const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        
        if (!eqArrays(object1[key], object2[key])){
          return false;
        } 
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

module.exports = eqObjects;
/*
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

const hola = { a: [1, 2, 3], b: [3, 3, 4]};
const hello = { a: [1, 2, 3], b:[3, 2, 4]}
assertEqual(eqObjects(hola, hello), false);
*/