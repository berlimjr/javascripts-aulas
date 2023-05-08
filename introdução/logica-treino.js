// const inputValue = document.getElementById('titulo')
// const nota = prompt('Qual foi a nota?')
// const nota2 = prompt('Qual foi a nota?')
// const media = (parseInt(nota) + parseInt(nota2)) / 2 

// if (media === 10){
//     console.log('Aprovado com distinção')
// } else if(media >= 7) {
//     console.log('Aprovado')
// } else {
//     console.log('Reprovado')
// }

const nota1 = prompt('Nota')
var genio = '10'
var media = '6'
var repetir = '6'

if (nota1 > media) {
    console.log('Passou na media')
} else if(nota1 === genio) {
    console.log('Passou e tirou onda')
} else {
    console.log('Reprovado')
}
console.log(nota1)