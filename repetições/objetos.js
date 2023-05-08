const prod = document.getElementById('produto')
const div = document.getElementById('exemplo')
const usuario = [
    {
        "nome": "jailsonmendes",
        "quant": 7,
        "preco": 10
    },
    {
        "nome": "manelgomis",
        "quant": 8,
        "preco": 50
    },
    {
        "nome": "jotinha",
        "quant": 20,
        "preco": 70
    },
    {
        "nome": "negao",
        "quant": 10,
        "preco": 134
    },
    {
        "nome": "branquelo",
        "quant": 8,
        "preco": 43
    }
]
for (let usuarios of usuario) {
    let total = usuarios.preco * usuarios.quant
    prod.innerHTML += `
        <p>
         Estoque total de: ${usuarios.nome} -
         ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
         </p>
    `
}