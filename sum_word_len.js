module.exports = function(str){
  total = 0;
  var string = str.split(' ');
  string.forEach(function(word){
    total += word.length;
  });
  return total;
}
