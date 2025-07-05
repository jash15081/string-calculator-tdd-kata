const { escapeRegExp } = require('../utils/escapeRegExp');

function add(numbers) {
  if (numbers === '') return 0;
  //default delimiter is comma and newline
  let delimiter = /,|\n/;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);

    // If the delimiter is in the form of //[delimiter]\n, we need to handle it
    const matches = [...delimiter.matchAll(/\[([^\]]+)\]/g)];
    if (matches.length > 0) {
      // If there are multi-character delimiters, we need to create a regex
      const escapedDelimiters = matches.map((match) => escapeRegExp(match[1]));
      delimiter = new RegExp(escapedDelimiters.join('|'), 'g');
    } else {
      // If it's a single character delimiter, escape it
      delimiter = escapeRegExp(delimiter);
    }
  }

  // Replace custom delimiter with comma and split the string
  const parts = numbers.replace(delimiter, ',').split(',').map(Number);

  // Check for negative numbers
  const negatives = parts.filter((part) => part < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
  }

  // Filter out numbers > 1000
  const filteredNumbers = parts.filter((n) => n <= 1000);

  return filteredNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = {
  add,
};
