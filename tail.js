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

module.exports = tail;