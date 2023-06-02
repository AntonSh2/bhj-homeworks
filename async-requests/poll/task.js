const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const parse = JSON.parse(xhr.responseText);
        pollTitle.textContent = parse.data.title;
        parse.data.answers.forEach(element => {
          const answerButton = document.createElement('button');
          answerButton.classList.add('poll__answer');
          answerButton.textContent = element;
          answerButton.addEventListener('click', () => {
            alert('Спасибо, ваш вопрос засчитан.')});
        pollAnswers.append(answerButton)  
        });

    };
};
xhr.send();


