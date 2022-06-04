function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao:\n 1 -Soma \n 2 - Substracao \n 3 - Multiplicação \n 4 - Divisão \n 5 - Resto \n 6 - Potenciação'));


    let res;

    if (operacao > 1 && operacao < 7) {
        let n1 = Number(prompt('Insira o valor de N1'));
        let n2 = Number(prompt('Insira o valor de N2'));
        if (!n1 && !n2) {
            alert('Parâmetros inválidos!')
            calculadora();
        }
        else {    
            /*if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisao();
            } else if (operacao == 5) {
                resto();
            } else if (operacao == 6) {
                potenciacao();
            }*/
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5:
                    resto();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
           
            function soma() {
                res = n1 + n2;
                alert(`${n1} + ${n2} = ${res}`);
                novaOp();
            }
            function subtracao() {
                res = n1 - n2;
                alert(`${n1} - ${n2} = ${res}`);
                novaOp();
            }
            function multiplicacao() {
                res = n1 * n2;
                alert(`${n1} x ${n2} = ${res}`);
                novaOp();
            }
            function divisao() {
                res = n1 / n2;
                alert(`${n1} / ${n2} = ${res}`);
                novaOp();
            }
            function resto() {
                res = n1 % n2;
                alert(`Resto de ${n1} / ${n2} = ${res}`);
                novaOp();
            }
            function potenciacao() {
                res = n1 ** n2;
                alert(`${n1}^${n2} = ${res}`);
                novaOp();
            }
            function novaOp() {
                let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim \n 2 - Não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('Digite uma opção válida!')
                    novaOp();
                }
            }      
        }

        
    

    } else {
        alert('Digite uma opção válida!')
        calculadora();
    }
}

calculadora();