"use strict";

class Parent {

	constructor(breed_name){
		this.breed_name = breed_name;
	};
	
	kek(){
		console.log(this.breed_name + " кекнул");
	}
}

class Person extends Parent {

	constructor(first_name, last_name, age, gender){
		super("Долбаеб");
		this.first_name = first_name;
		this.last_name = last_name;
		this.age = age;
		this.gender = gender;
	}
	
	logAllData(){
		console.log("******************************");
		console.log("First name: " + this.first_name);
		console.log("Last name: " + this.last_name);
		console.log("age: " + this.age);
		console.log("gender: " + this.gender);
		console.log("******************************");
	}
	
	changeFirstName(new_name){
		this.first_name = new_name;
	}
	
	get FullName(){
		return this.first_name + " " + this.last_name;
	}
	
	set LastName(new_name){
		this.last_name = new_name;
	}
	
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert("I walk: " + this.name);
  }
}

class Rabbit extends Animal {
  walk() {
    super.walk();
    alert("...and jump!");
  }
}

new Rabbit("lolkas").walk();
// I walk: Вася
// and jump!

let Vanya = new Person("Ваня", "Иванов", 22, "M");
Vanya.logAllData();
console.log(Vanya.FullName);
Vanya.LastName = "Лохов";
Vanya.changeFirstName("Лох");
Vanya.logAllData();
Vanya.kek();
console.log(Vanya.FullName);