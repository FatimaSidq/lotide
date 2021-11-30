const middle = require("../middle");
const assert = require('chai').assert;

describe("#head", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.equal(middle([1, 2, 3]), [2]);
  });
  it('["5"] should equal []', () => {
    assert.equal(middle(["5"]), []);
  });
  it('[1, 2, 3, 4, 5, 6] should equal [3, 4]', () => {
    assert.equal(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});