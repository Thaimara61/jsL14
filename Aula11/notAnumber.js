let num = "5"
let palavra = "cinco"

let numConvertido = Number(num)//5
console.log(numConvertido)

let palavraConvertida = Number(palavra)//NaN
console.log(palavraConvertida)

let x 
console.log(x) //undefined

let y = null
console.log(y) //null

console.log(Number("10,5")) //null
console.log(parseFloat("10.5")) //10
console.log(parseInt("10,5")) //10

console.log(parseFloat("cinco")) //NaN
console.log(parseInt("cinco")) //NaN

let u  = NaN
let o = 10
let p = "palavra"

console.log(isNaN(u)) //true
console.log(isNaN(o)) //false
console.log(isNaN(p)) //true