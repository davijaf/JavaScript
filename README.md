# JavaScript (JS)

Introdução ao Javascript

## O QUE É JAVASCRIPT
### História
* Linguagem interpretada - executada em tempo real;
* Diferente de linguagem compilada (código de máquina);
* Baseada em Protótipos - Fornece herança, os objetos podem ter um objeto de protótipo, que atua como um objeto de modelo do qual herda métodos e propriedades;
* Multiparadigma - junção de mais de um paradigma para melhor atender as necessidades do programador.  
*Exemplos de paradigmas de programação são a Programação orientada a objetos, Programação Estruturada e a Programação Imperativa.*
*Alguns exemplos de linguagens de programação multiparadigma são C++, Groovy, Oz, Ruby ,Scala , Swift ,Lua (linguagem de programação) e Python*
* Web Client Side - Interação com usuário nos browsers
* ECMAScript - Padronização de linguagens/JavaSript segue esta padronização

### Evolução
* Javascript - Criado em 1995;
* ECMAScript 1 - 1997 - JS aderiu à padronização;
* ECMAScript 2 - 1998 - Apenas alterações editoriais;
* ECMAScript 3 - 1999 - Expressões Regulares e Try/Catch (Tratar erros);
* ECMAScript 4 - 1999 - Não foi lançado;
* ECMAScript 5 - 2009 - 
    * Suporte ao JSON;
    * "strict mode";
    * String.trim();
    * Array.isArray();
    * Array Iteration Methods.
* ECMAScript 6 - 2015
    * Várias atualizações para JS;
    * Sendo: Syntax, Bindings, Functions.
* ECMAScript 2021
    * ECMA-262 (ES2021);
    * Logical Assignment Operators
    * String.prototype.replaceAll()
    * Promise.any()
    * WeakRefs
    * Underscores (_) como separadores em number literals e em bigint literals

### Aplicações

    * Web;
    * Mobile;
    * Smartwatches;
    * Games;
    * Internet of Things (Rotinas para Alexa utilizando Node.JS no server side);
    * APIs.

## OBJETIVOS

* Sintaxe da Linguagem;
* Diferenças entre Variável e Constante;
* Comentar o código

### Manipulando um arquivo JS

* Variável e Constante;

a*x + b = 0
a e b = constantes
x = variável

## CONSOLE

### Console na WEB

Pode utilizar o console no Browser

### Console no terminal;

NODE.JS
https://nodejs.org/en/download/
*Durante instalação Windows manter selecionado PATH*

No VSCode basta abrir o terminal e acionar o node.
Ex.: node .\arquivo.js

console.log('Hello World!')
*Printar resposta no console utilizando comando acima*

## JAVASCRIPT NA WEB

### Estrutura de Projeto

Index.html > Emmet > HTML:5

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- Linha abaixo informa que o HTML executará em escala 100% na tela do celular -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
<!-- importar o CSS -->
    <link rel="stylesheet" href="assets/css/styles.css"/>
<!-- Importar JS -->
    <script src="assets/js/scripts.js"></script>
    <title>teste</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
</body>
</html>

### DOM

* Document Object Model;
* Estrutura dos elementos dentro da janela.

* Árvore de dependências:
> Window    > History
            > Location
            > Document  > Heading level 1   > Text Node
                        > Paragraph         > Text Node
                        > Paragraph         > Form  > Input [type=text]
                        > Paragraph         > Input [type=submit]
                        > Paragraph         > Anchor > Text Node
                        > Heading level 2   > Text Node
                        > Anchor            > Text Node

console.log('Hello World!')
// document.getElementsByTagName('h1')
// var heading1 = document.getElementsByTagName('h1')[0]
// heading1
// heading1.style.color = 'red'

## Prática

### Criando um contador

Contador
Neste projeto, iremos fazer a nossa primeira integração de um código Javascript com uma página HTML.

Desafio:

Tente implementar os eventos usando o método addEventListener.
Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.
Bons estudos!
Não esqueça de publicar a sua versão do projeto no seu Github também! 😄


