const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseP]);

describe('Special Case P', () => {
  test('Match P followed by F, L, or R', () => {
    const testCases = [
      "pf",
      "pl",
      "pr"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "p",
      "pa",
      "pz",
      "opr",
      "ab",
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "pro",
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "plz",
        "pfpl"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});