const inputNome = document.getElementById('recebeNome')
const inputSobre = document.getElementById('recebe-nome2')
const inputEmail = document.getElementById('emails')
const inputData = document.getElementById('dataNas')
const checkBoxValues = document.querySelectorAll('input[type="checkbox"]')
const radioValues = document.querySelectorAll('input[name="sexo"')

function enviarNome() {
    checkBoxValues.forEach((checkbox) =>  {
        if (checkbox.checked) {
            console.log(`${checkbox.name}: ${checkbox.value}`)
        }
    })
    radioValues.forEach((radio) =>  {
        if (radio.checked) {
            console.log(`${radio.name}: ${radio.value}`)
        }
    })
    console.log(`${inputNome.name}: ${inputNome.value}`)
    console.log(`${inputSobre.name}: ${inputSobre.value}`)
    console.log(`${inputEmail.name}: ${inputEmail.value}`)
    console.log(`${inputData.name}: ${inputData.value}`)
}