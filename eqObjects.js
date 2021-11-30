const eqArrays = require("./eqArrays");

const eqObjects = function(array1, array2) {
  const keysExpected = Object.keys(array1);
  if (keysExpected.length !== Object.keys(array2).length) {
    return false;
  }
  for (let key of keysExpected) {
    if (Array.isArray(array1[key]) || Array.isArray(array2[key])) {
      if (!eqArrays(array1[key], array2[key])) {
        return false;
      }
    } else {
      if (array1[key] !== array2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;