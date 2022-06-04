// Atividade 1

const alunos = [
    {
        id: 0,
        nome: 'João',
        nota: 8,
        turma: '1B',
        idade: 10,
    },
    {
        id: 1,
        nome: 'Pedro',
        nota: 6,
        turma: '2A',
        idade: 9,
    },
    {
        id: 2,
        nome: 'Maria',
        nota: 8,
        turma: '3A',
        idade: 8,
    },
]

function alunosAprovados(arr, media) {
    //arr = 
    //media = 
    let alunoAprovado = [];
    for(i=0; i < arr.length; i++) {
        const {nota, nome} = arr[i];
        if (nota >= media) {
            alunoAprovado.push(nome);
        }
    }
    return alunoAprovado;
}
console.log(alunosAprovados(alunos,7));

// Atividade 2


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Davi',
    idade: 35
}

const pessoa2 = {
    nome: 'Danilo',
    idade: 32
}

const pessoa3 = {
    nome: 'Patricia',
    idade: 36
}

console.log(calculaIdade.apply(pessoa2, [4]));
