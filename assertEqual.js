const assertEqual = function(expected, result) {
  if (result === expected) {
    console.log(`✅✅✅ Assertion Passed: ${expected} === ${result}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${expected} === ${result}`);
  }
};

module.exports = assertEqual;