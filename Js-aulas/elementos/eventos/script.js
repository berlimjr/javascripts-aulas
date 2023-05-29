const modal = document.getElementById('modal')
const body = document.querySelector('body')
const botao = document.getElementById('esconder1') 

function abrirBtn() {
    modal.classList.toggle('modalClose')
    modal.classList.toggle('modalOpen')
    body.classList.toggle('bodyModal')
    botao.classList.toggle('modalClose')
}
const nome = document.getElementById('nome')
const sobrenome = document.querySelector('#sobrenome')

function enviarForm(event) {
    event.preventDefault()
    const dados = []
    for (let i = 0; i < event.target.length; i++) {
        if (event.target[i].value) {
            console.log(event.target[i].value)
            dados.push(event.target[i].value)
        }
    }
    alert(nome.value, sobrenome.value)
}