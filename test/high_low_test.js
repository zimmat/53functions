var high_low = require('../high_low');
var assert = require('assert');

describe("describe high_low", function(){
  it("takes a list of numbers as a parameter and returns the highest number" , function(){
    var result = high_low( Math.max (10));
    assert.equal(result, 10)
  });
  it("it should return lowest number", function{
    var result = high_low(Math.min(1));
    assert.equal(result, (1))
  });
});
