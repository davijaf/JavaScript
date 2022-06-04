// tipos primitivos

//boolean

var VouF = false;
console.log(typeof(VouF));

// number

var numero = 1;
console.log(typeof(numero));

// string

var texto = "texto";
console.log(typeof(texto));

// declararaçao

var variavel;
console.log(variavel);
variavel = "Davi";
console.log(variavel);

let variavel2;
console.log(variavel2);
variavel2 = "Davi";
console.log(variavel2);

const variavel3 = "Davi";
// variavel3 = "Patricia";
console.log(variavel3);

// Escopo Local e Global
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();
//console.log(escopoLocalInterno); //Não mostra a variável let fora do bloco de códigos

// Atribuição/Comparacao/Comparaca Identica

var atribuicao = 'Davi';
var comparacao = '0' == 0;
console.log(comparacao);

var comparacaoid = '0' === 0;
console.log(comparacaoid); // Resultado Falso, pois um é string e outro number

// Operadores Aritiméticos
// Adição
var soma = 1 + 1;
console.log(soma);
// Subtração
var subtracao = 1 - 1;
console.log(subtracao);
// Multiplicacao
var mult = 2*2;
console.log(mult);
// Divisão
var div = 5 / 2;
console.log(div);
// Resto
var divint = 5 % 2;
console.log(divint);
// Potencição
var pot = 10 ** 2;
console.log(pot);

//Operadores Relacionais
var maiorque = 1 > 1;
console.log(maiorque);

var menorque = 1 > 0;
console.log(menorque);

var menorouigual = 1 <= 1;
console.log(menorouigual);

var maiorouigual = 1 >= 2;
console.log(maiorouigual);

// Operadores lógicos
var ou = 1 > 2 || 2 > 1;
console.log(ou);

var e = 1 > 2 && 2 > 1;
console.log(e);

var nao = !(1 > 2) && 2 > 1;
console.log(nao);

// Arrays e Objetc
// Possuem item e index
let array = ['string', 1, true, ['array1'], ['array2'], ['array3']];
console.log(array);
console.log(typeof(array[0]));
console.log(typeof(array[1]));
console.log(typeof(array[2]));
console.log(typeof(array[3]));

//forEach - imprime
array.forEach(function(index,item){
    console.log(index,item)
}
);

//push - adiciona
array.push('novoitem');
console.log(array);

//pop - remover
array.pop();
console.log(array);

//shift - remove no inicio
array.shift();
console.log(array);

//unshift - add no inicio
array.unshift('string');
console.log(array);

//indexOf - retorna o indice de um valor
console.log(array.indexOf(true));

//splice - remove ou substitui itens 
array.splice(0,2);
console.log(array);

//slice - retorna uma parte do array
let novoarray = array.slice(1,3)
console.log(novoarray);

// Objetos
let object = { string: 'davijose', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno2: 'objeto interno'}};
console.log(object);

console.log(object.boolean);
console.log(object.objectInterno);
console.log(object.objectInterno.objectInterno2);

// Desestruturação do objeto
var string = object.string;
console.log(string);

var arrayNovo = object.array;
console.log(arrayNovo);

// Outra forma de desestruturação do objeto
var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);

// Estruturas condicionais
var jogador1 = 0;
var jogador2 = 1;
var placar;

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
}
else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
}
else {
    console.log('Ninguém marcou ponto')
}

// Aninhamento de ifs

var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 != -1 && jogador2 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!')
    }
    else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!')
    }
    else {
        console.log('Ninguém marcou ponto')
    }
}

// If Ternario

var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores inválidos');
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
}
else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!');
}
else {
    console.log('Ninguém marcou ponto');
}

// Utilizando If

var jogador1 = 1;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores inválidos');

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2;
}
else if (jogador1 == 0 && jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
    placar = jogador2 > jogador1;
}
else {
    console.log('Ninguém marcou ponto')
}

// Switch/Case

switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou'); 
        break;
    default:
        console.log('Ninguém ganhou'); 
}

// For

var array2 = ['valor1','valor2','valor3','valor4'];
for (let i=0; i < array2.length ; i++)  {
    console.log(i);
}

var array3 = ['valor1','valor2','valor3','valor4' ,'valor5','valor6'];
let object2 = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3:'valor3'}
for (let indice =0; indice < array3.length ; indice++)  {
    console.log(array3[indice]);
}

// For/in

var array4 = ['valor1','valor2','valor3','valor4'];
for (i in object2) {
    console.log(i);
}

var array4 = ['valor1','valor2','valor3','valor4'];
for (i in array4) {
    console.log(i);
}

// For/of
for (i of array4) {
    console.log(i);
}

for (i of object2.propriedade1) {
    console.log(i);
}

// While

var a = 0
while (a < 10) {
    a++
    console.log(a)
}

// Do/While

var x1 = 0
do {
    x1++;
    console.log(x1);
}    
while (x1 < 10)
