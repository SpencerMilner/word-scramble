const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseK]);

describe('Special Case K', () => {
  test('Match K followed by L, R, or W', () => {
    const testCases = [
      "kl",
      "kr",
      "kw"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "k",
      "ka",
      "kz",
      "okw",
      "ab",
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "klo",
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "klp",
        "klkr"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});