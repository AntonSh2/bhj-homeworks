const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tab.length; i++) {
    tab[i].onclick = () => {
        for (let c = 0; c < tab.length; c++) { 
            tab[c].classList.remove('tab_active');
            tabContent[c].classList.remove('tab__content_active');
        }

        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    }
}