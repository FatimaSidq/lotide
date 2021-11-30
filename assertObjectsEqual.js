const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(result, expected) {
  if (eqObjects(result, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${expected} === ${result}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${expected} === ${result}`);
  }
};

module.exports = assertObjectsEqual;