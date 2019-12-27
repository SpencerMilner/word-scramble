const { alternatingConsonantsAndVowelsRegex: alternatingConsonantsAndVowelsRegex } = require('../src/rules');
const regex = alternatingConsonantsAndVowelsRegex;

describe('Alternating Vowels and Consonants Rule Regex', () => {
  
  test('Vowels and consonants alternate', () => {
    const testVowelConsonant = "ab";
    const testConsonantVowel = "gu";
    const testDoubleVowel = "yo";
    const testDoubleConsonant = "ll";

    expect(regex.test(testVowelConsonant)).toBe(true);
    expect(regex.test(testConsonantVowel)).toBe(true);
    expect(regex.test(testDoubleVowel)).toBe(false);
    expect(regex.test(testDoubleConsonant)).toBe(false);
  });

  test('First character in the next set must follow alternating vowel/consonant rule', () => {
    const testVowelConsonant = "aba";
    const testConsonantVowel = "kyg";
    const testEndWithDoubleVowel = "baa";
    const testEndWithDoubleConsonant = "app";

    expect(regex.test(testVowelConsonant)).toBe(true);
    expect(regex.test(testConsonantVowel)).toBe(true);
    expect(regex.test(testEndWithDoubleVowel)).toBe(false);
    expect(regex.test(testEndWithDoubleConsonant)).toBe(false);
  });
});
