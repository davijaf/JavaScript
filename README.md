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



