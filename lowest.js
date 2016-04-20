module.exports = function(numbers){

var minimum = 10;
numbers.forEach(function(low){
    console.log(low);
  minimum = Math.min.apply(null, numbers);
});
return minimum;
}
