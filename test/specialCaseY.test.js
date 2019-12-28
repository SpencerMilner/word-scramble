const { rules, buildRegex } = require('../src/rules');
const regex = buildRegex([rules.specialCaseY]);

describe('Special Case Y', () => {
  test('Match Y followed by A, O, or U', () => {
    const testCases = [
      "ya",
      "yo",
      "yu"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "yn",
      "ye",
      "y",
      "ab",
      "byub"
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "yuj"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "yuya",
        "yoo"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});