const letterPositions = function (sentence) {
  const results = {};
  let counter = 0;
  for (let letter of sentence) {
    let index = [];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(counter);
      } else {
          results[letter] = [counter];
      }
    }
    counter ++;
  }
  console.log(results);
  return results;
}

module.exports = letterPositions;

//assertArraysEqual(letterPositions("hello").e, [1]);
