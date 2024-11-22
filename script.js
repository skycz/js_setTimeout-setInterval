
const btn = document.querySelector('.btn'); // Находим элемент на странице с классом 'btn' и сохраняем его в переменной `btn`
let timerId; // // Объявляем переменную `timerId`, которая будет хранить идентификатор таймера, созданного через setInterval или setTimeout
    i = 0; // Объявляем переменную `i`, которая будет использоваться как счётчик или флаг для логики в функции
    
function myAnimation() {
    const elem = document.querySelector('.box'); // Получаем элемент с классом "box"
    let pos = 0; // Начальная позиция элемента

    const id = setInterval(frame, 10); // Устанавливаем интервал, который вызывает функцию frame каждые 10 мс
    function frame() {
        if (pos == 300) { // Если позиция элемента достигла 300 пикселей
            clearInterval(id); // Останавливаем интервал
        } else {
            pos++; // Увеличиваем позицию на 1 пиксель
            elem.style.top = pos + "px"; // Смещаем элемент вниз на текущую позицию
            elem.style.left = pos + 'px'; // Смещаем элемент вправо на текущую позицию
        }
    }
}

btn.addEventListener('click', myAnimation); // Добавляем обработчик нажатия на кнопку, который запускает анимацию



/* const timerId = setTimeout(logger, 2000); // Устанавливаем таймер, который вызовет функцию `logger` через 2000 мс (2 секунды)

function logger() { // Определяем функцию `logger`, которая будет выполняться через заданную задержку
    console.log('text');  // Выводим строку 'text' в консоль
} */



/* btn.addEventListener('click', () => { // При клике запускается таймер с интервалом 500 мс (полсекунды)
    timerId = setInterval(logger, 500); // Функция `logger` будет вызываться каждые 500 мс
}); */


// Создаём таймер с использованием функции `setTimeout`
/* const timerId = setTimeout(function (text) { */
    // Эта функция выполнится через 2000 мс (2 секунды)
    /* console.log(text); */ // Выводим текст, переданный в `setTimeout`
/* }, 2000, 'Hello');  */// Задаём задержку 2000 мс (2 секунды) и передаём аргумент 'Hello'



/* clearInterval(timerId); */ // После вызова clearInterval таймер остановится, и функция перестанет вызываться


/* function logger() { // объявляем функцию 
    if (i === 3) {  // Проверяем условие: если переменная i равна 3
        clearInterval(timerId); // Останавливаем выполнение функции через заданный интервал
    }
    console.log('text');  // Выводим текст 'text' в консоль
    i++; // Увеличиваем значение переменной i на 1
} */


/* let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500)
}, 500); */