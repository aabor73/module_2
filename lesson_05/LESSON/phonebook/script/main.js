'use strict';

const foo = () => {
    alert('Booom...');
};

const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const link = document.querySelector('.link');

// btnOne.onclick = () => {
//     alert('One');
// };        Так уже не делают, надо использовать addEventListener

// btnTwo.onclick = foo;

btnOne.addEventListener('click', () => {
    alert('One');
});

btnTwo.addEventListener('click', foo); // добавляет событие при клике

btnTwo.removeEventListener('click', foo); // удаляет событие при клике


// ==== Объекты событий ====
btnOne.addEventListener('click', event => {
    console.log(event);
    console.log(event.clientX);
    console.log(event.clientY);
});

link.addEventListener('click', event => {
    event.preventDefault(); // отменяет стандартное событие, 
    // например, событие нажатия на кнопку
    console.log(link.textContent);
});