function checkResolution() {
if(window.innerWidth > 600) {
    document.body.innerHTML = `<div class="mesage-info">` + 
    `<h1>Esta aplicacion solo esta disponible para dispositives movile</h1>` + 
    `<p>Por favor, accede desde un dispositivo movil para utilizar esta aplicacion</p>` + 
    `</div>`
}
}

window.addEventListener(`load`, checkResolution);
window.addEventListener(`resize`, checkResolution);


const modalMenu = document.getElementById("close__menu");
const menuIcon = document.getElementById("menu__options");
const arrowClose = document.getElementById("close__menu-arrow")

menuIcon.addEventListener("click", () => {
    modalMenu.classList.toggle("showModal");
    
});

arrowClose.addEventListener("click", (e) => {
    e.preventDefault();
    modalMenu.classList.remove("showModal");
    
});

const modalResult = document.getElementById("modal__results");
const imputSearch = document.getElementById("imput__search");
const closeModal = document.getElementById("close__modal");
const closeIcon = document.getElementById("close__results");

imputSearch.addEventListener("click", () => {
    modalResult.classList.toggle("show__results");
    
});

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modalResult.classList.remove("show__results");
    
});

closeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    modalResult.classList.remove("show__results");
    
});