"use strict";
// Блок 2: Работа с Node.js, Express, TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// Задача 1:
// Создайте простой сервер на Node.js с использованием Express.Сервер должен
// отвечать на GET - запросы по пути "/api/users" и возвращать JSON - объект с массивом
// пользователей.
var express = require("express");
var app = express();
var router = express.Router();
var port = 3000;
var users = [
    { id: 1, name: "John", email: "JohnDoe@gmail.com" },
    { id: 2, name: "Jane", email: "Jane@gmail.com" },
    { id: 3, name: "Bob", email: "BobUltrakill2000@gmail.com" }
];
// Задача 3:
// Создайте функцию на TypeScript, которая принимает два числа в качестве аргументов
// и возвращает их сумму.
function sum(a, b) {
    return a + b;
}
var sums = [
    {
        number1: 65,
        number2: 31,
        result: sum(65, 31),
    },
    {
        number1: -32,
        number2: 35,
        result: sum(-32, 35),
    },
    {
        number1: -5,
        number2: -21,
        result: sum(-5, -21),
    }
];
// Задача 4 *:
// Напишите middleware функцию для Express, которая будет логировать каждый
// входящий запрос(метод, URL, время выполнения).Middleware функция должна быть
// применена ко всем маршрутам вашего сервера.
app.use(function (request, response, next) {
    console.log("-------------------------");
    console.log("Тип запроса: ", request.method);
    console.log("URL: ", request.url);
    console.log("Время запроса: ", new Date().toLocaleTimeString());
    next();
});
app.get("/", function (request, response) {
    response.send("<h1>Главная страница</h1>");
});
router.get("/users", function (request, response) {
    response.json(users);
});
router.get("/sum", function (request, response) {
    response.json(sums);
});
app.use("/api", router);
app.listen(port, function () {
    console.log('Server started on port 3000');
});
