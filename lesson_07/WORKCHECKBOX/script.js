'use strict';

const form = document.querySelector('form');

// Отправка формы тестовая функция

const sentData = data => console.log('Отправка: ', data);


form.addEventListener('submit', e => {
    e.preventDefault();

    const data = {};
    
    const formData = new FormData(e.target);

    for (const [name, value] of formData) {
        console.log(name, value);
    };

    sentData(formData);
});