# Framewokrs e Bibliotecas

Principais Frameworks:

* **VueJS;**
* Angular;
* **React;** (Biblioteca)
* jQuery.

*São ferramentas desenvolvidas para agilizar o desenvolvimento em JavaScript.*

# Rotinas do desenvolvedor

Portais para consultar dúvidas:
* MDN web docs;
* W3C;
* **stackoverflow;**
* YouTube;
* GitHub;
* Twitter;
* Linkedin.

# Sintaxe

* Sintaxe JavaScript;
* Variáveis e valores;
* Vetores e objetos;
* Estruturas condicionais - decisão e repetição/iteração 
* Funções
* Apronfundando

## Sintaxe do Javascript

Linguagem de alto nível;
* Criada em 1995;
* Brendan Eich;
* Evolução nomes: Mocha > LiveScript > JavaScript (Jogada de Marketing).

Função Web:
* HTML - Estrutura
* CSS - Design
* JavaScript - Interativa

*Facilidades - Extensão Live Server in VSCode*

## Variáveis e valores

* 1- Tipos JS;
* 2 - Variáveis e declarações;
* 3 - Atribuir e comparar;
* 4 - Operadores aritméticos, relacionais e lógicos.

## Tipagem

**Declaração de modo dinâmico**

var numero = "1"; (String)
var numero = 1; (Number)

Dados possíveis de guardar :
* Boolean;
* null;
* undefined;
* number;
* string;
* array;
* objetc;
* function.

### Declaração de variáveis:
**Guardar Valores**

* VAR - escopo global e local, pode ser alterada;
* LET - escopo local de bloco, pode ser alterada;
* CONST - escopo local de bloco, somente leitura;

### Escopo

* Escopo global - visível em todo o código;
* Escopo local - visível em um bloco ou todo código;

### Regras p/ Variáveis

* Iniciar com letras ou _ ou $;
* Não utilizar espacos;
* Não utilizar palavras reservadas;
* Declarar as variáveis no topo.

## Diferenças atribuições, comparação e comparação indêntica

* Igualdade "=" - atribuição;
* Comparação "==" - comparação;
* Comparação identica - "===" - compara tipo e conteudo.

## Operadores Aritméticos

* + adição;
* - substração;
* * multiplicação;
* / divisão real;
* % divisão inteira (resto); 
* ** potenciação.

## Operadores Relacionais

* **>** - maior que;
* **<** - menor que;
* **<=** - menor igual a;
* **>=** - maior igual a.

## Operadores Lógicos

* && - 'e' - consideram valores 'true';
* || - 'ou' - considera qualque valor 'true';
* ! - 'não' - inverte o valor 'true' para 'false' e 'false' para 'true'.

## Vetores (Arrays) ou Objetos

### Arrays
**Vetores são uma lista, ou matriz de variáveis.**
Ex.: let array = ['string', 1 , true];

* Declarado entre colchetes;
* Guardar qualquer valor ou outros arrays;
Ex.: let array ['string1',1,true,false,['array1],['array2]];

* O índice é acessado por número inteiro, onde 0 é o primeiro índice;
* Cada índice é separado por vígula.

### Manipulando Arrays

* forEach() - itera um array;
* push() - add item no final do array;
* pop() - remove item no final do array;
* shift() - remove item no início do array;
* unshift() - add item no início do array;
* indexOf() - retorna o índice de um valor;
* splice() -  remove ou substitui um item pelo índice;
* slice() - retorna uma parte de um array existente.

### Objetos

* Propriedades e valores
* Declarada {}
* Ex.:
var xicara {
    cor: 'azul',
    tamanho: 'p',
    funcao: tomarcafe()
}

* Manipulando objetos: atribuindo valores à várias variáveis
var xicara { cor: 'azul', tamanho: 'p', funcao: tomarcafe()}
var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarcafe();

* Desestruturando objetos
var xicara { cor: 'azul', tamanho: 'p', funcao: tomarcafe()}
var {cor, tamanho, funcao} = xicara;

