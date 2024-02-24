'use strict';

const form = document.querySelector('.my-form'); // получаем форму

// const inputName = document.querySelector('.input-name'); // получаем поле ввода имени
// const inputSurname = document.querySelector('.input-surname'); // получаем поле ввода фамилии

form.addEventListener('submit', e => {
    e.preventDefault(); // отменяем стандартное действие браузера: перезагрузку
    console.log('🚀 ~ submit:', 'submit'); // выводим в консоль
    
    // Получаем данные из формы
    // 1-й способ - неправильный: получение элементов на прямую
    // console.log(inputName.value);
    // console.log(inputSurname.value);

    // Получаем данные из формы
    // 2-й способ - правильный: получение элементов через form.elements
    console.log(form.elements.name.value);
    console.log(form.elements.surname.value);

    // 3-й способ - правильный: современный
    console.log(form.name.value);
    console.log(form.surname.value);
    console.log(form.phone.value);
    
    // 4-й способ - тоже правильный через formData
    const formData = new FormData(e.target);
    //  с помощью formData.get() получаем значение поля
    console.log(formData.get('email'));

    // с помощью formData.entries() получаем массив элементов
    console.log([...formData.entries()]);
    console.log(Object.fromEntries(formData));

});

// Методы работы с событиями в элементах формы

// focus срабатывает когда поле ввода получает фокус
form.name.addEventListener('focus', e => {
    console.warn(e.type, e.target.value);
});

// blur срабатывает когда поле ввода остановлено: происходит расфокусировка
form.name.addEventListener('blur', e => {
    console.error(e.type, e.target.value);
});

// change срабатывает когда поле ввода теряет фокус
form.name.addEventListener('change', e => {
    console.log(e.type, e.target.value);
});

form.name.addEventListener('input', e => {
    console.warn(e.type, e.target.value);
});

// 
form.name.addEventListener('keyup', e => {
    console.error(e.type, e.target.value);
});

// 
form.name.addEventListener('keydown', e => {
    console.log(e.type, e.target.value);
});
form.name.addEventListener('keypress', e => {
    console.log(e.type, e.target.value);
});

// Деструктуризация событий

const {surname, color: [...color], description, email, size, file} = form;

console.log(surname, color, description, email, size, file);

// Делегирование событий

const fieldsetRadio = document.querySelector('.field-radio');

fieldsetRadio.addEventListener('change', e => {
    console.log(e.target);
});
form.addEventListener('change', e => {
    console.log(e.target.value);
});

// Сброс данных введенных в форму
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        form.reset();
    }
});