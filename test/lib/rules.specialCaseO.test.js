const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseO]);

describe('Special Case O', () => {
  test('Match O followed by A, O, or Y', () => {
    const testCases = [
      "oa",
      "oo",
      "oy"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "ol",
      "oi",
      "ab",
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "oag"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "oaa",
        "oioi"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});