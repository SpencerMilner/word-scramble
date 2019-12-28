const { rules, buildRegex } = require('../src/rules');
const regex = buildRegex([rules.specialCaseA]);

test('Permit A followed by I or Y', () => {
  const validTestCases = [
    "ai",
    "ay",
    "aig"
  ];

  const invalidTestCases = [
    "gi",
    "g",
    "aio"
  ];

  validTestCases.forEach((testCase) => {
    expect(regex.test(testCase)).toBe(true);
  });

  invalidTestCases.forEach((testCase) => {
    expect(regex.test(testCase)).toBe(false);
  });
});