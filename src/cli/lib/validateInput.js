const containsTheSameLetters = (wordOriginal, wordScrambled) => {
  if (wordOriginal.length !== wordScrambled.length) {
    return false
  }

  const original = wordOriginal.toLowerCase().split('').sort().join('')
  const scrambled = wordScrambled.toLowerCase().split('').sort().join('')

  return original === scrambled
}

const alphaOnly = new RegExp(/^([a-zA-Z])+$/)

module.exports = {
  containsTheSameLetters,
  alphaOnly
}
