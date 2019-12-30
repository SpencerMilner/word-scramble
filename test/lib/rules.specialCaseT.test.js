const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseT]);

describe('Special Case T', () => {
  test('Match T followed by H, HR, R, or W', () => {
    const testCases = [
      "th",
      "thr",
      "tr",
      "tw"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "t",
      "to",
      "td",
      "thp",
      "ab",
      "atw"
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "two",
        "thra"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "trp",
        "thrz",
        "thg",
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});