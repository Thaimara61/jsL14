let numero = parseInt(prompt("Digite um número positivo: "))
let contador = 0
let somaPares = 0
let somaImpares= 0
 
    while(contador <= numero){
    if(contador%2 == 0){
     console.log(contador)
     somaPares += contador
     
    } else {somaImpares += contador 

    }
     contador++
    }

    console.log(`A soma dos números pares de 0 a ${numero} é: ${somaPares}`)
    console.log(`A soma dos números ímpares de 0 a ${numero} é: ${somaImpares}`)