const menus = Array.from(document.querySelectorAll('.menu__link'));
for (let menu of menus) {
    menu.onclick = () => {
        const p = menu.parentElement;
        if (p.querySelector('.menu_sub').className === 'menu menu_sub') {
            p.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            p.querySelector('.menu_sub').className = 'menu menu_sub';
        }
        if (menu.closest('.menu_main')) {
            return false;
        }
    }
}
