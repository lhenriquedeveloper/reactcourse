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
console.log(x);


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
console.log(teste);

//Funções
function sum(a: number, b: number) {
    return a + b;
}
let soma: number = sum(20, 50);
console.log(soma);

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Luis'));

function Logger(msg: string): void {
    console.log(msg);
}
Logger("Teste");

function Greetting(greet: string, name?: string): void {
    if (name) {
        console.log(`${greet},${name}`);
    }
    else {
        console.log(`${greet}, Visitante`);
    }
}
Greetting('Olá', 'Luis');
Greetting('Bem vindo');

//Interfaces
interface MathFunctioParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctioParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

//Narrowing - Checagem da tipagem de dados
//Generics

function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
}
const array1 = [1, 2, 3, 4, 5];
const array2 = ["Luis", "João", "Lucas"];

showArraysItems(array1);

//Classes
class User {
    name;
    role;
    isApproved;
    constructor(name: string, role: string, isApproved: boolean) {
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

//Interfaces em Classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

//Herança
class SuperCar extends Car {
    engine
    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();

//Decorators
//Contructor Decorator
function BaseParameters() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name
    constructor(name: string) {
        this.name = name
    }
}
const sam = new Person("Sam");
console.log(sam);