const { rules } = require('../src/rules');
const regex = buildRegex([rules.doubleConsonant]);


describe('Alternating Vowels and Consonants Rule Regex', () => {
  
  test('double consonants', () => {
    const testDoubleConsonant = "ll";
    const testConsonantVowel = "lo";
    const testVowelConsonant = "ol";
    const testDoubleVowel = "yy";

    expect(regex.test(testDoubleConsonant)).toBe(true);
    expect(regex.test(testConsonantVowel)).toBe(false);
    expect(regex.test(testVowelConsonant)).toBe(false);
    expect(regex.test(testDoubleVowel)).toBe(false);
  });

  test('First character in the next set must follow alternating vowel/consonant rule', () => {
    const testDoubleConsonantVowel = "bba";
    const testDoubleConsonantConsonant = "bbg";
    const testTripleConsonant = "ggg";

    expect(regex.test(testDoubleConsonantVowel)).toBe(true);
    expect(regex.test(testDoubleConsonantConsonant)).toBe(false);
    expect(regex.test(testTripleConsonant)).toBe(false);
  });
});
