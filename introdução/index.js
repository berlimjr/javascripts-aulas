const titulo = document.querySelector('#titulo');

titulo.innerHTML = 'Óla mundo!';

// if(titulo) {
//     console.log(false)
// } else {
//     console.log(true)
// }

// const tipo = 1

// if(!titulo === String) {
//     console.log(true);
// } else if (titulo === Boolean) {
//     console.log(true);
// } else {
//     console.log('outro');
// }
  
const idade = prompt('Coloque sua idade')
console.log(idade);
if (idade > 10 && idade < 15) {
    console.log('Mesada igual a 150$')
} else if(idade > 14 && idade < 20) {
    console.log('Mesada igual a 300$')
} else if (idade < 11) {
    console.log('Muito novo pra receber mesada')
} else if (idade > 19) {
    console.log('Muito velho pra receber mesada')
}

/**
 * Aula 2
 */
