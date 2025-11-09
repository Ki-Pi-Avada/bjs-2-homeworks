"use strict";

// Задача 1: Решение квадратных уравнений
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  const sqrtDiscriminant = Math.sqrt(discriminant);
  const root1 = (-b + sqrtDiscriminant) / (2 * a);
  const root2 = (-b - sqrtDiscriminant) / (2 * a);

  return [root1, root2];
}

// Задача 2: Калькулятор ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Проверка и преобразование типов
  const percentNum = parseFloat(percent);
  const contributionNum = parseFloat(contribution);
  const amountNum = parseFloat(amount);
  const countMonthsNum = parseFloat(countMonths);

  // Проверка на корректность преобразования
  if (isNaN(percentNum) || isNaN(contributionNum) || isNaN(amountNum) || isNaN(countMonthsNum)) {
    return false;
  }

  // Преобразование процентной ставки
  const monthlyPercent = percentNum / 100 / 12;

  // Тело кредита
  const loanBody = amountNum - contributionNum;

  // Если тело кредита равно 0 (взнос равен сумме кредита)
  if (loanBody <= 0) {
    return 0;
  }

  // Расчет ежемесячного платежа
  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonthsNum - 1));

  // Общая сумма выплат
  const totalAmount = monthlyPayment * countMonthsNum;

  // Округление до двух знаков после запятой
  return Number(totalAmount.toFixed(2));
}

// Тестовые случаи для проверки
function testCase() {
  console.log("Тестирование решения квадратных уравнений:");
  console.log("x² - 3x + 2 = 0:", solveEquation(1, -3, 2)); // [2, 1]
  console.log("x² - 2x + 1 = 0:", solveEquation(1, -2, 1)); // [1]
  console.log("x² + 2x + 5 = 0:", solveEquation(1, 2, 5)); // []
  console.log("x² - 4 = 0:", solveEquation(1, 0, -4)); // [2, -2]

  console.log("\nТестирование ипотечного калькулятора:");
  console.log("10, 0, 50000, 12:", calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
  console.log("10, 1000, 50000, 12:", calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
  console.log("10, 0, 20000, 24:", calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
  console.log("10, 1000, 20000, 24:", calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
  console.log("10, 20000, 20000, 24:", calculateTotalMortgage(10, 20000, 20000, 24)); // 0
  console.log("10, 0, 10000, 36:", calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
  console.log("15, 0, 10000, 36:", calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52

  // Проверка на строковые параметры
  console.log("\nПроверка преобразования строк:");
  console.log("'10', '0', '50000', '12':", calculateTotalMortgage('10', '0', '50000', '12')); // 52749.53
  console.log("Некорректные данные:", calculateTotalMortgage('abc', 0, 50000, 12)); // false
}

// Запуск тестов
testCase();