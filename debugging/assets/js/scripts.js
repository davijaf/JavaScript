// Return plotara o resultado do algoritmo

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

//Throw tratará a função abaixo como erro, detalhando as propriedades do erro

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
console.log(verificaPalindromo2('ovo')); // caso o valor chamando nao seja uma string valida

// Try ...catch

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
    function tryCatchExemplo3(string3) {
        try {
            verificaPalindromo3(string3)
        }
        catch(e) {
            //throw e;
            console.log(e)
        }
    }
tryCatchExemplo3('ovo');

// Finally

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
            //throw e;
            console.log(e)
        }
        finally {
            console.log('A string enviada foi: ' + string4);
        }
    }
tryCatchExemplo2('ovo');

//ERROR

//new Error(message, fileName, lineNumber)
// todos os parâmetros são opcionais

//const MeuErro = new Error('Mensagem Inválida');
//throw MeuErro;

//const MeuErro2 = new Error('Mensagem Inválida');
//MeuErro2.name = 'InvalidMessage';
//throw MeuErro2;

const MeuErro3 = new Error('Mensagem Inválida');
MeuErro3.stack = 'InvalidMessage';
throw MeuErro3;