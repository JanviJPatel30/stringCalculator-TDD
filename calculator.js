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

    // Step 6: Handle custom delimiters (single or multiple with [ ])
    if (numbers.startsWith("//")) {
      const delimiterLine = numbers.split("\n")[0];

      // Match delimiters inside square brackets [ ]
      const matches = delimiterLine.match(/\[(.*?)\]/g);
      if (matches) {
        // Step 10+: Support multiple and multi-char delimiters
        const delimiters = matches.map(d =>
          d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );
        delimiter = new RegExp(delimiters.join('|'));
      } else {
        // Handle simple case like //;\n
        delimiter = new RegExp(numbers[2]);
      }

      // Strip delimiter declaration line
      numbers = numbers.split("\n")[1];
    }

    // Split input string using detected delimiter(s)
    const parts = numbers.split(delimiter);

    // Step 9: Convert strings to integers, ignore >1000, remove NaN
    const parsedNumbers = parts
      .map(num => parseInt(num))
      .filter(n => !isNaN(n) && n <= 1000); 

    // Step 8: Throw error if any negative numbers are found
    const negatives = parsedNumbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    // Return sum of valid numbers
    return parsedNumbers.reduce((acc, num) => acc + num, 0);
  }

  // Step 7: Return how many times add() has been called
  getCalledCount() {
    return this.callCount;
  }
}

module.exports = { StringCalculator };
