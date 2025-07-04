class StringCalculator {
  constructor() {
    // Step 7: Counter to track how many times add() has been called
    this.callCount = 0;
  }

  add(numbers) {
    // Step 7: Increment method call count
    this.callCount++;

    // Step 1: Return 0 for an empty string
    if (numbers === "") return 0;

    // Step 2-5: Use default delimiters: comma or newline
    let delimiter = /,|\n/;

    // Step 6: Handle custom delimiters like //;\n1;2
    if (numbers.startsWith("//")) {
      const delimiterLine = numbers.split("\n")[0];

      // Support multi-character or multiple delimiters if wrapped in brackets
      const matches = delimiterLine.match(/\[(.*?)\]/g);
      if (matches) {
        // Extract and escape multiple delimiters
        const delimiters = matches.map(d =>
          d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );
        delimiter = new RegExp(delimiters.join('|')); // Combine all delimiters
      } else {
        // Single-character delimiter fallback
        delimiter = new RegExp(numbers[2]);
      }

      // Remove delimiter declaration line
      numbers = numbers.split("\n")[1];
    }

    // Split string using determined delimiter(s)
    const parts = numbers.split(delimiter);

    // Convert string parts to integers (no Step 9 filtering yet)
    const parsedNumbers = parts
      .map(num => parseInt(num))
      .filter(n => !isNaN(n)); // Only keep valid numbers

    // Step 7 (from earlier): Throw error for negative numbers
    const negatives = parsedNumbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    // Return sum of valid numbers
    return parsedNumbers.reduce((acc, num) => acc + num, 0);
  }

  // Step 7: Return number of times add() was called
  getCalledCount() {
    return this.callCount;
  }
}

module.exports = { StringCalculator };
