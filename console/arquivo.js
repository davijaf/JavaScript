console.log('Hello World!')


//declarando a função:
function returnEvenValues(array) {
// função receberá uma lista (arry) de números
// lista auxiliar evenNums com array vazio
    let evenNums = [];
// declarar a variável i, enquanto i for menor que tamanho da lista. 
    for(let i = 0; i < array.length; i++) {
// se a lista array resto igual a zero
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('os número pares :',evenNums);
}

let array = [1, 2, 4, 5, 7 , 8]


//chamando a função
returnEvenValues(array);
