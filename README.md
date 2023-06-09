# Тестовое задание

Решение предоставил Макаров Артём Евгеньевич, студент 3 курса СФУ ИКИТ.

## Запуск

Для блока 1:

- Открыть файл main.html

Для блока 2: 

Запустить в консоли команду

```bash
node server.js
```
Перейти на

http://localhost:3000/ - корневой каталог

http://localhost:3000/api/users - список юзеров

http://localhost:3000/api/sum - демострация работы функции сложения

Ниже представлено описание заданий

## Блок 1: Работа с событиями, асинхронностью, DOM деревом

### Задача 1

Напишите функцию, которая при клике на кнопку с id "btn" меняет цвет фона страницы на случайный цвет из заданного списка цветов. Каждый раз при клике должен меняться цвет фона страницы.

### Задача 2

Напишите асинхронную функцию, которая делает запрос к серверу по заданному URL с использованием fetch. Функция должна вернуть результат запроса в виде Promise. Для выполнения задачи можно использовать открытый ресурс для тестирования HTTP-запросов, например, JSONPlaceholder (https://jsonplaceholder.typicode.com/). Этот ресурс предоставляет фейковый REST API, с которым можно взаимодействовать, отправляя различные типы HTTP-запросов. Для выполнения задачи, вам потребуется отправить GET-запрос к URL "https://jsonplaceholder.typicode.com/posts" и обработать полученный результат.

### Задача 3

У вас есть следующая HTML-разметка:

```html
<div id="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

Напишите функцию, которая при клике на каждый элемент с классом "item" добавляет к нему класс "selected", а при повторном клике удаляет класс "selected". Обработчики событий должны быть добавлены только к элементам с классом "item" с использованием делегирования событий.

### Задача 4

Напишите функцию, которая при наведении курсора на элемент с классом "tooltip" показывает всплывающую подсказку с текстом, указанным в атрибуте "data-tooltip" этого элемента. Подсказка должна быть позиционирована относительно курсора мыши.

## Блок 2: Работа с Node.js, Express, TypeScript

### Задача 1

Создайте простой сервер на Node.js с использованием Express. Сервер должен отвечать на GET-запросы по пути "/api/users" и возвращать JSON-объект с массивом пользователей.

### Задача 2

Напишите TypeScript-интерфейс для объекта пользователя, который содержит поля "id" (число), "name" (строка) и "email" (строка).

### Задача 3

Создайте функцию на TypeScript, которая принимает два числа в качестве аргументов и возвращает их сумму.

### Задача 4

Напишите middleware функцию для Express, которая будет логировать каждый входящий запрос (метод, URL, время выполнения). Middleware функция должна быть применена ко всем маршрутам вашего сервера.

-------------

Для первого блока задач, связанных с JavaScript, кандидат может предоставить отдельные файлы или один файл с кодом, содержащим решения для каждой задачи. Каждая задача может быть представлена в виде функции или кодового блока с комментариями, объясняющими решение. Кандидат также может предоставить входные данные или тестовые случаи, если это необходимо для проверки решений.

Для второго блока задач, связанных с Node.js, Express и TypeScript, кандидат может предоставить проект или файлы, содержащие код для каждой задачи. Код должен быть организован таким образом, чтобы можно было легко понять структуру проекта и найти решения для каждой задачи. Если задачи требуют настроек или конфигурационных файлов, они также должны быть включены.
