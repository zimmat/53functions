var sum_word_len = require('../sum_word_len');
var assert = require('assert');
var str = ('learning to write mocha tests');
describe('sum_word_len', function(){
  it('should take a sentence as a parameter and returns the sum of the length of words in it', function(){
    var result = sum_word_len(str);
    assert.equal(result,25);

  });
});
