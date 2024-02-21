'use strict';

{
const app = document.querySelector('#app'); //переменная для app

let countArea = 0; //счетчик для наших кинозалов

const createSeat = i => {
    const seat = document.createElement('div'); // создаем стул
    seat.classList.add('seat'); // указываем класс для стула
    seat.dataset.seatNumber = i; // указываем данные для стульев

    return seat; // возвращаем стул
};

// Функция которая будет принимать количество линий — countLine
// и сколько стульев должно быть в линии — y
const createLine = (countLine, y) => {
    const line = document.createElement('div'); // создаем линию
    line.classList.add('line'); // указываем класс для линии
    line.dataset.lineNumber = countLine; // указываем данные для линии

    for (let i = 1; i <= y; i++) {
        line.append(createSeat(i));
    };

    return line;
};

// Функция которая будет создавать ряды и сколько стульев в ряду
const createArea = (x, y) => {
    countArea += 1; // увеличиваем счетчик для наших кинозалов
    const area = document.createElement('div'); // создаем ряд
    area.classList.add('area'); // указываем класс для ряда
    area.dataset.areaNumber = countArea; // указываем данные для ряда

    // создадим ряды с помощью цикла
    for (let i = 1; i <= x; i++) {
        area.append(createLine(i, y)); // добавляем ряды и стулья 
    }

    return area;
};

app.append(createArea(5, 6));
app.append(createArea(8, 6));
app.append(createArea(6, 6));

app.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('seat')) {
        const seat = target.dataset.seatNumber; // получаем номер кресла
        const line = target.closest('.line').dataset.lineNumber; // получаем номер ряда
        const area = target.closest('.area').dataset.areaNumber; // получаем номер зала

        target.style.backgroundColor = 'tomato'; // меняем цвет кресла после выбора и клика

        alert(`Ваш зал № ${area} - ряд № ${line} - кресло № ${seat}!`); 
    };
});

}
