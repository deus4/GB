"use strict";

/*
Пользователь вводит с клавиатуры число, если ввёл текст, 
необходимо вывести что значение задано неверно.

Создать фукнцию, которая высчитывает 13% от данного числа и выводит 
в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

function salaryAfterTax(inputSalary) {
  const salary = Number(inputSalary);

  if (Number.isFinite(salary)) {
      const taxAmount = 0.13 * salary;
      const afterTax = salary - taxAmount;
      const roundedAfterTax = afterTax.toFixed(2);
      console.log(`Размер заработной платы за вычетом налогов равен ${roundedAfterTax}`);
  } else {
      console.log("Значение задано неверно.");
  }
}

const userInput = prompt("Введите вашу заработную плату:");
salaryAfterTax(userInput);


// function salaryAfterTax() {
//   const salary = +prompt("Введите вашу заработную плату:");
//   if (!isNaN(salary)) {
//       const taxAmount = 0.13 * salary;
//       const afterTax = salary - taxAmount;
//       console.log(`Размер заработной платы за вычетом налогов равен ${afterTax}`);
//   } else {
//       console.log("Значение задано неверно.");
//   }
// }

// salaryAfterTax();


