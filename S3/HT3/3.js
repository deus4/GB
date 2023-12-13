"use strict";

/*
Пользователь с клавиатуры вводит 3 числа, 
необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/

function findMaxNumber() {
    const number1 = +prompt("Введите первое число:");
    const number2 = +prompt("Введите второе число:");
    const number3 = +prompt("Введите третье число:");

    const maxNumber = Math.max(number1, number2, number3);

    console.log(`Максимальное значение: ${maxNumber}`);
}

findMaxNumber();


// Вариант с проверкой на число и соответствующим сообщением:
/* 
function findMaxNumber() {
    const number1 = +prompt("Введите первое число:");
    const number2 = +prompt("Введите второе число:");
    const number3 = +prompt("Введите третье число:");
    if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
        const maxNumber = Math.max(number1, number2, number3);
        console.log(`Максимальное значение: ${maxNumber}`);
    } else {
        console.log("Одно или более значений некорректно.");
    }
}

findMaxNumber();
*/