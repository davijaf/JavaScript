// funcao anonima
const soma =  function nome(a,b) {
    return a + b;
}
console.log(soma(1,2)); // 3
console.log(soma(5,4)); // 9

// funcao IIFE ou autoinvocavel
(
    function() {
        let name =  "Davi José Araújo Filho";
        console.log(name);
        return;
    }
)();

(
    function (a, b) {
        console.log(a + b);
        return;
    }
)(1,4);


const soma2 = (
    function (a,b) {
        return a + b;
    }
)(1, 2);
console.log(soma2);

//Callbacks
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const sum = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSum = calc(sum, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSum);
console.log(resultSub);

// Parametros antes de atualizacao ES2015
function exponencial(array, num) {
    if (num === undefined) {
        num = 1;
    }
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    } 
    return result;
}
console.log(exponencial([1,2,3,4]));
console.log(exponencial([1,2,3,4],2));

// Parametros após atualizacao ES2015
function exponencial2(array, num = 1) {
    const result2 = [];
    for(let i = 0; i < array.length; i++) {
        result2.push(array[i] ** num);
    } 
    return result2;
}
console.log(exponencial2([1,2,3,4]));
console.log(exponencial2([1,2,3,4],2));

// Objeto Arguments

function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max
}
console.log(findMax(1, 2, 3, 6, 90, 1));

function showArgs() {
    return arguments;
}
console.log(showArgs(1,2, [2,3,4], 'string'));

 //Spread Lidar com elementos separados do arrary;

function sum2(x, y, z, k) {
    return x + y + z + k
}
const numbers = [1, 2, 3, 5];
console.log(sum2(...numbers));

//Rest combina elementos em um array ...

function confereTamanho(...args) {
    console.log(args.length)
    console.log(args)
}
confereTamanho(); //0;
confereTamanho(1,2); //2;
confereTamanho(3,4,5); //3;

// Objects Desctructuring

const user = {
    id: 42,
    displayName: 'davijaf',
    fullName: {
        firstName: 'Davi',
        lastName: 'José'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user));

console.log(getFullName(user));

// Loops
// If/Else

function numeroPositivo(num) {
    let resultado;
    if(num<0){
        resultado=false;
    } else {
        resultado = true;
    }
    return resultado;
}
console.log(numeroPositivo(2));
console.log(numeroPositivo(-9));

// Outras forma
function numeroPositivo(num) {
    let resultado;
    const ehNegativo = num < 0;
    if(ehNegativo){
        resultado=false;
    } else {
        resultado = true;
    }
    return resultado;
}
console.log(numeroPositivo(2));
console.log(numeroPositivo(-9));

// Outra forma
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    if(ehNegativo){
        return false;
    } else {
        return true;
    }
}
console.log(numeroPositivo(2));
console.log(numeroPositivo(-9));

// Outra forma aninhando ifs
function numeroPositivo2(num2) {
    const ehNegativo2 = num2 < 0;
    const maiorQueDez = num2 > 10;
    if(ehNegativo2){
        return "Este número é negativo!";
    } else if(!ehNegativo2 && maiorQueDez){
        return "Este número é positivo e maior que 10!";
    } 
    return "Este número é positivo"
}
console.log(numeroPositivo2(2));
console.log(numeroPositivo2(-2));
console.log(numeroPositivo2(40));

//Switch/case

function getAnimal(id) {
    switch(id) {
        case 1:
            return 'cão';
        case 2:
            return 'gato';
        case 3:
            return 'pássaro';
        default:
            return 'peixe';
    }
}
console.log(getAnimal(1));
console.log(getAnimal(4));
console.log(getAnimal('1'));

// For

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i=0; i<arr.length; i++) {
        multiplicados.push(arr[i]*2);
    }
    return multiplicados;
}
const meusNumeros = [2, 33, 456, 356, 40];
console.log(multiplicaPorDois(meusNumeros));

