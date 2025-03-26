"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const x = 50;
console.log(x);
let h = 12;
let z = 12;
let firstname = 'Samuel';
let age = 10;
const isAdmin = true;
console.log(typeof firstname);
firstname = 'João';
console.log(firstname);
const myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstname.toUpperCase());
myNumbers.push(6);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a" + "b"]];
const user = {
    name: "Jose",
    age: 24,
};
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "0000010";
const shirId = 1230;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa gola v",
    size: Size.M
};
console.log(camisa);
let test;
test = "autenticado";
test = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Samuel"));
function logger(msg) {
    console.log(msg);
}
logger("teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José");
greeting("João", "Sr.");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("Não é um número.");
}
doSomething(5);
doSomething(true);
function exibirArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "C"];
exibirArrayItens(a1);
exibirArrayItens(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    exibirUserName() {
        console.log(`O nome do usuário é  ${this.name}`);
    }
    exibirUserRole(canShow) {
        if (canShow) {
            console.log(`Cargo:  ${this.name}`);
            return;
        }
        console.log("Informação é restrita");
    }
}
const Cesar = new User("César", "Admin", true);
console.log(Cesar);
Cesar.exibirUserName();
Cesar.exibirUserRole(false);
class Carro {
    marca;
    rodas;
    constructor(marca, rodas) {
        this.marca = marca;
        this.rodas = rodas;
    }
    exibirMarca() {
        console.log(`Marca do carro: ${this.marca}`);
    }
}
const fusca = new Carro("VW", 4);
fusca.exibirMarca();
class SuperCarro extends Carro {
    motor;
    constructor(marca, rodas, motor) {
        super(marca, rodas);
        this.motor = motor;
    }
}
const a4 = new SuperCarro("Audi", 4, 2.0);
console.log(a4);
a4.exibirMarca();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
