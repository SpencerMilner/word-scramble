const containsTheSameLetters = (wordOriginal, wordScrambled) => {

  if(wordOriginal.length !== wordScrambled.length){
    return false;
  }

  let original = wordOriginal.toLowerCase().split('').sort().join('');
  let scrambled = wordScrambled.toLowerCase().split('').sort().join('');
  
  return original === scrambled
}

const alphaOnly = new RegExp(/^([a-zA-Z])+$/);

module.exports = {
  containsTheSameLetters,
  alphaOnly
};