var hello_list = require('../hello_list');
var assert = require('assert');

describe('hello_list', function() {

  it("it should take a number and return a list of (hello world) entries equal to the number supplied", function() {
    var result = hello_list(5);
    assert.equal(result.length, (5));

  });
});
