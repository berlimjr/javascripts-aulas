// const h1 = document.getElementById('titulo');
// const p = document.querySelectorAll('p');
// const textoClass = document.getElementsByClassName('texto');

// console.log(h1)
// console.log(p)
// console.log(textoClass)

// p.forEach((p) => {
//     console.log(p.innerText)
// });

// for (let i = 0; i < textoClass.length; i++) {
//     textoClass[i].innerText += ' Alteração'
// }
const inputNome = document.getElementById('form-nome')

function enviarNome() {
    console.log(`${inputNome.name}: ${inputNome.value}`)
}