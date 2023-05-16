const slItems = Array.from(document.querySelectorAll('.slider__item'));
const slPrev = document.querySelector('.slider__arrow_prev');
const slNext = document.querySelector('.slider__arrow_next');


slNext.onclick = () => {
    let items = slItems.findIndex(elelement => elelement.classList.contains('slider__item_active'))
    if (items >= slItems.length - 1) {
        items = -1;
    }
    removeAct()
    addAct (items + 1);
}

slPrev.onclick = () => {
    let items = slItems.findIndex(elelement => elelement.classList.contains('slider__item_active'))
    if (items <= 0) {
        items = slItems.length;
    } 
    removeAct()
    addAct (items - 1);
    
}

const removeAct = () => { 
    slItems.forEach(element => element.classList.remove('slider__item_active'));
}
    
const addAct = (i) => {
    slItems[i].classList.add('slider__item_active');
}
