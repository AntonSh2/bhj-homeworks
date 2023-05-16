const dropValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const dropItem = Array.from(document.querySelectorAll('.dropdown__item'));
const dropLinks = Array.from(document.querySelectorAll(".dropdown__link"))

dropValue.addEventListener('click', function () {
    dropList.classList.toggle('dropdown__list_active');
});


for (let i = 0 ; i < dropLinks.length; i++) {
    dropItem[i].onclick = () => {
        dropValue.textContent = dropLinks[i].textContent;
        dropList.classList.remove('dropdown__list_active')
        return false
    }
}