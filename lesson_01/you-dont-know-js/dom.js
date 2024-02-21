'use strict';

const html = document.documentElement;

console.log(html.tagName);
console.log(html.childNodes);
console.log(html.firstChild);
console.log(html.lastChild);

console.log(document.head);
console.log(document.body);

console.log(html.children[1].children);

const id = document.getElementById('title');
console.log("🚀 ~ id:", id);

const id1 = document.getElementsByClassName('title');
console.log('🚀 ~ id1:', id1);

const id2 = document.getElementsByClassName('item');
console.log('🚀 ~ id2:', id2);

const id3 = document.getElementsByClassName('item');
console.log('🚀 ~ id3:', id3[1]);

const id4 = document.getElementsByClassName('item');
console.log('🚀 ~ id4:', id4[2]);

const className = document.getElementsByClassName('item');
console.log('🚀 ~ className:', className);

const name = document.getElementsByName('title-items');
console.log('🚀 ~ name:', name);

const tagName = document.getElementsByTagName('li');
console.log('🚀 ~ tagName:', tagName);

const tagName1 = document.getElementsByTagName('li');
console.log('🚀 ~ tagName1:', tagName[10]);

const h1Title = document.querySelector('#title'); // id
console.log('🚀 ~ h1Title:', h1Title)


const h1Title1 = document.querySelector('.title'); // className
console.log('🚀 ~ h1Title1:', h1Title1);

const h1Title2 = document.querySelector('h2'); // one elementName
console.log('🚀 ~ h1Title2:', h1Title2)

const h1Title3 = document.querySelectorAll('h2'); // several tags
console.log('🚀 ~ h1Title3:', h1Title3)

const h1Title4 = document.querySelectorAll('[alt="Типы и грамматические конструкции"]');
console.log('🚀 ~ h1Title4:', h1Title4)

const h1Title5 = document.querySelectorAll('.container .props__list .props__item_one');
console.log('🚀 ~ h1Title5:', h1Title5[5])

const h1Title6 = document.querySelectorAll('.container .props__list .props__item_one:nth-child(3)');
console.log('🚀 ~ h1Title6:', h1Title6)

const container = document.querySelector('.container');
const propsItems1 = container.querySelector('.props__item_one:nth-child(3)');
console.log('🚀 ~ propsItems:', propsItems1)

const propsItems2 = container.querySelector('ol');
console.log('🚀 ~ propsItems1:', propsItems2)

const propsLists = document.querySelectorAll('.props__list');
const propsItems = document.querySelectorAll('.props__item');

propsItems[2].remove(); // удаляет элемент
propsLists[3].append(propsItems[2]); // вставляет элемент в конец
propsLists[3].prepend(propsItems[2]); // вставляет элемент в начало

const propsItemsOne = document.querySelectorAll('.props__item_one');
console.log('🚀 ~ propsItemsOne:', propsItemsOne)

const propsItemsTwo = document.querySelectorAll('.props__item_two');
console.log('🚀 ~ propsItemsTwo:', propsItemsTwo)

const propsItemsThree = document.querySelectorAll('.props__item_three');
console.log('🚀 ~ propsItemsThree:', propsItemsThree)

propsItemsOne[2].remove(propsItemsTwo[2]); // вставляет элемент 
propsItemsTwo[3].append(propsItemsThree[2]); // вставляет элемент 
propsItemsThree[2].prepend(propsItemsOne[2]); // вставляет элемент

propsLists[0].after(propsItemsTwo[1]); // вставляет после закрывающегося тега
propsLists[0].before(propsItemsTwo[1]); // вставляет перед открывающимся тегом

propsItemsOne[1].replaceWith(propsItemsTwo[2]); // переименовать элемент
propsItemsOne[3].replaceWith('Привет мир!'); // переименовать элемент

const cloneElem = propsItemsOne[3].cloneNode(true); // клонирует элемент
console.log('🚀 ~ cloneElem:', cloneElem)

document.body.prepend(cloneElem); // вставляет в начало body

const li = document.createElement('li'); // создать новый элемент li
console.log('🚀 ~ li:', li)

const h1 = document.createElement('h1'); // создать новый элемент h1
console.log('🚀 ~ h1:', h1)

const text = document.createTextNode('Привет мир!'); // создать текст
const dom = document.createTextNode('DOM 1');

li.append(text); // вставляет текст в элемент li
h1.append(dom); // вставляет текст в элемент h1

propsItemsOne[0].append(li, h1); // вставляет элемент в конец
console.log('🚀 ~ propsItemsOne:', propsItemsOne)

