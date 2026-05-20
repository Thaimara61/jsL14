
let qtdAlunos = 10 
let qtdNotas = 3 
for(let i=1; i<=qtdAlunos; i++){
  
    let somaNotas = 0
    for(let j=1 ; j<=qtdNotas; j++){
        let nota = Number(prompt(`Digite a nota ${j} do aluno ${i}:`))
        somaNotas += nota
    }
   
    let media = somaNotas / qtdNotas
    console.log(`A média do aluno ${i} é: ${media.toFixed(2)}`)
}