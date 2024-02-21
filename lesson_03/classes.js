'use strict';

// Получить соседние элементы

const frontend = document.querySelector('.props__list_frontend');
const dom = document.querySelector('#dom');

// получаем node следующего элемента т.е. перенос строки \n
console.log(dom.nextSibling);

// получаем следующий элемент, например: следующий <li></li>
console.log(dom.nextElementSibling);

// // получаем node предыдущего элемента т.е. перенос строки \n
console.log(frontend.previousSibling);

// получаем предыдущий элемент, например: сверху <h1></h1>
console.log(frontend.previousElementSibling);

// получаем первый дочерний элемент, самого элемента 

console.log(dom.firstChild); // перенос строки \n
// если нет переноса строки \n, то получаем первый дочерний элемент

console.log(dom.firstElementChild); // получим <a>Link</a>

// получаем родительский элемент для <li></li

console.log(dom.parentNode); // получим <ol>
console.log(dom.parentElement); // получим также <ol></ol>

// получаем родительский элемент по селектору для <li></li

console.log(dom.closest('.item-front'));

// ===== Работа с классами =====

dom.classList // получаем массив всех классов
console.log('🚀 ~ dom:', dom)

dom.className // получаем имена всех классов
console.log('🚀 ~ dom:', dom)

dom.classList.add('active'); // добавляем класс active
console.log('🚀 ~ dom:', dom)

dom.classList.remove('active'); // удаляем класс active

dom.classList.toggle('active'); // переключаем класс active

dom.classList.contains('active'); // проверяем, есть ли класс active
console.log(dom.classList.contains('active'));

dom.matches('.active'); // проверяем, есть ли класс active в строке
console.log('🚀 ~ dom.matches:', dom.matches('.active'));
