const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseG]);

describe('Special Case G', () => {
  test('Match G followed by H, L or R', () => {
    const testCases = [
      "gh",
      "gl",
      "gr"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "g",
      "go",
      "gz",
      "agl",
      "ab",
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "glo",
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "ghp",
        "glgr"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});