const num_1 = prompt('Digite um numero:')
const mult = num_1 % 2;

if (mult === 0) {
    alert('O número é par')
} else {
    alert('impar')
} 
 
let idade = prompt('Quantos anos vc tem?')
var minimo = 16

if (idade < minimo ) {
    alert("Não pode votar!")
} else if (idade >= minimo) {
    alert("Pode votar!")
} 

// let idade = prompt('Digite sua idade!')
let cnh = prompt('Vc tem cnh?');

if(idade >= 18 && cnh == "sim") {
    prompt(`você tem ${idade} e pode dirigir`)
} else if (idade < 18 && cnh == "não") {
    prompt('Você não tem idade')
} else if (idade >= 18 && cnh == "não") {
    alert("Vc n tem habilitação")
} else {
    alert("Mentira")
}

