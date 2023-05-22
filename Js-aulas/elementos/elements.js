const container = document.getElementById('div-pai')
const first = document.querySelector('#first')
const newP = document.createElement('p')
newP.innerHTML = 'Ola mundo'
container.insertBefore(newP, container)