const interestCheck = document.querySelectorAll('.interest__check');

function isCheck(element) {
    const check = element.target;
    nowCheck(check);
}

function nowCheck(check) {
    const seaCheck = check.closest('.interest').querySelectorAll('.interest__check');

    seaCheck.forEach(awewCheck => {
        if (awewCheck.checked !== check.checked) {
            awewCheck.checked = check.checked;
            nowCheck(awewCheck);
        }
    });
}

interestCheck.forEach(check => {
    check.addEventListener('change', isCheck)
})