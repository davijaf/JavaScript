function comparar() {
    num1 = Number(prompt("Digite o número 1:"));
    num2 = Number(prompt("Digite o número 2:"));
    num3 = num1 + num2;
    
    (num1 == num2) ? iguais = '' : compare = 'nao';
    (num3 >= 10) ? maior10 = 'maior' : maior10 = 'menor' ;
    (num3 <= 20) ? menor20 = 'menor' : menor20 = 'maior';

    resposta = `Os números ${num1} e ${num2} ${iguais} são iguais. Sua soma é ${num3}, que é ${maior10} que 10 e ${menor20} que 20.`;
    alert(resposta);
}
comparar();
/*
function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}
function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}
function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}
console.log(comparaNumeros(10, 10)); */