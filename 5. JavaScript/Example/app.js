var btn = document.getElementById('btn');

// обработка события наведения на кнопку
btn.onmouseover = function(){
  // изменения содержания элемента
    btn.textContent = "Hello";
}

// обработка события покидания мышкой кнопки
btn.onmouseleave = function(){
    btn.textContent = "Нажми меня";
}

// обработка события нажатия на кнопку
btn.addEventListener('click', function(){
  // изменить тему посредством изменения класса элемента
    btn.classList.toggle('light');
    btn.classList.toggle('dark');
})
