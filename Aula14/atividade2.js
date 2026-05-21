
let qtdProdutos = Number(prompt('Quantos produtos serão informados na NF? Digite apenas números'))


let nomesProdutos = []
let valoresProdutos = []


for(let i = 0; i < qtdProdutos; i++){
    let nome = prompt(`Digite o nome do produto ${i+1}`)
    let preco = Number(prompt(`Digite o preco do produto ${i+1}. Apenas números`))

  
    nomesProdutos[i]= nome

 
    valoresProdutos.push(preco)

    console.log(nomesProdutos, valoresProdutos)
   
    console.log(`${nomesProdutos[i]} - R$ ${valoresProdutos[i]}`)
}

