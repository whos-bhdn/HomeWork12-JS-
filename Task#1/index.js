// Завдання 1
// Необхідно реалізувати наступний функціонал як на відео color, 
// а саме:
// •	при першому наведенні мишки на блок 
// колір фону має ставати червоний
// •	при відведенні мишки блок має 
// ставати знову фіолетовий
// •	при другому наведенні – блок стає жовтим
// •	при третьому – зеленим
// •	при наступному наведенні 
// все починається спочатку: червоний, жовтий, зелений
// •	так має відбуватися безкінечно по колу
// --------------------------------------------------------------------

// !Works only first two points
// --------------------------------------------------------------------

let block = document.body.querySelector('.block');
let counter = 0;

block.onmouseover = handler;
block.onmouseout = handler1;
// counter++
function handler (event, counter) {
   // if(counter < 2) 
   if (event.type == 'mouseover') {
      event.target.style.background = 'red'
   }
}
function handler1(event) {
   // if(counter < 3)
   if (event.type == 'mouseout') {
      event.target.style.background = ''
   }
}
