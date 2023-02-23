class Person {
  constructor(name, age, gender, occupation) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
  }

  profile() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old. I work as a ${this.occupation}.`);
  }

  getGender() {
    return this.gender;
  }
}
const person1 = new Person("Dinesh", 23, "male", "web developer");
const person2 = new Person("Arun", 20, "male", "doctor");

person1.profile();         // "Hello, my name is Dinesh and I'm 23 years old. I work as a web developer."
person2.profile();         // "Hello, my name is Arun and I'm 20 years old. I work as a doctor."