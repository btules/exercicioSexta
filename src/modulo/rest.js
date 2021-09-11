var sum = (...numbers)=> {
  var result = 0;
  numbers.forEach(number => {
    result += number;
  })
  return result;
}

module.exports = sum;