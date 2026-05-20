let numero = Number(prompt("Digite um número: "))
console.log(`Tabuada do ${numero}`)
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`)
}