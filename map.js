const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

/*
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[(word.length - 1)]);
console.log(results1);

assertArraysEqual(results1, ["d", "l", 'o', "r", "m"]);
*/