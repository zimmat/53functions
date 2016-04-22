module.exports = function(str){
  var string = "I am learning how to write mocha tests";
    string = string.split(" ");
    var word_length = 0;
      string.forEach(function(str) {
              word_length = (str.length/ str.split(" ").length);

      });
  console.log(word_length);
    return word_length;
}
