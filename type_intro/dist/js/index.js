"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let firstName = "Luis";
let age = 19;
const isAdmin = true;
console.log(firstName);
console.log(age);
console.log(isAdmin);
console.log(typeof firstName);
const myNumbers = [1, 2, 3, 4, 5, 6,];
console.log(myNumbers.length);
let x = 15;
x = 20;
console.log(x);
let y = 12;
let z = 20;
let myTuple;
myTuple = [5, "Teste", ["João", "Maria"]];
console.log(myTuple);
const user = {
    name: 'Joãozinho',
    age: 10
};
console.log(user);
let a = 0;
a = "Teste";
a = true;
console.log(a);
let id = "10";
id = 10;
console.log(id);
const idUser = 3442943;
console.log(idUser);
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Polo",
    size: Size.G,
};
console.log(camisa);
let teste;
teste = null;
teste = 'Autenticado';
console.log(teste);
function sum(a, b) {
    return a + b;
}
let soma = sum(20, 50);
console.log(soma);
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Luis'));
function Logger(msg) {
    console.log(msg);
}
Logger("Teste");
function Greetting(greet, name) {
    if (name) {
        console.log(`${greet},${name}`);
    }
    else {
        console.log(`${greet}, Visitante`);
    }
}
Greetting('Olá', 'Luis');
Greetting('Bem vindo');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const array1 = [1, 2, 3, 4, 5];
const array2 = ["Luis", "João", "Lucas"];
showArraysItems(array1);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
}
const user1 = new User("Luis", "Admin", true);
console.log(user1);
user1.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
