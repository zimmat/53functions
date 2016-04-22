module.exports = function(str){
  var string = "I am learning how to write mocha tests";
    string = string.split(" ");
    var shortest = 10;
      var myString = {};
      string.forEach(function(str) {
          if (shortest > str.length) {
              shortest = str.length;
              myString = {
                 word : str,
                length : shortest
              };

          }
      });
  console.log(myString);
   return myString;

}
