/**
 * Repetições com FOR 
 * 
 * for - interações sobre o índice
 * 
 * for...in - Iterações sobre os valores de um objeto
 * 
 * for...off - Iterações sobre os valores de diversos tipos de dados 
 */

// for

const div = document.getElementById('exemplo');

const arrayFor = [1, 2, 3, 4, 5, 6]

for (let i = 0; 1 < arrayFor.length; i++) {
    div.innerHTML += arrayFor[i] + ' '
    console.log(arrayFor[i])
}

const objeto = {
    "nome": "Samuel",
    "idade": 25,
    "profissão": "professor"
}

for (let value in objeto) {
    console.log(`${value}: ${objeto[value]}`)
}

const names = ['Samuel', 'Bernado', 'Moana']

for (let nome of names) {
    console.log(nome)
}

const usuarios = [objeto, objeto, objeto, objeto]

for (let usuario of usuarios){
    console.log(usuario.nome)
}