
let numero = parseInt(prompt("Digite um número: "))
let paresDivisiveisPor5 = 0

for(let i= numero; i>=0; i--){
    console.log(i)


    if(i%2==0 && i%5==0){
   
        paresDivisiveisPor5+=1
        console.log(`o número ${i} é divisivel por 2 e 5`)
    }
}

console.log(`No intervalo de ${numero} e 0 existem ${paresDivisiveisPor5} números divisíveis por 2 e 5 ao mesmo tempo.`)