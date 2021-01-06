const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let counts = {}; //declare resulting object
  for (let letter of sentence) {
    if (letter !== ' '){
      if(counts[letter]) {
        counts[letter] += 1;
      } else {
        
          counts[letter] = 1;
      }
    }
  }
  console.log(counts);
  return counts; 
}



assertEqual(countLetters('My name is Rafin and I like computers').a, 3);