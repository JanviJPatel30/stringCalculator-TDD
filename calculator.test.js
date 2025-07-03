const { add } = require('./calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number when a single number is provided', () => {
  expect(add("1")).toBe(1);
});

test('returns sum when two comma-separated numbers are provided', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum for multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('returns sum when newlines are used as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});
