const { buildRegex, rules } = require('../../src/lib/rules');

describe('Rules.js', () => {
  describe('buildRegex', () => {
    describe('Execute with no parameters', () => {
      const regex = buildRegex();
      test('Should return regular expression', () => {
        expect(regex instanceof RegExp).toBe(true);
      });
      describe('Test combined regex', () => {
        test('Should match words that look real', () => {
          const testCases = [
            "%%",
            "nonononononononon",
            "onyri",
            "riony",
            "pam",
            "sw",
            "llaggeagashre",
            "wr",
            "ageoppa",
            "supperychallafragilishios"
          ];
          testCases.forEach((testCase) => {
            expect(regex.test(testCase)).toBe(true);
          });
        });
        test('Should not match words that do not look real', () => {
          const testCases = [
            "ioioioioioio",
            "ggg",
            "swr",
            "ioyrn",
            "supercalafragilistic",
            "chinchilla"
          ];
          testCases.forEach((testCase) => {
            expect(regex.test(testCase)).toBe(false);
          });
        });
      });
    });
    describe('Execute by specifying rules', () => {
      const regex = buildRegex([rules.alternatingConsonantsAndVowels]);
      test('Should return regular expression', () => {
        expect(regex instanceof RegExp).toBe(true);
      });
      describe('Test specified rules', () => {
        test('Should match words that follow the rule', () => {
          const testCases = [
            "a",
            "g",
            "agagagagagagag",
            "kopihy"
          ];
          testCases.forEach((testCase) => {
            expect(regex.test(testCase)).toBe(true);
          });
        });
        test('Should not match words that do not follow the rule', () => {
          const testCases = [
            "ddddddddd",
            "gtgtgtgtgtgt",
            "ggoott"
          ];
          testCases.forEach((testCase) => {
            expect(regex.test(testCase)).toBe(false);
          });
        });
      });
    });
  });
});