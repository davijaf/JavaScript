/*Escopos Diferentes*/
var a = 1;
var b = 2;
console.log(a,b);
if (a === 1) {
    var a = 11;
    let b = 22;

    console.log(a,b);
}
console.log(a);
console.log(b);

/* Hoisting */
numberOne = 1;
console.log(numberOne + 2);
var numberOne;

let numberTwo;
numberTwo = 1;
console.log(numberTwo + 2);

var firstName = 'João';
var lastName = 'Souza';
if (firstName === 'João') {
    /*let lastName = "José"; Não permitido Reatribuir */ 
    var firstName = 'Pedro'; /*Permitido Redeclarar*/
    let lastName = 'Silva';
    lastName = 'Rodrigues'; /* Permitido Reatribuir */
    console.log(firstName, lastName);
}
console.log(firstName, lastName);

/*Constantes*/

/* const FIRST_NAME; Não permitido redeclarar */
const FIRST_NAME = 'Davi José';
/* const FIRST_NAME = 'Davi Jose'; Não permitido Reatribuir */ 
console.log(FIRST_NAME);
/* const FIRST_NAME = 'Sthephany'; Não permitido Hoisting */

/* Palindromo */
/* Solução 1 */
function verificaPalindromo(string) {
    if (!string) return 'String inexistente';

   return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ama"));

/* Solução 2 */
// omo
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

/* Subsitui Pares */
/* Input -> 1, 3, 4, 6, 80, 33, 23 ,90 */

/* var pares = [1, 3, 4, 6, 80, 33, 23 ,90] */

function substituiPares(pares) {
    if (!pares) return -1;
    if (!pares.length) return -1;
    for (let i = 0; i < pares.length; i++) {
        if (pares[i] === 0) {
            console.log('Você já e zero');
        } else if (pares[i] % 2 === 0) {
        console.log(`Substituindo ${pares[i]} por 0.`)
        pares[i] = 0;
        }
    }
    return console.log(pares)
}
let arr = [];
console.log(substituiPares(false));

const meuObjeto = {
    chave:valor,
   }
   
console.log(meuObjeto.chave); 
console.log(meuObjeto[chave]);
