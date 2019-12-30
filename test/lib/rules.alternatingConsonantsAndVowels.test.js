const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.alternatingConsonantsAndVowels]);

describe('Alternating Vowels and Consonants', () => {
  test('Match when vowels and consanants alternate', () => {
    const testCases = [
      "ab",
      "gu",
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "yo",
      "ll"
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "aba",
        "kyg",
        "abyg"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "baa",
        "app",
        "agga"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});

