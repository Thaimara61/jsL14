// para && (AND) - todos os condições tem que ser V para o resultado ser V
//|| para OU(OR) - pelo menos uma condição tem que ser V para o resultado ser V

let numero = 'K'


if( (numero%2 ==0) && (numero%5 ==0)){
    console.log("O número é par e múltiplo de 5")
}


if ( (numero%2 == 0 ) || (numero%5 ==0)){
    console.log("O número é par ou múltiplo de 5")
}