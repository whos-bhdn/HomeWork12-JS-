
// Завдання 2
// Необхідно реалізувати наступний функціонал як на відео secret, а саме:
// •	по замовчуванню блок має певний стиль і наступний текст: “У мене є секрет!”
// •	при наведенні на блок його стиль змінюєть і текст стає наступним: “Хочеш знати який”
// •	при натисканні і утриманні клавіші мишки знову по блоку стиль змінюється і текст стає наступним: “А я тобі не скажу”
// •	при відпусканні клавіші мишки стиль і текст знову стає “Хочеш знати який”
// •	при відведенні мишки стиль стає як базовий і текст “У мене є секрет!”
// ------------------------------------------------------------------------------------------
// !DONE
// ------------------------------------------------------------------------------------------
const block = document.querySelector('.block');
block.onmouseenter = handler;
block.onmousedown = handler2;
block.onmouseup = handler3;
block.onmouseleave = handler4;


function handler (event) {
   if (event.type == 'mouseenter') {
      event.target.style.background = 'yellow';
      event.target.innerHTML = "“Хочеш знати який”";
   }
}

function handler2(event){
   if(event.type == 'mousedown') {
      event.target.style.background = 'orange';
      event.target.innerHTML = '“А я тобі не скажу”'
   }
}

function handler3(event){
   if(event.type == 'mouseup') {
      event.target.style.background = 'yellow';
      event.target.innerHTML = '“Хочеш знати який”';
   }
}

function handler4(event){
   if(event.type == 'mouseleave') {
      event.target.style.background = 'violet';
      event.target.innerHTML = '“У мене є секрет!”'
   }
}