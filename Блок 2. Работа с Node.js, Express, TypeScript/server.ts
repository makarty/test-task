// Блок 2: Работа с Node.js, Express, TypeScript

import { response } from "express";
import { request } from "http";

// Задача 1:
// Создайте простой сервер на Node.js с использованием Express.Сервер должен
// отвечать на GET - запросы по пути "/api/users" и возвращать JSON - объект с массивом
// пользователей.

var express = require("express");
var app = express();
const router = express.Router();

var port = 3000;

// Задача 2:
// Напишите TypeScript - интерфейс для объекта пользователя, который содержит поля
// "id"(число), "name"(строка) и "email"(строка).
interface User {
    id: number,
    name: string,
    email: string,
}


var users: Array<User> = [
    { id: 1, name: "John", email: "JohnDoe@gmail.com" },
    { id: 2, name: "Jane", email: "Jane@gmail.com" },
    { id: 3, name: "Bob", email: "BobUltrakill2000@gmail.com" }
];

// Задача 3:
// Создайте функцию на TypeScript, которая принимает два числа в качестве аргументов
// и возвращает их сумму.
function sum(a: number, b: number) {
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
app.use((request, response, next) => {
    console.log("-------------------------");
    console.log("Тип запроса: ", request.method);
    console.log("URL: ", request.url);
    console.log("Время запроса: ", new Date().toLocaleTimeString());
    next();
});

app.get("/", (request, response) => {
    response.send("<h1>Главная страница</h1>");
});

router.get("/users", (request, response) => {
    response.json(users);
});

router.get("/sum", (request, response) => {
    response.json(sums);
});

app.use("/api", router);

app.listen(port, () => {
    console.log('Server started on port 3000');
});



