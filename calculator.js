function add(numbers) {
  // Specification 1: Return 0 for an empty string
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiters: comma or newline

  // Specification 5: Handle custom delimiter syntax like "//;\n1;2"
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.split("\n")[0];
    delimiter = new RegExp(numbers[2]); // Extract delimiter from line
    numbers = numbers.split("\n")[1];   // Remove delimiter declaration
  }

  // Split the numbers using resolved delimiter(s)
  const parts = numbers.split(delimiter);

  // Convert parts to integers
  const parsedNumbers = parts.map(num => parseInt(num));

  // Specification 6: Throw an exception for any negative numbers
  const negatives = parsedNumbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  // Sum all valid numbers
  const sum = parsedNumbers.reduce((acc, num) => acc + num, 0);

  return sum;
}

module.exports = { add };
