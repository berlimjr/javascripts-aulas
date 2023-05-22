const modal = document.getElementById('modal')
const body = document.querySelector('body')
const botao = document.getElementById('esconder1') 

function abrirBtn() {
    modal.classList.toggle('modalClose')
    modal.classList.toggle('modalOpen')
    body.classList.toggle('bodyModal')
    botao.classList.toggle('modalClose')
}
