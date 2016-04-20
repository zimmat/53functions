var high_low = require('../high_low');
var lowest = require('../lowest');
var assert = require('assert');
var numbers = [1,2,3,4,5,6,7,8,9,10];
describe("high", function(){
  it("should take a list of numbers as a parameter and return the highest number" , function(){
    var result = high_low(numbers);
    assert.equal(result, 10)
  });
});

describe("low", function(){
  it("should return lowest number", function(){
    var result = lowest(numbers);
    assert.equal(result, (1))
  });
});
