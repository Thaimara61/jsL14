let palavra = 'sou um texto, logo sou uma string'
let numero = 10 //number (inteiros)
let numero2 = 10.5 //number (decimais)
let numero3 = '2026' // numero mas no formato de string 

console.log(numero3 - 10) 
console.log(numero3 * 3)
console.log(numero3 / 2)
console.log(numero3 + 10) // nesse caso o + tem a função de concatenar, ou seja, juntar os dois valores, e não somar.
console.log(numero + 10) 

let num = Number("10")//10
let num2 = Number("10.5")//10.5
let num3 = parseFloat("10.5")//10.5
let num4 = parseInt("10.5")//10

let numeroUsuario = Number(prompt("digite um numero"))
//equivale a

let numeroUsuario2 = prompt("digite um numero") //string
numeroUsuario2 = Number(numeroUsuario2) //converte 