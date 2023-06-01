const chat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.getElementById('chat-widget__input');

chat.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
});

const botMessage = [
    'Вы не купили ни одного товара, чтобы так с нами разговаривать!', 
    'Кто тут?', 
    'Где ваша совесть?', 
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше!', 
    'Добрый день! До свидания!',
    'Мы ничего не будем вам продавать!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
];

document.addEventListener('keydown', element => {
    if (input.value.trim() !== ''  && element.key === 'Enter') {
      messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${new Date().toLocaleTimeString()}</div>
        <div class="message__text">${input.value}</div>
        </div>
      `;
      input.value = '';
  
      messages.innerHTML += `
        <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString()}</div>
        <div class="message__text">${botMessage[Math.floor(Math.random() * botMessage.length)]}</div>
        </div>
      `;
    }
  });