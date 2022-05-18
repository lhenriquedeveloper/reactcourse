"use strict";
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
}
const user1 = new User("Luis", "Admin", true);
console.log(user1);
