function imparOuPar(num) {
    if (num % 2 === 0) {
        console.log(`${num} é par`)
    } else {
        console.log(`${num} é impar`)
    }
}

function valorDoNumero(num) {
    if (num === 0) {
        console.log(`${num} é zero`)
    } else if (num % 2 == 0) {
        console.log(`${num} é par`)
    } else {
        console.log(`${num} é ímpar`)
    }
}
valorDoNumero(160)

function dobroDoNumero(){
    return 15 * 5
}
console.log(dobroDoNumero())

function validarMaiorIdade(idade) {
    if (idade >= 18) {
        console.log('maior de idade')
    } else {
        console.log('Menor de idade')
    }
}
function validarNota(nota) {
    if (nota > 10 || nota < 0) {
        console.log('valor inválido')
    } else if (nota >= 6) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}