const { alphaOnly, containsTheSameLetters } = require('../../../src/cli/lib/validateInput');

describe('Validate Input', () => {
  describe('alphaOnly', () => {
    test('should return true for words that contain letters only', () => {
      const testCases = [
        "irony",
        "gg",
        "a"
      ];

      testCases.forEach((testCase) => {
        expect(alphaOnly.test(testCase)).toBe(true);
      });
    });
    test('should return false for words that do not contain only letters', () => {
      const testCases = [
        "ir%uf",
        "GFD123FF",
        "1",
        "gfdgjAFGRAE7"
      ];

      testCases.forEach((testCase) => {
        expect(alphaOnly.test(testCase)).toBe(false);
      });
    });
  });
  describe('containsTheSameLetters', () => {
    test('should return true for words that contain the same letters', () => {
      const wordATestCases = [
        "irony",
        "gg",
        "irony"
      ];

      const wordBTestCases = [
        "ynori",
        "gg",
        "oynri"
      ];

      for(let i = 0; i < wordATestCases.length; i++){
        let response = containsTheSameLetters(wordATestCases[i], wordBTestCases[i]);
        expect(response).toBe(true);
      }
    });
    test('should return false for words that do not contain the same letters', () => {
      const wordATestCases = [
        "irony",
        "gg",
        "irony"
      ];

      const wordBTestCases = [
        "ynri",
        "ga",
        "cat"
      ];

      for(let i = 0; i < wordATestCases.length; i++){
        let response = containsTheSameLetters(wordATestCases[i], wordBTestCases[i]);
        expect(response).toBe(false);
      }
    });
  });
});