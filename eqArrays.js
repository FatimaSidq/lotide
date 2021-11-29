const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let element = 0; element < array1.length; element += 1) {
    if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
      if (!eqArrays(array1[element], array2[element])) {
        return false;
      }
    } else if (array1[element] !== array2[element]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;