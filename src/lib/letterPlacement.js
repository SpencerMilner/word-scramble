const scrambled = (wordOriginal, wordScrambled) => wordOriginal.toLowerCase() !== wordScrambled.toLowerCase()

const someLettersAreCorrect = (wordOriginal, wordScrambled) => {
  const original = wordOriginal.toLowerCase()
  const scrambled = wordScrambled.toLowerCase()

  let wordMatch = false

  for (let i = 0; i < original.length; i++) {
    if (i === 0 && original.charAt(i) === scrambled.charAt(i)) {
      return true
    } else if (wordMatch === true && original.charAt(i) === scrambled.charAt(i)) {
      return true
    } else if (original.charAt(i) === scrambled.charAt(i)) {
      wordMatch = true
      continue
    } else {
      wordMatch = false
    }
  }
  return false
}

module.exports = {
  scrambled,
  someLettersAreCorrect
}