## Estruturas Condicionais

* Instruções para executar tarefas de decisão ou repetição;

Ex.: placar de jogo

### If

var jogador1 = 1;
var jogador2 = 0;
var placar;

**if (jogador1 > 0)** {
    console.log('Jogador 1 marcou ponto!')
}

### Else

var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
}
if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
}
**else** {
    console.log('Ninguém marcou ponto')
}

### Aninhamento de ifs

var jogador1 = -1;
var jogador2 = 0;
var placar;

**if (jogador1 != -1)** {
    **if (jogador1 > 0)** {
        console.log('Jogador 1 marcou ponto!')
    }
    if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!')
    }
    else {
        console.log('Ninguém marcou ponto')
    }
}

### If Ternário


// If Ternario

var jogador1 = 0;
var jogador2 = 0;
var placar;

**jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :**
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

### Switch / Case

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

## Laços de repetição

* For;
* For/in;
* For/of;
* While;
* Do/While.

### For
* Instrução de repetição até que a condição seja falsa

for([expressãoinicial];[condicao];[incremento]) {
    declaracao    
}
**Ex.:**
var = array ['valor1','valor2','valor3','valor4']
for (let i=0; i<array.lenght ; i++)  {
    console.log(i)
}

### For/In

* Repetição à partir de uma propriedade

for ([indice] in [objeto ou array]) {
    declaracao
}

Ex.: var array ['valor1','valor2','valor3','valor4'];
for (i in array) {
    console.log(i);
}

### For/of

* Repetição à partir de um valor:

for ([indice] of [array]) {
    declaracao
}

Ex.: var array ['valor1','valor2','valor3','valor4'];
for (i of array) {
    console.log(i);
}

### While

* Executa uma repetição enquanto a condição for verdadeira

a = 0
while (a < 10) {
    a++
    console.log(a)
}

### Do/While

* Executa uma instrução enquanto a condição for verdadeira

var x1 = 0
do {
    x1++;
    console.log(x1);
}    
while (x1 < 10)

# Funções

* O que são?;
* Declarar ;
* Parâmetros;
* Declarações

## Introdução

**Blocos de comandos e instruções para execução de tarefas**

Ex.: function nomeDaFunca() {
    ${instrucao};
}
nomedaFuncao();

## Declaração

Ex.: function nomeDaFunca() {
    console.log('Hello World');
}
nomedaFuncao();

* () - indica que é um objeto do tipo function;
* {} - indica que é um bloco de instrução.

## Parâmetros

Ex.: function nomeDaFunca(parametro) {
    ${instrucao};
}
nomedaFuncao(Valorparametro);

## Expressões

**São funções atruídas à expressões.

Ex.: var funcao = function nomeDaFuncao() {
    ${instrucao};
}

Ex.: var funcao = function() {
    ${instrucao};
}

## Arrow Function

**Funções de expressão de sintaxe curta**
* São anônimas;
* Não nomeadas;
* () => {}

ex.: var funcao = () => {
    ${instrucao};
}

## Exercício de Funcoes Aritmeticas

* Number() - Converter valores em número;
* Prompt() - registrar entradas;
* Alert() - Mostrar msg usuário;
* Template Strings - usar strings com expressões.

# Operadores

* Principais operadores para manipular valores no código;

**Tipos de operadores:**
* Aritmética;
* Atribuição;
* Comparação;
* Lógica;
* Condicional.

## Operadores de Atribuição

* Operadores: 
* "=" => x = y; (Atribui valor)
* "+=" => x += y => x = x + y; (Soma)
* "* =" => x*= y => x=x*y;  (Mult)
* "/=" => x /= y => x = x/y; (Divisão)
* "%=" => x%=y => x = x%y. (Resto)

## Operadores Aritméticos:

* + Adição;
* - Subtração;
* * Multiplicação;
* ** Exponencial;
* / Divisão;
* % Módulo;
* ++ Incrementear;
* -- Decrementar.

## Operadores de Comparação:

