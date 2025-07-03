function add(numbers) {
  // Specification 1: Return 0 for an empty string
  if (numbers === "") return 0;

  // Specification 2: Return the number itself if only one number is given
  return parseInt(numbers);
}

module.exports = { add };
