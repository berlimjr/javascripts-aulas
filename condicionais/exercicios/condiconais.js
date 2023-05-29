let parN = parseInt(prompt('insira um numero:'));
let num_2 = parseInt(prompt('insira um numero:'));

if (num_1 > num_2) {
    alert(`Este numero ${num_1} é maior que ${num_2}`)
} else {
    alert(`Este ${num_1} não é maior que ${num_2}`)
}

if (idade >= 18) {
    alert('Vc é maior de idade!')
} else if (idade <= 18) {
    alert('Vc é menor de idade')
}

const mult = parN % 2

if (mult === 0) {
    alert('Este número é par')
} else {
    alert('Este número é impar')
}

const nota = parseInt(prompt('Digite a nota do aluno:'))
let media = 6
var onda = 10 

if (nota >= 7 && nota <= 9) {
    alert('Passou na media')
} else if (nota <= media) {
    alert('Reprovado(a)')
} else if (nota === onda) {
    alert('Passou se exibindo ne safado(a)')
}
let num = prompt('Digite um número:')
var zero = 0
if (num > 0) {
    alert('positivo')
} else if (num < 0) {
    alert('Negativo')
} else {
    alert('0 é nulo')
}

let contador = 1;

do {
    console.log(contador)
    contador++;
} while (contador <= 10);

for (let i = 1; i <= 20; i++) {
    console.log(i)
} 

let palavra1 = prompt("digita qualquer merda ai");
let i = 0;

while(i < palavra.length) {
    console.log(palavra[i]);
    i++
}
const palavra = prompt("Digite uma palavra: ");

for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
}
