module.exports = function(numbers){
  var max = 0;
  numbers.forEach(function(highest){
max = Math.max.apply(null, numbers);
  });
  console.log(max);
  return max;
}