//For..in

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}
const meuObjeto = {
    nome: 'João',
    idade: '20',
    cidade: 'Salvador'
}
forInExemplo(meuObjeto);

function forInExemplo2(obj2) {
    for(prop2 in obj2) {
        console.log(obj2[prop2]);
    }
}
const meuObjeto2 = {
    nome: 'João',
    idade: '20',
    cidade: 'Salvador'
}
forInExemplo2(meuObjeto2);

//For...of

function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}
const palavra =  'abacaxi';
logLetras(palavra);

function logNumeros(nums) {
    for(num of nums) {
        console.log(num);
    }
}
const nums =  [30, 20, 233, 2];
logNumeros(nums);

let array3 = []
function logLetras2(palavras) {
    for(letra of palavras) {
        array3.push(letra);
    }
    console.log(array3);
}
const palavras =  'abacaxi';
logLetras2(palavras);

// While ... do

function exemploWhille() {
    let num = 0
    while(num <= 5) {
        console.log(num)
        num++;
    } 
}
exemploWhille();

//Do ...While

function exemploDoWhille() {
    let num = 6
    do {
        console.log(num);
        num++;  
    } while(num <= 6)
}
exemploDoWhille()

//This

const pessoa2 = {
    firstName2: 'Davi',
    lastName2: 'José',
    id2: 1,
    fullName2: function() {
        return this.firstName2 + " " + this.lastName2;
    },
    getId2: function() {
        return this.id2;
    }
};
console.log(pessoa2.fullName2());
console.log(pessoa2.getId2());

// This in the places
//nanvegador ou console

console.log(this);
// na função
(function() {
    console.log(this);
}) ();

// no objeto

const pessoa4 = {
    firstName2: 'Davi',
    lastName2: 'José',
//    getFullName: function() {
//        return this.firstName2 + " " + this.lastName2;
//    }
    getFullName2: function() {
    return pessoa4.firstName2 + " " + pessoa4.lastName2;
    }
};
//console.log(pessoa4.getFullName());
console.log(pessoa4.getFullName2());

// Call - Manipulando o valor de This

const pessoa = {
    nome : 'Miguel',
};
const animal = {
    nome : 'Murphy',
};
function getSomething() {
    console.log(this.nome);
}
getSomething.call(pessoa);
getSomething.call(animal);

// Passar parâmetros para função com o Call

const myObj = {
    num1: 2,
    num2: 4
};
function soma3(a,b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma3.call(myObj,1,5)

// Apply
const pessoa3 = {
    nome: 'Davi',
};
const animal2 = {
    nome: 'Kira',
};
function getSomething() {
    console.log(this.nome);
}
getSomething.apply(pessoa3);
getSomething.apply(animal2);

// Apply passa os argumentos dentro de um array

const myObj2 = {
    num1: 2,
    num2: 4
};
function soma4(a,b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma4.apply(myObj2,[1,5]);

// Bind - clonar estrutura da função

const retornaNomes = function() {
    return this.nome;
}
let bruno = retornaNomes.bind({nome: 'Bruno'});
console.log(bruno());
//

let bruna = 'Bruna';
console.log(bruna);
//

const retornaNomes2 = function() {
    return 'jose';
}
let jose = retornaNomes2();
console.log(jose);
//

// Arrow Functions

const helloWorld = function(){
    return "Hello World";
};
console.log(helloWorld())

const helloWorld2 = () => {return "Hello World 2"};
console.log(helloWorld2())

const helloWorld3 = () => "Hello World 3";
console.log(helloWorld3())

// Arrow Functions sem chaves:
const soma6 = (a,b) => a + b;
console.log(soma6(4,6));

// Arrow Functions sem parentes:
const soma5 = a => a;
console.log(soma5(4));

// Arrow Functions no Hoisting
//soma7(2,4)
const soma7 = (a,b) => a + b;
console.log(soma7(2,4));

