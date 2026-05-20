let valorCompra = 500
let porcentagemDesconto = 1
let porcentagemMaxima = 25

console.log(`Valor da compra - porcentagem de desconto - Valor final`)

for(let desconto= porcentagemDesconto; desconto<= porcentagemMaxima; desconto++){

    let valorFinal = valorCompra - (valorCompra * (desconto/100))
    console.log(`R$ ${valorCompra} - ${desconto}% - R$ ${valorFinal}`)

    valorCompra+=100
}
