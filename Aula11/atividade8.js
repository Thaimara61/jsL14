let peso = (prompt("Digite seu peso:"))
let altura = (prompt("Digite sua altura:"))

let imc = peso / (altura * altura)

// if(imc<18.5){
//     console.log("Abaixo do peso")
// } else if(imc >= 18.5 && imc < 25){
//     console.log("Peso normal")
//  } else if(imc >= 25 && imc < 30){
//     console.log("Sobrepeso")
//  } else {
//     console.log("Obesidade")
//  }
if(imc >= 30){
    console.log("Seu IMC é " + imc.toFixed(2) + " - obesidade")
} else if(imc >= 25){
    console.log("Seu IMC é " + imc.toFixed(2) + " - sobrepeso")
} else if(imc >= 18.5){
    console.log("Seu IMC é " + imc.toFixed(2) + " - peso normal")
} else {
    console.log("Seu IMC é " + imc.toFixed(2) + " - abaixo do peso")
}
 
//aqui poderia ter criado uma variável para armazenar o resultado do imc.toFixed(2) e depois usar essa variável para imprimir o resultado, evitando a repetição do código.