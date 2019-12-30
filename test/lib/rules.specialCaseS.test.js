const { rules, buildRegex } = require('../../src/lib/rules');
const regex = buildRegex([rules.specialCaseS]);

describe('Special Case S', () => {
  test('Match S followed by C, CH, CR, H, HR, K, L, M, N, P, Q, T, or W', () => {
    const testCases = [
      "sc",
      "sch",
      "scr",
      "sh",
      "shr",
      "sk",
      "sl",
      "sm",
      "sn",
      "sp",
      "sq",
      "st",
      "sw"
    ];
  
    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(true);
    });
  });
  test('Do not match other cases', () => {
    const testCases = [
      "s",
      "shh",
      "scz",
      "sd",
      "se",
      "ab",
      "asq"
    ];

    testCases.forEach((testCase) => {
      expect(regex.test(testCase)).toBe(false);
    });
  });
  describe('The first letter in the next combination must match the alternating vowel/consonant rule', () => {  
    test('Match vowel/consonant rule', () => {
      const testCases = [
        "sco",
        "scha"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(true);
      });
    });

    test('Does not match vowel consonant rule', () => {
      const testCases = [
        "scsn",
        "swsw",
        "shrshr",
        "shrg"
      ];

      testCases.forEach((testCase) => {
        expect(regex.test(testCase)).toBe(false);
      });
    });
  });
});