const open = document.getElementById('open');
const close = document.querySelector('.close');
const modalContainer = document.querySelector('.modal-container');

open.addEventListener("click", () => {
    modalContainer.classList.add('active');
});

close.addEventListener("click", () => {
    modalContainer.classList.remove('active');
});

window.onclick = function(e){ // if user click outside the modalContainer(modal)
    if(e.target == modalContainer){
        modalContainer.classList.remove('active');
    }
}