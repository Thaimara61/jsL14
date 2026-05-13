let numero= parseInt(prompt("Digite um número ou uma letra para encerrar: "))
let somaPares = 0
let quantidadeImpares = 0


while(!isNaN(numero)){

    if(numero%2 == 0){
        somaPares += numero*2
        console.log(`foi inserido um número par: ${numero} e a soma dos números pares é: ${somaPares}`) //adiciona o dobro do número par à soma dos pares
    }
    else{
        quantidadeImpares++ 
        console.log(`foi inserido um número ímpar: ${numero} e a quantidade de números ímpares digitados é: ${quantidadeImpares}`) //exibe o número ímpar digitado e a quantidade de números ímpares digitados
    }
    numero= parseInt(prompt("Digite um número ou uma letra para encerrar: "))
}
console.log(`Programa encerrado. Foi digitada uma palavra ou letra. A soma dos números pares é: ${somaPares} e a quantidade de números ímpares digitados é: ${quantidadeImpares}`)