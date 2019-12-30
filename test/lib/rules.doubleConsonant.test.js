const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.doubleConsonant]);

describe('Double Consonants', () => {
  test('Match two consonants in a row', () => {
    const testCases = [
      "ll",
      "gg",

    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "yy",
      "ga",
      "ol"
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "lla"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "zzz",
        "ppg",
        "ppgg"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});