* == Igual;
* === Mesmo valor e tipo;
* != Diferente;
* !== Valor e tipos diferentes;
* Maior que > ;
* Menor que < ;
* Maior igual > ;
* Menor igual < ;


## Lógica:

* && - e;
* - ou;
* ! - não.

## Condicional (ternário)

Comercialmente mais utilizado que if else: condition ? expression1 :  expression2;
                                        (true)          (false)
if (condition)
    statement;
eslse
    statement;

# Valores e Variáveis

* Atribuindo valores;
* Tipos;
* Variáveis;
* Costantes;
* var, const e let.

## Atribuição de valores

* Case Type -  Examples
* Original Variable as String   - some awesome var;
* Camel Case                    - someAwesomeVar;
* Snake Case                    - some_awesome_var;
* Kebab Case                    - some-awesome-var;
* Pascal Case                   - SomeAwesomeVar;
* Upper Case Snake Case         - SOME_AWESOME_VAR; (Utilizado em constantes)

## Var e Let

**Let representa o escopo do bloco pertencente**
 Ex.: 

 var a = 1;
 var b = 2;

 if (a === 1) {
     var a = 11;
     let b = 22;

     console.log(a);
     console.log(b);
 }
cconsole.log(a);
console.log(b);
 
 ## Var e Let

 * Escopos Diferentes   - var é global e let é reservada ao bloco;
 * Hoisting             - atribuir valor antes de declarar a variável;
 * Redeclaração         - apenas no var;
 * Reatribuição         - as duas aceitam reatribuir, substitui o valor por outro.

## Constantes

* Declarada em SNAKE_UPPER_CASE;
* Escopo de bloco;
* Não faz hoisting.

### var, let, e const
 X,         var,     const,  let
escopo      global,  bloco,  bloco.
redeclarar  sim,     não,    não.
reatribuir  sim,     não,    sim.
hoisting    sim,     não,    não.

## Tipos

### Estrutura de Dados

* Principais estruturas de dados do JS e métodos;
* Tipagem dinâmica;
* Dados Primitivos (Números, Strings, Boolean, null, undefined); 
* Dados Complexos/Compostos (Objects, Arrays);

### Strings

* Textos;
* Declaradas com aspas ou crases.
* Declarada com acento grave (crase) `pode inserir valor de variável com ${variavel}`;
* Concatenação;
* Propriedade lenght;
* Iterabilidade;

### Numbers

* Inteiros ou Decimais;
*  Função Math

### Booleans

* True;
* False;
* Resulta de operadores de comparação;
* ! Contrário.

### Arrays (Vetores)

* Lista iteraveis de elementos;
* let array = [] (declaração);

### Objetos

* Estrutura Chave e Valor;
* Biblioteca Object
* Declaração com {}
Ex.: let obj = {};

let person = {
    name: 'John',
    age: 20
};

### Empty , null e undefined

* Empty     - variável foi declarada sem valor;
* Null      - variável foi declarada sem definição
* Undifined - não declarou a variavel 

## Palíndromo

* Conceito: Frase similar de trás para frente
Ex.: Roma me tem amor

/* Solução 1 */
function verificaPalindromo(string) {
    if (!string) return 'String inexistente';

   return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ama"));


/* Solução 2 */
function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('teste');

# Funções

* Declarar funcoes;
* Manipular Parâmetros;
* Loops;
* Argumento 'This';
* Arrow Functions.

## Tipologia

* Estrutura de uma função;
* Tipos de função;
* Aplicação.

### Estrutura

function nome(parametros) {
    // instruções
}
** Variáveis dentro da função são acessadas apenas dentro deste escopo: LET, CONST ou VAR.

** Return para a função e retonar o valor após ele

Ex.:
function nome(parametros) {
    // instruções
    return;
}

### Função anônima

* Variável pode armazenar uma função;

const soma =  function nome(a,b) {
    return a + b;
}
console.log(soma(1,2)); // 3
console.log(soma(5,4)); // 9

### Função autoinvocável (IIFE)
* Immeadiately Invoked Function Expression

* Uma função anônima, entre parênteses, seguida por outro par de (), que representa sua chamada

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

### Callbacks

* Função passada como argumento para outra função;

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

### Parâmetros

* Valores padrão

**Parametros antes de atualizacao ES2015**
function exponencial(array, num) {
    if (num === undefined) {
        num = 1;
    }
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    } 
    console.log(result);
    return result;
}
exponencial([1,2,3,4])
exponencial([1,2,3,4],2)

