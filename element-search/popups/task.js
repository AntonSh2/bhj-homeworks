const modalMain = document.querySelector('#modal_main');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.querySelector('#modal_success');
const modalClose = Array.from(document.querySelectorAll('div.modal__close_times'));

modalMain.classList = 'modal modal_active';

let mC1 = modalClose[0];
let mc2 = modalClose[1];

showSuccess.onclick = function () {
    modalSuccess.classList = 'modal modal_active';
    modalMain.classList = 'modal';
}

mC1.onclick = () => {
    modalMain.classList = 'modal';
}

mc2.onclick = () => {
   modalSuccess.classList = 'modal';
   modalMain.classList = 'modal';
}

