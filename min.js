const min = function(array) {
  let smallest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
};

module.exports = min;