"use strict";

/*
Пользователь вводит с клавиатуры число, если ввёл текст, 
необходимо вывести что значение задано неверно.

Создать фукнцию, которая высчитывает 13% от данного числа и выводит 
в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

function SalaryAfterTax() {
  const salary = +prompt("Введите вашу заработную плату:");
  if (!isNaN(salary)) {
      const taxAmount = 0.13 * salary;
      const AfterTax = salary - taxAmount;
      console.log(`Размер заработной платы за вычетом налогов равен ${AfterTax}`);
  } else {
      console.log("Значение задано неверно.");
  }
}

SalaryAfterTax();


