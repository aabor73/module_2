'use strict';

const front = document.querySelector('.front');

front.style.color = 'red'; // изменяем стили элемента
front.style.backgroundColor = 'orange'; // изменяем стили элемента
front.style.padding = '10px'; // изменяем стили элемента

front.style.cssText = `
    color: red; 
    background-color: orange; 
    padding: 10px; 
    border-radius: 10px; 
`;

console.log(front.style); // получаем стили элемента

const style = getComputedStyle(front);
console.log("🚀 ~ background:", style.background)
console.log("🚀 ~ font:", style.font)
console.log("🚀 ~ padding:", style.padding)

console.log(front.getBoundingClientRect());