**Parametros após atualizacao ES2015**
function exponencial(array, num = 1) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    } 
    console.log(result);
    return result;
}
exponencial([1,2,3,4])
exponencial([1,2,3,4],2)

### Objeto arguments
**Array com todos os parâmetros passados para a função invocada**

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

## Arrays

### Spread ...

* Lidar com elementos separados do arrary utilizando 3 pontos;

function sum(x, y , z) {
    return x + y + z
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

### Rest ...

* Combina os argumentos em um array;

function confereTamanho(...args) {
    console.log(args.length)
    console.log(args)
}
confereTamanho(); //0;
confereTamanho(1,2); //2;
confereTamanho(3,4,5); //3;

## Objetos

### Object Destructuring

* Entre chaves {}, podemos filtrar apenas os dados que nos interessam do objeto;

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

## Loops

### If/Else

* if(condição) { resultado para condição verdadeira; } else {resultado para condição falsa; }

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
 
* Javascript não tem elseif, são espaçados.

### Switch/case

* Para muitas verificações;
* Equivale uma comparação de tipo e valor (===);
* Necessita de um valor default;

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

### For

* Loop dentro de elementos iteráveis (arrays, strings);

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i=0; i<arr.length; i++) {
        multiplicados.push(arr[i]*2);
    }
    return multiplicados;
}
const meusNumeros = [2, 33, 456, 356, 40];
console.log(multiplicaPorDois(meusNumeros));
// [4, 66, 912, 712, 80]

### For...in

* Loops entre propriedades enumeráveis de um objeto;

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

### For...of

* Loop entre estruturas interáveis (arryas, strings).

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

### While...Do
* Executa instruções até condição se tornar falsa;

function exemploWhille() {
    let num = 0
    while(num <= 5) {
        console.log(num)
        num++;
    } 
}
exemploWhille();

### Do...While
* Executa instruções até condição se tornar falsa;
* Porem a primeira execução sempre ocorre;


function exemploDoWhille() {
    let num = 6
    do {
        console.log(num);
        num++;  
    } while(num <= 6)
}
exemploDoWhille()

## This

* Referência para o contexto que está inserio;
* Seu valor pode mudar de acordo com o lugar no código onde foi chamada;
Contexto        Referência
Objeto          Próprio objeto
Sozinha         Objeto Global(nav e window)
Função          Objeto Global
Evento          Elemento que recebeu o evento

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

### This in the places

*nanvegador - carrega propriedados do botão
  <button
        id="my-btn"
        onclick="console.log(this)"
    >click me!</button>

* console

console.log(this);
// na função
(function() {
    console.log(this);
}) ();
 
* no objeto
const pessoa4 = {
    firstName2: 'Davi',
    lastName2: 'José',
    getFullName: function() {
        return this.firstName2 + " " + this.lastName2;
    }
};
console.log(pessoa4.getFullName());

### Call - Manipulando valor de This


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

* Passar parâmetros para função com o Call

