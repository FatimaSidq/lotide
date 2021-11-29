const min = function(array) {
  let smallest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
};

console.log(min([1260, 490, 599, 1400, 820]))