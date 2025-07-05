function add(numbers) {
  if (numbers === '') return 0;
  const parts = numbers.split(',');
  var sum = 0;
  for (let part of parts) {
    sum += parseInt(part);
  }
  return sum;
}

module.exports = {
  add,
};
