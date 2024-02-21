'use strict';

const ol = document.querySelector('.items');
const li = document.querySelectorAll('.item');

ol.append(li[0]);
ol.append(li[4]);
ol.append(li[5]);

const propsList = document.querySelectorAll('.props__list');
const propsItem = document.querySelectorAll('.props__item_four');

propsList[3].append(propsItem[0]);

propsItem[0].after(propsList[3].children[4]);
propsItem[5].before(propsList[3].children[3]);

<<<<<<< HEAD
const ads = document.querySwlector('.ads');
ads.remove();
=======
const ads = document.querySelector('.ads');
ads.remove();


>>>>>>> 63387e4 (v_1)




