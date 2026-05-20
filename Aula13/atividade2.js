let vendas = 5
let faturamentoA = 0
let faturamentoB = 54000

for (let i = 1; i <= vendas; i++) {
    faturamentoA += Number(prompt(`Digite o valor da venda nº ${i}: (apenas números)`))
}

if (faturamentoA > faturamentoB) {
    console.log(`O faturamento da loja A foi maior em ${faturamentoA - faturamentoB} que o faturamento da loja B`)
} else if(faturamentoA == faturamentoB){
    console.log("As lojas tiveram o mesmo faturamento")
}else{
    console.log("Loja A falhou miseravelmente")
}