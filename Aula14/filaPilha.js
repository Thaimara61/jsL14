let fila = []
let pilha = []

//adicionando um item a fila

fila.push('pessoa 1')
fila.push('pessoa 2')
// ['pessoa 1', 'pessoa 2']

pilha.unshift('coisa 1')
pilha.unshift('coisa 2')
//['coisa 2', 'coisa 1']

let itemRemovido = fila.shift()
//['pessoa 1' - item removido]
//['pessoa 2' - array atualizado]

let itemRemovido = pilha.pop
//['coisa 2' - item removido]
//['coisa 1' - array atualizado]