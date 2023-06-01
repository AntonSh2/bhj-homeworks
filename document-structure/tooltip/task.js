const toolTip = document.querySelectorAll('.has-tooltip');

let activated = null;

toolTip.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();
        if(activated) {
            activated.classList.remove('tooltip_active');
            activated = null;
        }
        const toolEven = document.createElement('div');
        toolEven.className = 'tooltip';
        toolEven.innerHTML = element.title;
        const position = element.getBoundingClientRect();
        const dataPosition = element.getAttribute('data-position')
        switch (dataPosition) {
            case 'top':
                toolEven.style.left = `${position.left}px`;
                toolEven.style.top = `${position.top - toolEven.offsetHeight}px`;
                break;
            case 'left':
                toolEven.style.left = `${position.top - toolEven.offsetHeight}px`;
                toolEven.style.top = `${position.left}px`;
                break;
            case 'right':
                toolEven.style.left = `${position.right}px`;
                toolEven.style.top = `${position.top}px`;
                break;
            case 'bottom':
            default:
                toolEven.style.left = `${position.left}px`;
                toolEven.style.top = `${position.bottom}px`;
                break;
        }
        document.body.appendChild(toolEven);
        toolEven.classList.add('tooltip_active');
        activated = toolEven;
    })
})

document.addEventListener('click', event => {
    if (activated && !event.target.classList.contains('has-tooltip')) {
        activated.classList.remove('tooltip_active');
        activated = null;
    }
})