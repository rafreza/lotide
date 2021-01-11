const { findKey } = require(".");

const findKeyByValue = function (obj, key) {
  let genres = Object.keys(obj);
  
  for (let genre of genres) {
    if (obj[genre] == key) {
      return genre;
    }
  }
}

module.exports = findKeyByValue;
/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/