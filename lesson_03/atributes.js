'use strict';

// ==== Атрибуты элементов ====

const frontend = document.querySelector('.props__list_frontend');
const dom = document.querySelector('#dom');
const logo = document.querySelector('.logo');
const link = document.querySelector('.link-site');

console.log(dom.className); // получаем имена всех классов
console.log(dom.id); // получаем идентификатор элемента
console.log(dom.title); // получаем title элемента
console.log(logo.alt); // получаем alt элемента
console.log(logo.src); // получаем src элемента

logo.alt = 'Поменяли название alt'; // изменяем alt элемента

link.href = 'https://www.google.com/'; // изменяем href элемент

console.log(link.hasAttribute('href')); // проверяем, есть ли атрибут href

console.log(link.getAttribute('href')); // получаем значение атрибута href

console.log(link.setAttribute('href', 'https://www.yandex.ru')); // изменяем значение атрибута href

console.log(link.getAttribute('href'));

console.log(link.removeAttribute('href')); // удаляем атрибут href

console.log(link.getAttribute('href')); // null

link.attributes // получаем массив атрибутов элемента
console.log('🚀 ~ link.attributes:', link.attributes)
