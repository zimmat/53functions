module.exports = function(name) {
  // function hello_uppercase(name) {
    this.userName = name;
    if (name == "Xolani") {
      return "Hello," + " " + name.toUpperCase() + "!";
    } else {
      return "Hello!".toUpperCase();
    }
  // }
};
