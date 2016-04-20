var count_words = require('../count_words');
var assert = require('assert');

var words = "i am happy";
describe('count words', function(){
  it('should take a sentence as a parameter and returns the number of words in the sentence', function(){
    var result = count_words(words);
    assert.equal(result,3);
  });
});
