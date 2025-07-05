function add(numbers) {
  if (numbers === '') return 0;
  const parts = numbers.split(',');
  var sum = parts.reduce((acc, part) => acc + parseInt(part), 0);
  return sum;
}

module.exports = {
  add,
};
