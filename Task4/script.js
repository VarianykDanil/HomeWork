const select = document.querySelector('select'); 
const body = document.querySelector('body'); 
function changeColor(event) { 
  const color = event.target.value; 
  body.style.backgroundColor = color; 
}

select.addEventListener('change', changeColor); 

// здесь мы работаем с тегом select  потому что наш тег работет как список в котором храняться все наши options он не может
//быть привязам поскольку не являеться событием елемента и нам будет проше вытаскивать из списка нашего все елементы option

