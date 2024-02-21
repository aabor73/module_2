'use strict';

// ==== Data-атрибуты ====

const dom = document.querySelector('#dom');
const logo = document.querySelector('.logo');
const ajax = document.querySelector('.ajax');

console.log('🚀 ~ ajax:', ajax)

const ajaxText = ajax.dataset.text; // получаем значение атрибута data-text
console.log('🚀 ~ ajaxText:', ajaxText)

// const text = document.createTextNode(ajaxText); // создаем новый текст
// ajax.appendChild(text); // вставляем текст рядом с текстом Link

// заменяем текст полностью: был Link стало Ajax, JSON, Rest API
// ajax.textContent = ajaxText;

ajax.textContent += ajaxText; // вставляем текст рядом с текстом Link

console.log(dom.textContent); // получим весь текст

console.log(logo.innerHTML); // получим весь HTML

console.log(logo.outerHTML); // получим весь HTML

dom.innerHTML = `<a>Привет мир!</a>`;// вставляет или заменяет весь HTML
dom.outerHTML = `<a>Привет мир!</a>`;// вставит или заменит весь элемент

const title = document.querySelector('.title-one');
console.log('🚀 ~ title:', title)

title.innerHTML = '<i>Hello</i>'; // добавляем текст на страницу
const i = title.querySelector('i');
console.log('🚀 ~ i:', i)

i.textContent = 'Привет!'; // изменяем текст на странице

title.textContent = ''; // пустая строка почистит все

title.insertAdjacentHTML('beforebegin', '<h1>beforebegin</h1>'); // beforebegin добавляем текст перед
title.insertAdjacentHTML('afterbegin', '<h2>afterbegin</h2>'); // afterbegin добавляем текст впереди
title.insertAdjacentHTML('afterend', '<h2>afterend</h2>'); // afterend добавляем текст в конце
title.insertAdjacentHTML('beforeend', '<h1>beforeend</h1>'); // beforeend добавляем текст в конце

title.insertAdjacentText('beforebegin', '<h1>beforebegin</h1>'); // добавляем текст с тегами перед
title.insertAdjacentText('afterbegin', '<h2>afterbegin</h2>'); // добавляем текст с тегами впереди
title.insertAdjacentText('afterend', '<h2>afterend</h2>'); // добавляем текст с тегами в конце
title.insertAdjacentText('beforeend', '<h1>beforeend</h1>'); // добавляем текст с тегами в конце

const newElement = document.createElement('h2'); // создаем новый элемент h2
newElement.textContent = 'newElement'; // добавляем текст в новый элемент h2

title.insertAdjacentElement('beforebegin', dom); // добавляем текст с тегами перед
title.insertAdjacentElement('afterbegin', newElement); // добавляем текст с тегами впереди
title.insertAdjacentElement('afterend', ajax); // добавляем текст с тегами в конце
title.insertAdjacentElement('beforeend', logo); // добавляем текст с тегами в конце

/**
 * beforebegin добавляет текст впереди
 * 
 * h2
 * afterbegin добавляет в начале
 * # content
 * afterend добавляет текст в конце
 * h2
 * 
 * beforeend добавляет текст сзади 
 * 
 */

