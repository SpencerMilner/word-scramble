const { getRating } = require('../../src/lib/scrambleRating');

describe('Scramble Rating', () => {
  test('Not a scramble', () => {
    let scramble = "irony";
    let word = "irony";
    expect(getRating(scramble, word)).toBe('not');
  });
  test('Fair scramble', () => {
    const scramble = "maps";
    const word = "spam";
    expect(getRating(scramble, word)).toBe('fair');
  });
  test('Poor scramble', () => {
    const scramble = "ioyrn";
    const word = "irony";
    expect(getRating(scramble, word)).toBe('poor');
  });
  test('Hard scramble', () => {
    const scramble = "onyri";
    const word = "irony";
    expect(getRating(scramble, word)).toBe('hard');
  });
});
