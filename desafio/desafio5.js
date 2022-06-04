//Você recebe um inteiro n, o número de equipes em um torneio que tem regras estranhas:

//Se o número atual de equipes for par , cada equipe será emparelhada com outra equipe. Um total de n / 2 partidas são jogadas e n / 2 as equipes avançam para a próxima rodada.

//Se o número atual de equipes for ímpar , uma equipe avança aleatoriamente no torneio e o restante é emparelhado. Um total de (n - 1) / 2 partidas são jogadas e (n - 1) / 2 + 1as equipes avançam para a próxima rodada.

//Retorna o número de partidas jogadas no torneio até que um vencedor seja decidido.

//Exemplo 1

//Entrada 7
// 3 => 2 => 1
//Saída 6

//let lines = 7;
 
//var numberOfMatches = parseInt(lines.shift);
 
let n = 7;
let totalMatches = 0;
    while(n>1){
        let modPar = n%2;
        let sePar = n/2;
        let seImpar = (n-1)/2;
        if(modPar === 0){
          totalMatches = sePar + totalMatches;   
          n = n - sePar; 
        }else{
          totalMatches = seImpar + totalMatches; 
          n = n - seImpar;
        }
    }
print(totalMatches)
