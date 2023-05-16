const menus = Array.from(document.querySelectorAll('.menu__link'));
for (let menu of menus) {
    menu.onclick = () => {
        const p = menu.parentElement;
        if (p.querySelector('.menu_sub').className === 'menu menu_sub') {
            p.querySelector('.menu_sub').classList = 'menu menu_sub menu_active';
            return false;
        } 
    }
}
