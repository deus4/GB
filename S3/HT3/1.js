"use strict";

/*
Создайте функцию которая возводит переданное число в куб, 
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени.
*/

function cubeSum(number) {
    const result = 2 ** 3 + 3 ** 3;
    // либо другой вариант - const result = Math.pow(2, 3) + Math.pow(3, 3);
    console.log(result);
}

cubeSum(5);