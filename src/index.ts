/*podemos escrever o codigo em js normal, mas pra algumas questões
é bom incluir o typescript para poder adicionar a padronização de código.*/

const x:number = 50;

console.log(x);

//inferencia e annotation

//inferencia
let h = 12;

//annotation
let z: number = 12;

//tópicos basicos
let firstname: string ='Samuel';
let age: number = 10;
const isAdmin: boolean = true;

//string != string

console.log(typeof firstname);

firstname = 'João';

console.log(firstname);

//object
const myNumbers: number[] = [1,2,3,4,5];

console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase());
console.log(firstname.toUpperCase());
myNumbers.push(6);

console.log(myNumbers);

//tuplas
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a"+"b"]];
//myTuple = [true, false, true];


//object literals -> {porp: value}
const user: {name: string, age: number} = {
    name: "Jose",
    age: 24,
};

console.log(user);

console.log(user.name);

// any 
let a: any = 0;

a = "teste";
a = true;
a = [];


// union type - solução para o any quando não se sabe quan tos tipos de dados pode ter
let id: string | number = "10"

id = 200

//type alias
type myIdType = number | string;
 const userId: myIdType = 10;
 const productId: myIdType = "0000010";
 const shirId: myIdType = 1230;


//enum
//tamanho de roupas(size: Medio, size: pequeno)
enum Size {
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
}

const camisa = {
    name: "camisa gola v",
    size: Size.M
};

console.log(camisa);

// literal type
let test: "autenticado" | null;
//não da pra alterar o valor, somente assim:
test = "autenticado"
test = null;


//funcoes
function sum(a: number, b: number) {
    return a + b
}

console.log(sum(12,12));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Samuel"));

//não possui retorno
function logger(msg: string): void{
    console.log(msg);
}

logger("teste!");

function greeting(name: string, greet?: string): void{
    if(greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`)
}

greeting("José");
greeting("João", "Sr.")

//interfaces
interface MathFunctioParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctioParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctioParams){
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctioParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));

//narrowing - checagem de tipos
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O numero é ${info}`);
        return
    }
    console.log("Não é um número.")
}

doSomething(5);
doSomething(true);

// generics
function exibirArrayItens<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
}

const a1 = [1,2,3];
const a2 = ["a", "b", "C"];

exibirArrayItens(a1);
exibirArrayItens(a2);

// classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    exibirUserName(){
        console.log(`O nome do usuário é  ${this.name}`)
    }

    exibirUserRole(canShow: boolean): void{
        if(canShow){
            console.log(`Cargo:  ${this.name}`);
            return
        }
        console.log("Informação é restrita");
    }
}

const Cesar = new User ("César", "Admin", true)

console.log(Cesar);
Cesar.exibirUserName();
Cesar.exibirUserRole(false);

//interfaces em classes

interface IVeiculo {
    marca: string
    exibirMarca(): void
}

class Carro implements IVeiculo {
    marca
    rodas

    constructor(marca: string, rodas: number) {
        this.marca = marca
        this.rodas = rodas
    }

    exibirMarca(): void{
        console.log(`Marca do carro: ${this.marca}`)
    }
}

const fusca = new Carro ("VW", 4);

fusca.exibirMarca();

//herança
class SuperCarro extends Carro {
    
    motor

    constructor(marca: string, rodas: number, motor: number) {
        super(marca, rodas)
        this.motor = motor
    }
}

const a4 = new SuperCarro ("Audi", 4, 2.0);

console.log(a4)

a4.exibirMarca();

//decorators - usado para validação de dados
//constructor decorator
function BaseParameters(){ //gererics pegando os argumentos vindos do constructor e tipando ele com os objetos
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor{
            id = Math.random()
            createdAt = new Date();
        }
    }
}

@BaseParameters() //@ é um decorator
class Person {
    name

    constructor(name: string){
        this.name = name
    }
}

const sam = new Person("Sam");
console.log(sam)
