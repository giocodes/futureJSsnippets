// ES5 Syntax
function Camper(name, age) {
  this.name = name;
  this.age = age;
}
Camper.prototype.greeting = function() {
  return 'My name is ' + this.name;
};
var jay = new Camper('JS', 22);

jay.greeting(); // My name is JS

// ES6 Syntax
class Camper6 {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greeting() {
    return 'I am ' + this.name;
  }
}
let ecma = new Camper6('EcmaScript', 22);

ecma.greeting(); // I am EcmaScript