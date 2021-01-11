const without = function(source, itemsToRemove) {
  let newSource = [];

  for (let i = 0; i < source.length; i++) {
    let match = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match = true;
      } 
      if (j === (itemsToRemove.length - 1) && match === false) {
        newSource.push(source[i]);
      }
    }
  }
  return newSource;
}
module.exports = without;
/*
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
*/