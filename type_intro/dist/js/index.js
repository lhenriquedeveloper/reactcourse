"use strict";
// TS Types: String, boolean, number, etc.
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
// console.log(x);
//Inferencia x Annotation
// I 
let y = 12;
// A
let z = 20;
//Tuplas
let myTuple;
myTuple = [5, "Teste", ["João", "Maria"]];
console.log(myTuple);
// Object Literals
const user = {
    name: 'Joãozinho',
    age: 10
};
console.log(user);
//Any
let a = 0;
a = "Teste";
a = true;
console.log(a);
// Union Types
let id = "10";
id = 10;
console.log(id);
const idUser = 3442943;
console.log(idUser);
//Enum
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
//Literal Types
let teste;
teste = null;
teste = 'Autenticado';
