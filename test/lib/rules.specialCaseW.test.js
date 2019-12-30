const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseW]);

describe('Special Case W', () => {
  test('Match W followed by H or R', () => {
    const testCases = [
      "wh",
      "wr"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "w",
      "wo",
      "wg",
      "ab",
      "awh"
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "wha",
        "wro"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "wrwh",
        "whg",
        "whw",
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});