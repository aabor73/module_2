'use strict';

const createRow = (row) => {
    const tr = document.createElement('tr');    
    tr.innerHTML = `
    <td class="table__cell">${row.num}</td>
    <td class="table__cell table__cell_left table__cell_name" data-id="${row.id}">
       <span class="table__cell-id">id: ${row.id}</span>${row.title}
    </td>
    <td class="table__cell table__cell_left">${row.category}</td>
    <td class="table__cell">${row.unit}</td>
    <td class="table__cell">${row.count}</td>
    <td class="table__cell">${row.price}</td>
    <td class="table__cell">${row.total}</td>
    <td class="table__cell table__cell_btn-wrapper">
       <button class="table__btn table__btn_pic"></button>
       <button class="table__btn table__btn_edit"></button>
       <button class="table__btn table__btn_del"></button>
    </td> `;
    
return tr;
}

const renderGoods = (data) => {
    const table = document.querySelector('.table');
    data.forEach(item => {
    const tr = createRow(item);
    table.appendChild(tr);
});
}

// Пример массива объектов
const goods = [
{
num: 3,
id: 34601654816512,
title: 'Смартфон Xiaomi 11T 8/128GB',
category: 'Мобильные телефоны',
unit: 'шт',
count: 3,
price: 27000,
total: 81000
},
{
num: 4,
id: 14601854816512,
title: 'Радиоуправляемый автомобиль Cheetan',
category: 'Игрушки',
unit: 'шт',
count: 7,
price: 2500,
total: 17500
},
{
num: 5,
id: 44601654123512,
title: 'ТВ приставка MECOOL KI',
category: 'ТВ пристаки',
unit: 'шт',
count: 4,
price: 12400,
total: 49600
},
];

renderGoods(goods);

// === Modal window open/close ===

const btnAddGoods = document.querySelector('.panel__add-goods');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.modal__close');
overlay.classList.remove('active');
btnAddGoods.addEventListener('click', () => {
    overlay.classList.add('active');
  });  
  modalClose.addEventListener('click', () => {
    overlay.classList.remove('active');
  });  
 overlay.addEventListener('click', e => {
    if (e.target.classList.contains('overlay')) {
      overlay.classList.remove('active');
    }
 });
  
// 1. При клике на кнопку удалить, в таблице
// удалять строку из вёрстки и объект из базы данных
// 2. В консоль выводить базу данных после удаления поля


// Создаем переменную указывающую кнопку для удаления
const btnDelGoods = document.querySelectorAll('.table__btn_del');

// Создаем функцию которая будет удалить строку из вёрстки
// и объект из базы данных

// Используем метод forEach(), которая позволяет применить
// ко всем кнопкам addEventListener
btnDelGoods.forEach(btn => { 
  btn.addEventListener('click', e => {
    if (e.target.closest('tr')) { // проверяем есть ли элемент tr
      e.target.closest('tr').remove(); // удаляем строку tr из вёрстки
      goods.splice(0, 1); // удаляем первый элемент из массива goods
      console.log("🚀 ~ goods:", goods) // выводим массив goods в консоль
    }      
  });
});
