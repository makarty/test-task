// Блок 1: Работа с событиями, асинхронностью, DOM деревом.

// Задача 1:
// Напишите функцию, которая при клике на кнопку с id "btn" меняет цвет фона страницы
// на случайный цвет из заданного списка цветов.Каждый раз при клике должен
// меняться цвет фона страницы.
function changeBackground(event) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Задача 2:
// Напишите асинхронную функцию, которая делает запрос к серверу по заданному URL
// с использованием fetch.Функция должна вернуть результат запроса в виде Promise.
// Для выполнения задачи можно использовать открытый ресурс для тестирования
// HTTP - запросов, например, JSONPlaceholder(https://jsonplaceholder.typicode.com/). Этот
// ресурс предоставляет фейковый REST API, с которым можно взаимодействовать,
// отправляя различные типы HTTP - запросов.
// Для выполнения задачи, вам потребуется отправить GET - запрос к URL
// "https://jsonplaceholder.typicode.com/posts" и обработать полученный результат.
async function fetchData() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}


// Задача 3:
// У вас есть следующая HTML - разметка:

// html
// Copy code
// < div id = "container" >
//  <div class="item">Item 1</div>
//  <div class="item">Item 2</div>
//  <div class="item">Item 3</div>
// </div >

// Напишите функцию, которая при клике на каждый элемент с классом "item" добавляет
// к нему класс "selected", а при повторном клике удаляет класс "selected".Обработчики
// событий должны быть добавлены только к элементам с классом "item" с
// использованием делегирования событий.
function changeClass(event) {
    if (!event.target.classList.contains("item")) {
        return;
    }
    event.target.classList.toggle("selected");
}


// Задача 4:
// Напишите функцию, которая при наведении курсора на элемент с классом "tooltip"
// показывает всплывающую подсказку с текстом, указанным в атрибуте "data-tooltip"
// этого элемента.Подсказка должна быть позиционирована относительно курсора
// мыши.
function alt(event) {
    const tooltipText = event.target.getAttribute('data-tooltip');
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip-text');
    tooltipElement.textContent = tooltipText;
    document.body.appendChild(tooltipElement);
}


function alt_out(event) {
    const tooltipElement = document.querySelector('.tooltip-text');
    document.body.removeChild(tooltipElement);
}


function alt_move(event) {
    const tooltipElement = document.querySelector('.tooltip-text');

    const x = event.clientX;
    const y = event.clientY;

    tooltipElement.style.top = `${y}px`;
    tooltipElement.style.left = `${x}px`;
}

//--------------------------------------------------------------------------------------

const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
const btn = document.getElementById("btn");
const container = document.getElementById("container");
const tooltip = document.querySelector('.tooltip');

btn.addEventListener("click", changeBackground);

container.addEventListener("click", changeClass);

tooltip.addEventListener('mouseover', alt);
tooltip.addEventListener('mouseout', alt_out);
tooltip.addEventListener('mousemove', alt_move);
