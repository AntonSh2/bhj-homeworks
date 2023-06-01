const rotator = Array.from(document.querySelectorAll('.rotator__case'));

let num = 0;
let speed = 0;
const rotatorCas = (event) => {
    clearInterval(interval)
    for (let i = 0; i < event.length; i++) {
        event[i].className = 'rotator__case';
    }
    num++;

    if (num === event.length) {
        num = 0;
    }
    event[num].classList.add('rotator__case_active');
    speed = event[num].dataset.speed;
    interval = setInterval(rotatorCas, speed, rotator)
}
let interval = setInterval(rotatorCas, speed, rotator)