module.exports = function(name){
  this.userName = name;

if(!name){
  return "Hello!".toUpperCase();
}
else {
    return "Hello," + " " + name.toUpperCase() + "!";
}
};