const myObj = {
    num1: 2,
    num2: 4
};
function soma3(a,b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma3.call(myObj,1,5)

### Apply  - Manipulando valor de This

* Apply passa os argumentos dentro de um array
* Função parecida com a CALL

const pessoa = {
    nome: 'Davi',
};
const animal = {
    nome: 'Godi',
};
function getSomething() {
    console.log(this.nome);
}
getSomething.apply(pessoa);

### Bind  - Manipulando valor de This

* Clona a estrutura da função onde é chamada e aplica o valor do objeto passado com parâmetro;

const retornaNomes = function() {
    return this.nome;
}
let bruno = retornaNomes.bind({nome: 'Bruno'});
console.log(bruno());

## Arrow Functions =>

* 1 - Apresentar a sintaxe de arrow functions;
* Sintaxe:

const helloWorld = function(){
    return "Hello World";
};
console.log(helloWorld())

const helloWorld2 = () => {return "Hello World 2"};
console.log(helloWorld2())

const helloWorld3 = () => "Hello World 3";
console.log(helloWorld3())

* Caso exista alguma linha, pode dispensar as chaves e o return;

const.soma = (a,b) => a + b;
soma(4,6);
* Caso exista apenas um parãmetro, pode dispensar os parênteses;

const soma = a => a;
soma(4);

* Arrow Functios não faz Hoisting
//soma7(2,4)
const soma7 = (a,b) => a + b;
console.log(soma7(2,4));

### Outras restrições

* 'This' sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
* Não existe o objeto 'arguments';
* O construtor (ex.: MeuObjeto()) também não pode ser utilizado.

# Debugging e Error Handling

## Tipos de erro
* 1 - ECMAscript
* 2 - DOMexception

### ECMAScript

* Erros que ocorrem em tempo de execução, elementas que compõe o ECMAScript
* Mensagem
* Nome
* Linha
* Call Stack - pilhas de chamada, até chegar no erro

**Alguma variável não declarada ou falta de sintaxe(falta de algum elemento: ;, (), :, =)**

### DOMException

* DOM  - Document Object Model (The World Wide Web Consortium (W3C));
* Representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web;
* Erros relacionados ao DOM rodando na pagina da WEB;
* Erros na estrutura de elementos de uma página da WEB.

## Tratando erros

* 1 Trhow e return;
* 2 Try e catch.

### Throw

* Diferença do throw e return;
* Palavras reservadas no JS;
* Apresentar a implementação da declaração try/catch

function verificaPalindromo(string) {
    if (typeof string === 'string') { 
        if (string === string.split('').reverse().join('')) {
            return "é palindromo";
        }
        else {
            return "Não é palindromo";
        }
        }
    else {
        return "String inválida";
    }
}
console.log(verificaPalindromo(2));
* Return retorna a string;

function verificaPalindromo2(string2) {
    if (typeof string2 === 'string') { 
        if (string2 === string2.split('').reverse().join('')) {
            return "é palindromo";
        }
        else {
            return "Não é palindromo";
        }
        }
    else {
        throw "String inválida";
    }
}
console.log(verificaPalindromo2(2));

**Utilizando o THROW printa um erro e detalha o mesmo**
* Com base no código acima o resultado printado necessita de instruir um objeto de erro;      
Uncaught String inválida
verificaPalindromo2 @ scripts.js:28
(anônimo) @ scripts.js:31

### Try...catch

* Tratamento de erros;
* Try***catch, é uma verificação dentro do bloco try para o código e será tratado na funução catch;
* Possível manipular o erro dentro do catch;

function verificaPalindromo3(string3) {
    if (typeof string3 === 'string') { 
        if (string3 === string3.split('').reverse().join('')) {
            throw "é palindromo";
        }
        else {
            throw "não é palindromo";
        }
    }
    else { 
        throw "String inválida";
    }
}
    function tryCatchExemplo(string3) {
        try {
            verificaPalindromo3(string3)
        }
        catch(e) {
            throw e;
            //console.log(e)
        }
    }
tryCatchExemplo(0);

### Finally

* Instrução chamada independente se erro ou não;
* Finally sempre será executado;
* Pode ser considerado ou não no código.

function verificaPalindromo4(string4) {
    if (typeof string4 === 'string') { 
        if (string4 === string4.split('').reverse().join('')) {
            throw "é palindromo";
        }
        else {
            throw "não é palindromo";
        }
    }
    else { 
        throw "String inválida";
    }
}
    function tryCatchExemplo2(string4) {
        try {
            verificaPalindromo4(string4)
        }
        catch(e) {
            throw e;
            console.log(e)
        }
        finally {
            console.log('A string enviada foi: ' + string4);
        }
    }
tryCatchExemplo2('ovo');

### Criando erros personalizadas

* Objeto ERROR;
* Adicionar propriedaes e parâmetros no ERRO:

new Error(messagem, fileName, lineNumber)
// todos os parâmetros são opcionais

const MeuErro = new Error('Mensagem Inválida');
throw Meurro;

Uncaught Error: Mensagem Inválida
    at scripts.js:95:17

* Erro pode receber um nome:


const MeuErro2 = new Error('Mensagem Inválida');
MeuErro2.name = 'InvalidMessage';
throw MeuErro2;

Uncaught InvalidMessage: Mensagem Inválida
    at http://127.0.0.1:5500/JavaScript/debugging/assets/js/scripts.js:98:18

* Erro pode receber a função Stack;
* Declara o número da linha com erro;
* Pilha irá dizer oque ocorreu:

const MeuErro3 = new Error('Mensagem Inválida');
MeuErro3.stack = 'InvalidMessage';
throw MeuErro3;

Uncaught InvalidMessage
(anônimo) @ scripts.js:102

# JavaScript Assíncrono

* 1. Explicar o conceito de assinconicidade;
* 2. Apresentar Promise;
* 3. Ensinar como fazer requisições APIs

## Assincronicidade

* 1 Oque são promisse
* 2 Assync
* 3 Wait

* Tudo é realizado no mesmo instante no JS;
* Diferente de sincronicidade;
* O padrão no JS é executar de forma síncrona;

###  Promise

* Podemos executar funções de maneira assíncrona utilizando no JS
* Dado recebido sem valor e em outro momento o resultado será recebido ou rejeitado
* Estados da Promise são 3 :
* 1. Pending;
* 2. Fulfilled;
* 3. Rejected.

* Estrutura

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida'));
    }, 2000);
});

