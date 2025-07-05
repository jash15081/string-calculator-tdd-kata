function add(numbers) {
  if (numbers === '') return 0;
  //default delimiter is comma and newline
  let delimiter = /,|\n/;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  // Replace custom delimiter with comma and split the string
  parts = numbers
    .replace(new RegExp(delimiter, 'g'), ',')
    .split(',')
    .map(Number);

  // Check for negative numbers
  const negatives = parts.filter((part) => part < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
  }
  var sum = parts.reduce((acc, part) => acc + part, 0);
  return sum;
}

module.exports = {
  add,
};
