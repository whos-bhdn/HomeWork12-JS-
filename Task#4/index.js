// Завдання 4
// Необхідно реалізувати наступний функціонал як на відео text,
//  а саме:
// •	на сторінці знаходиться список ol з 6ма кольорами, 
// написаними англійською мовою.
// •	потрібно щоб в при кліку на поточний пункт замалювався 
// тим кольором, який в ньому записаний.
// •	постарайтесь зробити даний функціонал використовуючи
//  тільки одну функцію

// ------------------------------------------------------------------------------------------
// !DONE (But on in one function)
// ------------------------------------------------------------------------------------------


const listEl1 = document.querySelector('.listEl1');
const listEl2 = document.querySelector('.listEl2');
const listEl3 = document.querySelector('.listEl3');
const listEl4 = document.querySelector('.listEl4');
const listEl5 = document.querySelector('.listEl5');
const listEl6 = document.querySelector('.listEl6');

listEl1.addEventListener('click', handler, true);
listEl2.addEventListener('click', handler2, true);
listEl3.addEventListener('click', handler3, true);
listEl4.addEventListener('click', handler4, true);
listEl5.addEventListener('click', handler5, true);
listEl6.addEventListener('click', handler6, true);


function handler(e){
   if(event.type == 'click') {
      listEl1.style.color = 'red';
   }
}

function handler2(e){
   if(event.type == 'click') {
      listEl2.style.color = 'blue';
   }
}

function handler3(e){
   if(event.type == 'click') {
      listEl3.style.color = 'yellow';
   }
}

function handler4(e){
   if(event.type == 'click') {
      listEl4.style.color = 'green';
   }
}

function handler5(e){
   if(event.type == 'click') {
      listEl5.style.color = 'white';
   }
}

function handler6(e){
   if(event.type == 'click') {
      listEl6.style.color = 'violet';
   }
}
