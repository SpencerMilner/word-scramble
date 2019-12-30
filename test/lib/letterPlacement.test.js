const { someLettersAreCorrect } = require('../../src/lib/letterPlacement');

describe('Letter Placement', () => {
  describe('someLettersAreCorrect', () => {
    test('should return true for scrambles where the first letter or two consecutive letters are correct', () => {
      const wordATestCases = [
        "irony",
        "irony",
        "irony",
      ];

      const wordBTestCases = [
        "irony",
        "ionyr",
        "yroni",
      ];

      for(let i = 0; i < wordATestCases.length; i++){
        let response = someLettersAreCorrect(wordATestCases[i], wordBTestCases[i]);
        expect(response).toBe(true);
      }
    });
    test('should return false for scrambles where no two consecutive letters and the first letter are not correct', () => {
      const wordATestCases = [
        "irony",
        "irony",
      ];

      const wordBTestCases = [
        "cat",
        "ynroi",
      ];

      for(let i = 0; i < wordATestCases.length; i++){
        let response = someLettersAreCorrect(wordATestCases[i], wordBTestCases[i]);
        expect(response).toBe(false);
      }
    });
  });
});