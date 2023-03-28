
const students = [
    
    {
        Name: "Thiago",
        Nota1: 7,
        Nota2: 8,
    },

    {
        Name: "Jéssica",
        Nota1: 7,
        Nota2: 5,
    },

    {
        Name: "Maria",
        Nota1: 7,
        Nota2: 4,
    },

    {
        Name: "Matheus",
        Nota1: 7,
        Nota2: 9,
    },


    {
        Name: "Rafaela",
        Nota1: 10,
        Nota2: 10,
    }
]

function media (Nota1, Nota2) {
    return ((Nota1 + Nota2)/2).toFixed(1);
}

function printResult (student) {
    if (media(student.Nota1, student.Nota2) >= 7) {
        return `A média do(a) aluno(a) ${student.Name} é: ${media(student.Nota1, student.Nota2)}
Parabéns ${student.Name}! Você foi aprovado(a) no concurso!`
    } else {
        return `A média do(a) aluno(a) ${student.Name} é: ${media(student.Nota1, student.Nota2)}
Não foi dessa vez, ${student.Name}! Tente Novamente!`
    }

}

for (let student of students) {
    let ResultMessage = printResult(student)
    alert(ResultMessage)
}
