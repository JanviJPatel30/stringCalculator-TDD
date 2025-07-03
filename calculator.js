function add(numbers) {
  // Specification 1: Return 0 for an empty string
  if (numbers === "") return 0;

  // Specification 2: Return the number itself if only one number is given
  if (!numbers.includes(",")) {
    return parseInt(numbers);
  }

  // Specification 3: If input contains commas, split and sum two numbers
  const parts = numbers.split(",");
  const sum = parts.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
}

module.exports = { add };
