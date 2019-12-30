const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseC]);

describe('Special Case C', () => {
  test('Match C followed by H, K, L, or R', () => {
    const testCases = [
      "ch",
      "ck",
      "cl",
      "cr"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "c",
      "co",
      "ab",
      "cg",
      "acr"
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "cha",
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "crz",
        "chcl"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});