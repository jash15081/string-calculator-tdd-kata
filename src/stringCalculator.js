function add(numbers) {
  if (numbers === '') return 0;
  const parts = numbers.replace(/\n/g, ',').split(',').map(Number);
  var sum = parts.reduce((acc, part) => acc + part, 0);
  return sum;
}

module.exports = {
  add,
};
