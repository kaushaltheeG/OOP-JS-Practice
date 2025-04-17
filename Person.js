/**
 * Person Class with Details
 * Write a JavaScript program to create a class called "Person" with properties for name, age and country.
 * Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
 * 
 */

class Person {
  constructor(name, age, country) {
    this._name = name;
    this._age = age;
    this._country = country;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string' && newName.length < 1) {
      return new Error('name must be a valid string');
    }
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (typeof newAge !== 'number' && newAge < 1) {
      return new Error('age must be a valid number');
    }
    this._age = newAge;
  }

  get country() {
    return this._country;
  }

  set country(newCountry) {
    if (typeof newCountry !== 'string' && newCountry.length < 1) {
			return new Error('country must be a valid string');
		}
    this._country = newCountry;
  }

  displayDetailsAsString() {
    return `Name: ${this._name}, Age: ${this._age}, Country: ${this._country}`;
  }

  displayDetailsAsObject() {
    return {
      name: this._name,
      age: this._age,
      country: this._country,
    };
  }
}

const kaushal = new Person('Kaushal', 25, 'USA');
const andrew = new Person('Andrew', 25, 'USA');
console.log(kaushal.displayDetailsAsString());
console.log(andrew.displayDetailsAsString());




