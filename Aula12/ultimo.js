let etiqueta = prompt("Digite uma cor").toLowerCase()

while(
    etiqueta != "verde" &&
    etiqueta != "amarelo" &&
    etiqueta != "azul" &&
    etiqueta != "vermelho"
){

    console.log("Cor inválida")

    etiqueta = prompt(`Digite uma cor válida: verde, amarelo, azul e vermelho`).toLowerCase()
}

switch(etiqueta){

    case 'verde':
        console.log("Você escolheu verde")
        break

    case 'amarelo':
        console.log("Você escolheu amarelo")
        break    

    case 'azul':
        console.log("Você escolheu azul")
        break

    case 'vermelho':
        console.log("Você escolheu vermelho")
        break
}