const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, key) {
  let genres = Object.keys(obj);
  let result = "";
  
  for (let genre of genres) {
    if (obj[genre] == key) {
      return genre;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
