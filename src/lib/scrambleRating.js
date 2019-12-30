const { scrambled, someLettersAreCorrect } = require('./letterPlacement');
const { buildRegex } = require('./rules');

/*
• Not – if the word is not scrambled at all 
• Poor – if the first letter or any two consecutive letters are in the correct place and the word doesn’t look real 
• Hard – if none of the letters are in the correct place and the word looks real 
• Fair – for all other cases 
*/
const scrambleRating = {
  NOT: 'not',
  POOR: 'poor',
  HARD: 'hard',
  FAIR: 'fair'
}

const getRating = (scrambledWord, originalWord, rules) => {
  const isScrambled = scrambled(originalWord, scrambledWord);
  
  if(isScrambled === false){
    return scrambleRating.NOT;
  }

  const testLooksReal = buildRegex(rules);
  const someLettersAreInTheRightPlace = someLettersAreCorrect(originalWord, scrambledWord);
  const looksReal = testLooksReal.test(scrambledWord);

  if(someLettersAreInTheRightPlace && !looksReal){
    return scrambleRating.POOR;
  }

  if(!someLettersAreInTheRightPlace && looksReal){
    return scrambleRating.HARD;
  }

  return scrambleRating.FAIR;
}

module.exports = {
  getRating
}