* Promises and  await

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve('Resolvida');
    }, 2000);
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

* Promises // Try..catch

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });
let result;
    
    try {
    result = await myPromise
        .then((result) => console.log(result + ' passando pelo then'))
        .then((result) => console.log(result + ' e agora acabou!'))
    }    
    catch(err) {
        result = err.message;
    }
   // console.log(resolved);
    return resolved;
}

resolvePromise()

## Consumindo APIs

* 1. Explicar oque são APIs;
* 2. Lidar com requisição APIs;
* 3. Métopdo fetch().

### 1. Explicar oque são APIs;

* Apllication Programming Interface;
* Intermediar os resultados do back-end com apresentado no front-end;
* Acesso via urls.

* JSON - Javascript Object Notation;
* Habitualmente APIs retornam seus dados em formato .json;
* Necessário tratar os dados recebidos.

### Método fetch

* Model:

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

* Operação no banco (POST, GET, PUT, DELETE, etc)

* Examples:

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(response => console.log(json))
// retorna uma Promise

fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringfy(data)
})
    .then(response => response.json())
    .then(response => console.log(json))
//retorna uma Promise


# Orientação à Objetos

* 1 - Introdução
* 2 - Objetos no Javascript

## Paradigmas e Pilares

* 1 Paradigmas da programação;
* 2 Pilares da Orientação a Objetos.

* Orientação à objetos é um tipo de paradigmas imperativo;
* Orientar como serão chamadas e ordem;
* Paradigmas são as formas de programar;
* Objetos tem 4 pilares:
- Herança;
- Polimorfismo;
- Encapsulamento;
- Abstração.

* Pilares: Abstração
* Processo mental para isolar aspecto determinados de um estado de coisas complexas;
* Objetivo de simplificar a avaliação, classificação ou permitir a comunicação.
* Simplicar e generalizar.

* Pilares: herança
* O objetoc filho herda propriedades dos objetos pais;
* Havendo nos filhos propriedades particulares.

* Pilares: Encapsulamento
* Cada classe tem propriedades e métodos independentes do restante do código.

