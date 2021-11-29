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

const assertObjectsEqual = function(result, expected) {
  if (eqObjects(result, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${expected} === ${result}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${expected} === ${result}`);
  }
};