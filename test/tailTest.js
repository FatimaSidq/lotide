const tail = require("../tail");
const assert = require('chai').assert;

describe("#head", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.equal(tail([1, 2, 3]), [2, 3]);
  });
  it('["5"] should equal ["5"]', () => {
    assert.equal(tail(["5"]), ["5"]);
  });
});