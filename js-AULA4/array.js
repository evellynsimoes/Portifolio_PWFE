//variáveis: espaço em memoria para guardar valores
//variaveis: let, const, var, array
//let: tudo que varea, valores flexiveis para armazenar 1 dado
//const: valores fixos, "crachado"
//var: primeira forma de declarar uma variavel no javascript. 
// Já está obsoleta, de forma em que só vemos em sistemas legados.
//array: é uma variável que armazena varios valores em um conjunto. Esse conjunto recebe um indice começando em 0

//array é determinado usando os []
let numeros = [5, 10, 15, 20, 25, 30, 35];
let nomes = ["Nick", "Gabi", "Lívia", "Pedro", "Ariane", "Eve"]

//exibição do indice de um array
// for(let indice in numeros){
//     alert(indice)
// }

//exibição dos valores guardados no array
for(let valor of nomes){
    alert(valor)
}

//percorrer o array eu posso usar o foreach
numeros.forEach(function(valor){
    document.write(`${valor} <br>`)
})

//inserindo no final do array
//já devo colocar o valor que quero no final da fila
numeros.push(60)
document.write(`${numeros} <p>`)

//inserindo no inicio do array
numeros.unshift(0)
document.write(`${numeros} <br>`)

//excluindo o ultimo
numeros.pop()
document.write(`${numeros}<p>`)

//excluindo o primeiro elemento da lista
numeros.shift()
document.write(`${numeros} <p>`)

//funções callback: que criam novos arrays como resposta de uma tratativa de manipulação do array original, não editando o original

let numerosQuadrados = numeros.map(n => n ** 2)
document.write(`${numerosQuadrados} <p>`)

let nomesGrandes = nomes.map(nome => nome.toUpperCase())
document.write(`${nomesGrandes} <p>`)

//Filter: ele gera um outro array de retorno com os valores que satisfazem uma condição
let numerospares = numeros.filter(function(numero){
    return numero % 2 ===0
})

//find: ele percorre um array originnal e assim que acha um valor que atenda uma condição ele para de percorrer e retoma esse valor encontrado
let primeiroPar = numeros.find(function(numero){
    numero % 2 ===0
})

documen.write(`O primeiro par é ${primeiroPar}`)

//spread
//como eu junto dois arrays
let livrosP = ['ler um café e tomar uma poesia', 'pra você que teve um dia ruim', 'extraordinario']
let livrosC = ['Diário de um banana', 'It a coisa', 'Harry Potter']
catalogo = [...livrosP, ...livrosC]