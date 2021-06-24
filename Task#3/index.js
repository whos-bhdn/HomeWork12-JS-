// Завдання 3
// Необхідно реалізувати наступний функціонал як на відео images, а саме:
// •	на сторінці знаходяться три пустих блоки div. 
// •	при кліку на блок виводить функція prompt() в яку ми вводи url адресу зображення
// •	це зображення стає фоном для цього конкретного блоку 
// ------------------------------------------------------------------------------------------

// container.insertAdjacentHTML('beforeend', img) --- рекомендація Віталіка для вставки 
// img в блок
// ------------------------------------------------------------------------------------------
// !Img inserts outside the block
// ------------------------------------------------------------------------------------------



const container = document.querySelector('.container');
const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const block3 = document.querySelector('#block3');

block1.addEventListener('click', handler, true);
block2.addEventListener('click', handler2, true);
block3.addEventListener('click', handler3, true);

const img = document.createElement('img');
    
function handler (event) {
   if(event.type == 'click') {
      img.src = prompt('Enter adress of img1');
      container.appendChild(img)
   }
}

function handler2 (event) {
   if(event.type == 'click') {
      img.src = prompt('Enter adress of img2');
      container.appendChild(img)
      
   }
}

function handler3 (event) {
   if(event.type == 'click') {
      img.src = prompt('Enter adress of img3');
      container.appendChild(img)
   }

}

