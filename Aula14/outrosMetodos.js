let numeros = [1,2,3,4,5,6]
console.log(numeros)

let retorno =numeros.splice(1,2)

console.log(numeros) 
console.log(retorno)


numeros.splice(1,0,'um','dois') 
console.log(numeros) 

numeros.splice(1,2,'numero')
console.log(numeros)


let frutas = ['banana', 'laranja','banana', 'maçã']

let existe = frutas.includes('melancia')
console.log(existe)


let primeiroIndice = frutas.indexOf('banana')
console.log(primeiroIndice)

let ultimoIndice = frutas.lastIndexOf('banana')
console.log(ultimoIndice)

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice?

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice