let preco = parseFloat(prompt("Digite o preço do produto"))
let etiqueta = prompt("Digite a cor da etiqueta").toLowerCase()
let desconto = 0

switch(etiqueta) {
    case 'verde':
    preco = preco * 0.9 
    desconto = 10
    break

    case 'amarelo':
    preco = preco * 0.8
    desconto = 20
    break    

    case 'azul':
    preco = preco * 0.7
    desconto = 30 
    break

    case 'vermelho':
    preco = preco * 0.6
    desconto = 40 
    break

    default:
      desconto = 0
      break
}

console.log(`O preço final do produto é R$ ${preco.toFixed(2)} com um desconto de ${desconto}%`)