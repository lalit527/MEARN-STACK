class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetail() {
        return "Hi, I'm" + this.name + " " + this.age;
    }
    setDetail(city) {
        this.city = city;
    }
}

var person = new Person("Jon", 25);

/**
 * ES5
 */
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.setDetail = function(city) {
    this.city = city;
}; 
Person.prototype.getDetail = function() {
    return "Hi, I'm" + this.name + " " + this.age;
}

