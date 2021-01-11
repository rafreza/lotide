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

module.exports = middle;