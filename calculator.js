function add(numbers) {
  // Specification 1: Return 0 for an empty string
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiters: comma or newline

  // Specification 5: Handle custom delimiter syntax like "//;\n1;2"
  if (numbers.startsWith("//")) {
    // Extract delimiter from the first line
    const delimiterLine = numbers.split("\n")[0];
    delimiter = new RegExp(numbers[2]); // e.g., ";" becomes /;/

    // Remove delimiter declaration from input
    numbers = numbers.split("\n")[1];
  }

  // Split numbers using the resolved delimiter(s)
  const parts = numbers.split(delimiter);

  // Sum all the parts
  const sum = parts.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
}

module.exports = { add };
