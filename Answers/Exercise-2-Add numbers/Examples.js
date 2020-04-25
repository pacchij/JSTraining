function createPerson(name, age, job) {
  var person = new Object();
  person.name = name;
  person.age = age;
  person.job = job;
  person.describe = function(){
    return 'name: '+ person.name + ', '+'age: '+ person.age;
  }
  return person;
}
createPerson('modi', 60, 'Prime minister');

var person2 = {
  name: 'Modi',
  age: 60,
  job: 'Prime Minister',
  describe: function(){
    return 'name: '+ person.name + ', '+'age: '+ person.age;
  }
}

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.describe = function(){
    return 'name: '+ person.name + ', '+'age: '+ person.age;
  }
}
var modi = new Person('modi', 60, 'prime minister');
var steve = new Person('steve job', 57, 'ceo');


function Person() {
}
Person.name = name;
Person.age = age;
Person.prototype.job = job;
Person.prototype.init = function(name, age) {
  this.name = name;
  this.age = age
}
Person.prototype.describe = function(){
    return 'name: '+ this.name + ', '+'age: '+ this.age;
}

var modi = new Person();
modi.init('modi', 60);
modi.describe();

var steve = new Person('steve job', 57, 'ceo');