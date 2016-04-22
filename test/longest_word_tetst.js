var longest_word = require('../longest_word');
var shortest_word = require('../shortest_word');
var word_length = require('../word_length');
var assert = require('assert');

describe('longest word', function(){
  it('should take a sentence as a parameter and returns the longest word in it, and the length of the word',function(){
    assert.deepEqual(longest_word(),{ word: 'learning', length: 8 });
  });
});
describe('shortest word', function(){
  it('should take a sentence as a parameter and returns the shortest word in it, and the length of the word',function(){
    assert.deepEqual(shortest_word(),{ word: 'I', length: 1 }
);
  });
});
describe('word_length.js', function(){
  it('should take a sentence as a parameter and returns the average word length rounded up and rounded down',function(){
    assert.equal(word_length(),5);
  });
});
