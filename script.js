// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
};

Employee.prototype = Object.create(Perosn.prototype);


function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	this.jobTitle = jobTitle;
}



Employee.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old. and my jon title is ${this.jobTitle}`)
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
