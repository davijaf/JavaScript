// TODO: complete os espaços em branco com sua solução para o problema
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
let input = ([8000, 8001, 100, 200, 8002]);
//let qtdEntradas = parseInt(input);
let nivelEnergia;
function desafio(){
  for(let i = 0; i < input.length; i++){
      //input = [3, 8001, 100, 200];
    nivelEnergia = input[i];
    if(nivelEnergia >= 8001 && nivelEnergia <= 100000 && Number.isInteger(nivelEnergia)){
      console.log('Mais de 8000!');
    }else if(nivelEnergia >= 100 && nivelEnergia <= 8000 && Number.isInteger(nivelEnergia)){
        console.log('Inseto!');  
    }else {
    }
  }
}
desafio();