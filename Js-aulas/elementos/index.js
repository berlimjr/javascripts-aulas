/**
 * elementos.getattribute(attributeName)
 * -> retorna o valor do atributo
 */

const p = document.querySelector('p')
const input = document.querySelector('input')
const button = document.querySelector('button')

p.innerHTML = 'paragrafo'
p.setAttribute('class, novoParagrafo')
// input.removeAttribute('type')

function visualizarSenha() {
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
        button.innerHTML = 'esconder'
        
    } else if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        button.innerHTML = 'vizualizar'
    }
}
    