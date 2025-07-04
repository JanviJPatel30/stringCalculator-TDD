const { StringCalculator } = require('./calculator');

test('returns 0 for an empty string', () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test('returns number when a single number is provided', () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
});

test('returns sum when two comma-separated numbers are provided', () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});

test('returns sum for multiple comma-separated numbers', () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2,3,4")).toBe(10);
});

test('returns sum when newlines are used as delimiters', () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2,3")).toBe(6);
});

test('supports custom delimiter defined at the start', () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2")).toBe(3);
});

test('throws an exception when a negative number is used', () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,3")).toThrow("negative numbers not allowed -2");
});

test('throws an exception when multiple negative numbers are used', () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,-5,3")).toThrow("negative numbers not allowed -2,-5");
});

test('getCalledCount returns how many times add was called', () => {
  const calculator = new StringCalculator();
  calculator.add("1,2");
  calculator.add("3");
  expect(calculator.getCalledCount()).toBe(2);
});
