const modalClose = document.querySelector('div.modal__close');
const subModal = document.getElementById('subscribe-modal');

if(!getCookie('subModal')) {
    subModal.classList.add('modal_active');
}
modalClose.onclick = () => {
    subModal.classList.remove('modal_active');
    document.cookie = 'subModal=true';
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