* Pilares: Polimorfismo
* Objetos podem herdar a mesma classe pai, mas se comporta de forma diferente quando invocamos seus métodos.

## OOJS - Object-oriented JavaScript

* 1 Conceito de protótipos
* 2 Estrutura de classes em JavaScript

### Protótipos
* São esqueletos de todos objetos;
* Todos os objetos Javascript herdam propriedades e métodos de um prototype;
* O objeto Object.prototype está no topo desta cadeia.

Examples:
const objeto = {}
undefined
objeto
{}
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

const array = []
undefined
array
[]
length: 0
[[Prototype]]: Array(0)
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
[[Prototype]]: Object

### Classes
* Classes não existem nativamente;
* Syntatic sugar: uma sintaxe feita para facilitar a escrita;
* Todas as classe são **objetos** e a herança se dá por **protótipos**

class Animal {
    constructor(type = 'animal') {
        this.type = type
    }
    get type() {
        return this._type
    }
    set type(val) {
        this._type = val.toUpperCase()
    }
    
    makeSound() {
        console.log('Making animal sound')
    }
}

let a = new Animal()
console.log(a.type)

class Cat extends Animal {
    constructor() {
        super('cat')
    }
    makeSound(){
        super.makeSound()
        console.log('Meow!')
    }
}

let b = new Cat()
console.log(b.type)

* constructor - contrauirá a classe;
* get and set - acessar parâmetros e propriedades, necessário setar e get determina o valor;
* super - Enviar para função pai os parâmetros do filho, utilizando a propriedades do construtor da classe pai. Passa os argumentos enviados para classe ascendente
* método - Ex.: makeSound / posso sobrescrever o método no filho diferente do método pai.

# D.O.M

* 1 Definição de DOM;
* 2 DOM vs BOM;
* 3 Manipular elementos do DOM através do JS.

## Definição

* DOM - Document Object Model;
* Acessar e modificar os elementos HTML de uma página;
* DOM está dentro do windows, ou seja, pertence ao BOM.

* BOM - Browser Object Model
* Tudo que está dentro do objeto window.

## Manipulando elementos no DOM (Métodos)

Estrutura HTML: TAG, ID, CLASSE
ID são títulos únicos;
CLASS identificadores compartilhados;

### Consultar

document.getElementById('titulo');
document.getElementsByTagName('li');
document.getElementsByClassName('textos');
document.querySelectorAll('.primeira-classe'); - . para identificar a busca de uma classe
document.querySelectorAll('#titulo');          - # para identificar a busca de um ID

### Adicionar e Deletar

document.createElement(element) // Cria um novo elemento HTML;
document.removeChild(element) // Remove o elemento;
document.appendChild(element) // Adicionar um elemento;
document.replaceChild(new, old) // Substituir um elemento.

## Estilos

* Manipular estilos de componentes HTML;

### Element.classList

* Representa a lista de classes do elemento;
* Cada elemento possuir seu inner html;

const meuElemento = document.getElementById('meu-elemento')

meuElemento.classList.add('novo-estilo');

meuElemento.classList.remove('classe');

meuElemento.classList.toggle('dark-mode')

### CSS

document.getElementsByTagName("h1")[0].style.color = "green"

document.getElementsByTagName("h2")[0].style.color = "blue"

## Eventos

* 1. Ação do usuário com elementos da página
* 2. Comumente utilizados

* Eventos de Mouse
* Mouse over;
* Mouse out.

* Eventos de clique
* click;
* dbclick.

* Eventos de atualização
* change;
* load.

### Acionar Eventos

* Função event listener
* Cria um evento que vai ser acionado no  mmomento em que o usuário realizar determinada ação.

const botao = document.getElementById('meuBotao');
botao.addEventListener('click', outraFuncao);

### Atributo HTML

* Especifica a função a ser chamada diretamento no elemento HTML;

<h1 onclick="mudaTexto(this)" id="titulo">Minha página</h1>
<script>
function mudaTexto(id) { 
    id.innerHTML = "Mudei!"; 
    }
</script>
