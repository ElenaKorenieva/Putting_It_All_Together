// Exercise 1 - Classes
// Create a class called `Person` with the following properties and methods:

// 1 - Properties:

//  `name` (string)
//  `age` (number)
// 2 - Methods:

//  `introduce()`: This method should return a string introducing the person,
// for example: "Hi, my name is John and I am 25 years old."

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Example usage:
const john = new Person("John", 25);
console.log(john.introduce());
