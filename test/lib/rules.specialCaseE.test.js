const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseE]);

describe('Special Case E', () => {
  test('Match E followed by A, E, or O', () => {
    const testCases = [
      "ea",
      "ee",
      "eo"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "eg",
      "ei",
      "e",
      "g",
      "ge"
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "eag"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "eao",
        "eeee"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});
