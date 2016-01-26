var assert = require('assert');

describe("length", function(){
    var number_list = require('../length');

    it("should return 16 for the string 'zebras are cool!'", function(){
        assert.equals(length("zebras are cool!"), 16)
    });

    it("should return 0 for the string ''", function(){
        assert.equals(length(""), 0);
    });

});
