"use strict";

// Задание 1: 

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. 
// Функция должна вывести в консоль строку: 
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function myFunction(name, surname, age) {
//     console.log(`Привет, ${name} ${surname}. Вы уже большой, вам ${age}.`);
// }
// myFunction("Артур", "Федоров", "45");

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного ей числа.

// function myFunction2(number) {
//     return number ** 2;
// }
// console.log(myFunction2(21));


// 3. Создайте функцию, которая принимает число. 
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function myFunction3(number) {
//     if (!Number.isFinite(number)) {
//         return;
//     }
//     if (number > 0) {
//         console.log("+++");
//     } else if (number < 0) {
//         console.log("---");
//     }
// }

// myFunction3(true);


// Задание 2: 
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в 
// консоль сумму этих чисел.

// function threeNumbers (number1, number2, number3) {
//     console.log(number1 + number2 + number3);
// }
// const number1 = 1;
// const number2 = 2;
// const number3 = 3;
// threeNumbers(number1, number2, number3);

// Создайте три переменные, со случайными значениями и продемонстрируйте работу 
// данной функции.
// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.


// function sumThreeNUmbers(number1, number2, number3) {
//     console.log(number1 + number2 + number3);
// }

// const number1 = 1;
// const number2 = 2;
// const number3 = 3;
// sumThreeNUmbers(number1, number2, number3);


// Задание 3: 

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень 
// переданного числа. 
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную 
// сумму в консоль. 

// function myFunction2(number) {
//     return number ** 0.5;
// }
// console.log(myFunction2(3) + myFunction2(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных 
// аргументов функции и вернет найденное значение.

// function myFunction4(number1, number2) {
//     if (number1 < number2) {
//         return number1;
//     } 
//     return number2;
// }
// console.log(myFunction4(5,8)); 


// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает 
// день недели на русском языке.

// function dayOfWeek(day) {
//     switch(day) {
//         case 1 : return "понедельник" 
//         case 2 : return "вторник" 
//         case 3 : return "среда" 
//         case 4 : return "четверг" 
//         case 5 : return "пятница" 
//         case 6 : return "суббота" 
//         case 7 : return "воскресенье" 
//         default : return "Такого дня недели нет"
//     }
// }
// console.log(dayOfWeek(10));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в 
// зависимости от времени суток (утро, день, вечер, ночь), например: 
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// function helloFunc(name) {
//     const currentDate = new Date();
//     const currentHour = currentDate.getHours();
//     if (currentHour < 6) {
//         return "Доброй ночи, " + name;
//     } else if (currentHour < 12) {
//         return "Доброго утра, " + name;
//     } else if (currentHour < 18) {
//         return "Добрый день, " + name;
//     } else if (currentHour < 24) {
//         return "Доброго вечера, " + name;
//     }
// }
// console.log(helloFunc("Иван"));


// /// /// /// ///

// штука JSDock /** */ пишется под каждую функцию (если вообще пишется)
// /**
//  * Возводит в квадрат
//  * @param {number} num число, которое возводится в квадрат
//  * @returns {number} квадрат значения num
//  */
// function fn(num) {
//     const doubled = num ** 2;
//     return doubled
// }

// fn()

// /// /// /// ///

// Реализовать функцию round5, которой передается целое число, функция должна 
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся 
// на 5.

// function round5(val) {
//     const ren = Math.round(val / 5) * 5;
//     if(ren === 0) {
//         return 0;
//     }
//     return ren;
// }

// console.log(round5(0)); // 0
// console.log(round5(2)); // 0
// console.log(round5(3)); // 5
// console.log(round5(11)); // 10
// console.log(round5(14)); // 15
// console.log(round5(50)); // 50
// console.log(round5(-2)); // 0
// console.log(round5(-3)); // -5


// function pow(x, n) {
//     if(n === 1) {
//         return x;
//     }
//     return x * pow(x, n - 1);
// }

// console.log(pow(5, 0));


// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо 
// чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, 
// кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна 
// выводить слово «FizzBuzz»

// function func() {
//     for(let i = 1; i < 101; i++) {
//         if (i % 15 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// func();

// Решать аналогичные задачи:
// https://www.codewars.com/
// https://leetcode.com/