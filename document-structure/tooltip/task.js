const toolTip = document.querySelectorAll('.has-tooltip');
const toolEven = document.createElement('div');

toolTip.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();
        toolEven.className = 'tooltip';
        activated = event.target;
        if(activated.title === toolEven.innerText) {
            toolEven.classList.toggle('tooltip_active');
            return;
        };
        toolEven.innerHTML = activated.title;
        const {bottom, left} = activated.getBoundingClientRect();
        toolEven.style = `left: ${left}px; top: ${bottom}px`;
        activated.insertAdjacentElement('afterEnd', toolEven);
        toolEven.classList.add('tooltip_active');

    });
})
