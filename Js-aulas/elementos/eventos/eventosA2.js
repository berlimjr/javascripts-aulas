const abrir = document.getElementById('btn');
const fechar = document.getElementById('fechar')
const modal = document.getElementById('modal')
const body = document.querySelector('body')
function handleBtn() {
    modal.classList.toggle('modalOpen')
    body.classList.toggle('bodyModal')
    abrir.classList.toggle('modal')
}

abrir.addEventListener("click", handleBtn);
fechar.addEventListener("click", handleBtn);



window.addEventListener("resize", () => {
    if(window.innerWidth <= 700) {
        alerta()
    }
});