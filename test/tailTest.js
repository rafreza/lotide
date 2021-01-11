const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for 2", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
});
