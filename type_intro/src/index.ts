// TS Types: String, boolean, number, etc.

let firstName: string = "Luis";
let age: number = 19;
const isAdmin: boolean = true;

console.log(firstName);
console.log(age);
console.log(isAdmin);

console.log(typeof firstName);

const myNumbers: number[] = [1, 2, 3, 4, 5, 6,];
console.log(myNumbers.length);


let x: number = 15;
x = 20;
// console.log(x);


//Inferencia x Annotation

// I 
let y = 12;
// A
let z: number = 20;

//Tuplas
let myTuple: [number, string, string[]];
myTuple = [5, "Teste", ["João", "Maria"]];
console.log(myTuple);

// Object Literals
const user: { name: string, age: number } = {
    name: 'Joãozinho',
    age: 10
}
console.log(user);

//Any
let a: any = 0;
a = "Teste";
a = true;
console.log(a);

// Union Types
let id: string | number = "10";
id = 10;
console.log(id);

//Type Alias

type idType = number | string;
const idUser: idType = 3442943;
console.log(idUser);

//Enum
enum Size {
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
}

const camisa = {
    name: "Camisa Polo",
    size: Size.G,
}
console.log(camisa);

//Literal Types
let teste: 'Autenticado' | null;
teste = null;
teste = 'Autenticado';