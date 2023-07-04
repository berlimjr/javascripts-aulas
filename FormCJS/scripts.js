const formulario = document.querySelector('form')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const invalidLi = document.getElementById('invalida-li')
const telNumero = document.getElementById('telN')
const inSenha = document.getElementById('invalida-senha')
const enviar = document.getElementById('enviarT')
let formEmailValid = false 
let formPasswordValid

function validEmailInput () {
    const numberPattern = /^[0-9]/;
    if (email.value.match(numberPattern)) {
        email.style.border = '2px solid green'
        invalidLi.style.display = 'none'
        formEmailValid= true
        validBtnSubmit()
    } else {
        email.style.border = '2px solid red'
        invalidLi.style.display = 'flex' 
    }
}

function validBtnSubmit() {
    if (formEmailValid) {
        enviar.removeAttribute('disabled')
    }
}

email.addEventListener('change', validEmailInput)