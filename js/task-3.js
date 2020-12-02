const findLongestWord = function (string) {
  const wordsFromString = string.split(' ');
  let longestWord = '';

  for (let i = 0; i < wordsFromString.length; i += 1) {
    if (wordsFromString[i].split('').length > longestWord.split('').length) {
      longestWord = wordsFromString[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
