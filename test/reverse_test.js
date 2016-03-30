var reverse = require('../reverse');
var assert = require('assert');

describe("reverse", function() {

  it("should return the string reversed", function() {
    var result = reverse("zebras");
    assert.equal(result, "sarbez");
  });
});
