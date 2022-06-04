function meusErros(arr,num) {
    if (!arr && !num) {
        const MeuErro = new ReferenceError('Parâmetros Não Enviados!');
        throw MeuErro;
    }
    else if (!Array.isArray(arr)) {
        const MeuErro2 = new TypeError('Arr não é objeto!');
        throw MeuErro2;
    }
    else if (num === arr.length) {
    return arr;
    }
    else {
        const MeuErro2 = new RangeError('Tamanho do array diferente do parâmetro enviado');
        throw MeuErro2;
    }
}
//console.log(meusErros(arr,num));

function tryCatchErros(arr,num) {
    try {
        console.log(meusErros(arr,num))
    }
    catch(e) {
        if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
    }
}
tryCatchErros([2],2);
