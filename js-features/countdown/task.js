//const button = document.getElementById( 'push-me' );
//button.onclick = () => alert( 'Till i can get my satisfaction' );
//button.click();

const timer = document.getElementById('timer');
const timerId = setInterval(() => {
    const value = timer.textContent;
    if (value > 0) {
        timer.textContent = value - 1;
    } else {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    }
}, 1000);