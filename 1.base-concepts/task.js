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
  if (typeof percent === 'string') {
    percent = parseFloat(percent);
  }
  if (typeof contribution === 'string') {
    contribution = parseFloat(contribution);
  }
  if (typeof amount === 'string') {
    amount = parseFloat(amount);
  }
  if (typeof countMonths === 'string') {
    countMonths = parseFloat(countMonths);
  }

  // Проверка на корректность чисел
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  // Преобразование процентной ставки
  const monthlyPercent = percent / 100 / 12;

  // Тело кредита
  const loanBody = amount - contribution;

  // Если тело кредита равно 0 или отрицательное (взнос больше или равен сумме кредита)
  if (loanBody <= 0) {
    return 0;
  }

  // Расчет ежемесячного платежа по формуле аннуитета
  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

  // Общая сумма выплат
  const totalAmount = monthlyPayment * countMonths;

  // Округление до двух знаков после запятой и преобразование в число
  return Number(totalAmount.toFixed(2));
}