const { getRating } = require('../../src/lib/scrambleRating');

describe('Scramble Rating', () => {
  test('Not a scramble', () => {
    const scramble = [
      "irony",
      "cow",
      "map",
    ];

    const word = [
      "irony",
      "cow",
      "map",
    ];

    for(let i = 0; i < scramble.length; i++){
      expect(getRating(scramble[i], word[i])).toBe('not');
    }
  });
  test('Fair scramble', () => {
    const scramble = [
      "maps",
      "riony",
      "INOYR",
    ];

    const word = [
      "spam",
      "IRONY",
      "irony",
    ];

    for(let i = 0; i < scramble.length; i++){
      expect(getRating(scramble[i], word[i])).toBe('fair');
    }
  });
  test('Poor scramble', () => {
    const scramble = [
      "ioyrn",
      "pcak",
      "trewched",
    ];

    const word = [
      "irony",
      "pack",
      "wretched",
    ];

    for(let i = 0; i < scramble.length; i++){
      expect(getRating(scramble[i], word[i])).toBe('poor');
    }
  });
  test('Hard scramble', () => {
    const scramble = [
      "onyri",
      "wrope",
      "rabaclen"
    ];

    const word = [
      "irony",
      "power",
      "barnacle"
    ];

    for(let i = 0; i < scramble.length; i++){
      expect(getRating(scramble[i], word[i])).toBe('hard');
    }
  });
});
