const countLetters = function (sentence) {
  let counts = {};
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

module.exports = countLetters;

