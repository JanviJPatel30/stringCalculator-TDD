function add(numbers) {
  // Specification 1: Return 0 for an empty string
  if (numbers === "") return 0;

  // Specification 2: Return the number itself if only one number is given
  if (!numbers.includes(",") && !numbers.includes("\n")) {
    return parseInt(numbers);
  }

  // Specification 3: Replace newlines with commas to normalize delimiters
  const normalized = numbers.replace(/\n/g, ",");

  // Specification 4: Split by comma and sum all numbers
  const parts = normalized.split(",");
  const sum = parts.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
}

module.exports = { add };
