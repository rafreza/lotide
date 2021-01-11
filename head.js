const head = function(arr) {
  let element = [];
  if (arr === "") {
    return element;
  } else {
    element = arr[0];
    return element; 
  }
};

module.exports = head;