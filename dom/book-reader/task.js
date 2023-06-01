const book = document.querySelector('.book');
const controls = document.querySelector('.book__control');

for (let control of controls.children) {
    control.addEventListener('click', conSet)
}

function conSet(element) {
    element.preventDefault();
    if (element.target.dataset.size === 'big') {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
    } else if (element.target.dataset.size === 'small') {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
    } else {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }

    for (let fonS of document.querySelectorAll('.font-size')) {
        fonS.classList.remove('font-size_active')
    }

    element.target.classList.add('font-size_active')
}