function openItem() {
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome');
    const userSpan = document.getElementById('user_id');
    const userId = localStorage.getItem('user_id');
    if (userId) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userSpan.textContent = userId;
    } else {
        signin.classList.add('signin_active');
        welcome.classList.remove('welcome_active');
    }
}
function submitForm(element) {
    element.preventDefault();
    const form = document.getElementById('signin__form');
    const loginInput = form.querySelector('input[name="login"]');
    const passwordInput = form.querySelector('input[name="password"]');
    const login = loginInput.value;
    const password = passwordInput.value;
    fetch(form.action, {
        method: 'POST',
        body: JSON.stringify({login, password}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
     .then(response => response.json())
     .then(data => {
        if (data.success) {
            const userId = data.user_id;
            localStorage.setItem('user_id', userId);
            openItem();
        } else {
            alert('Измените пароль или логин');
        }
     });
     form.reset();

}
const signinForm = document.getElementById('signin__form');
signinForm.addEventListener('submit', submitForm);
window.addEventListener('load', openItem);

