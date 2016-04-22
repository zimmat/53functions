module.exports = function(str){
  var string = "I am learning how to write mocha tests";
    string = string.split(" ");
    var longest = 0;
      var myString = {};
      string.forEach(function(str) {
          if (longest < str.length) {
              longest = str.length;
              myString = {
                 word : str,
                length : longest
              };

          }
      });
  console.log(myString);
   return myString;

}
