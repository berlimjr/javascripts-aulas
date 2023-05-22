let a = 8
let b = 10

function somaUm () {
    return a + b
}
console.log(somaUm())

const arrayUm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayDois = [...arrayUm, 256, 345, 654]
function maiorNumero (lista) {
    let maior = lista[0]
    for (let num of lista) {
        if (num > maior){
            maior = num
        }
    }
    
    return maior
}
console.log(maiorNumero(arrayUm))

function media(lista) {
    let soma = 0

    for (let num in lista){
        soma += lista[num]
    }
    console.log(soma)
    console.log(lista.length)
    return soma / lista.length
}

console.log(media(arrayDois))
