"use strict";

// Задача 1: Получение параметров массива
function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: 0,
			max: 0,
			avg: 0
		};
	}

	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min,
		max,
		avg
	};
}

// Задача 2: Функции-насадки

// Насадка суммирования элементов
function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return arr.reduce((sum, current) => sum + current, 0);
}

// Насадка вычисления разницы максимального и минимального элементов
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	const max = Math.max(...arr);
	const min = Math.min(...arr);

	return max - min;
}

// Насадка вычисления разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

// Насадка вычисления среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	return Number((sumEvenElement / countEvenElement).toFixed());
}

// Задача 3: Агрегатор преобразований
function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}

// Тестовые случаи для проверки
function testCase() {
	console.log("Тестирование getArrayParams:");
	console.log("getArrayParams(-99, 99, 10):", getArrayParams(-99, 99, 10));
	console.log("getArrayParams(1, 2, 3, -100, 10):", getArrayParams(1, 2, 3, -100, 10));
	console.log("getArrayParams(5):", getArrayParams(5));

	console.log("\nТестирование функций-насадок:");
	console.log("summElementsWorker():", summElementsWorker());
	console.log("summElementsWorker(10, 10, 11, 20, 10):", summElementsWorker(10, 10, 11, 20, 10));
	console.log("summElementsWorker(0, 0, 0, -1, -100):", summElementsWorker(0, 0, 0, -1, -100));

	console.log("differenceMaxMinWorker():", differenceMaxMinWorker());
	console.log("differenceMaxMinWorker(10, 10, 11, 20, 10):", differenceMaxMinWorker(10, 10, 11, 20, 10));
	console.log("differenceMaxMinWorker(0, 0, 0, -1, -100):", differenceMaxMinWorker(0, 0, 0, -1, -100));

	console.log("differenceEvenOddWorker():", differenceEvenOddWorker());
	console.log("differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9):",
		differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
	console.log("differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17):",
		differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
	console.log("differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35):",
		differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

	console.log("averageEvenElementsWorker():", averageEvenElementsWorker());
	console.log("averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9):",
		averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
	console.log("averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35):",
		averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

	console.log("\nТестирование makeWork:");
	const arr = [
		[10, 10, 11, 20, 10],
		[67, 10, 2, 39, 88],
		[72, 75, 51, 87, 43],
		[30, 41, 55, 96, 62]
	];
	console.log("makeWork(arr, summElementsWorker):", makeWork(arr, summElementsWorker));
	console.log("makeWork(arr, differenceMaxMinWorker):", makeWork(arr, differenceMaxMinWorker));
	console.log("makeWork(arr, differenceEvenOddWorker):", makeWork(arr, differenceEvenOddWorker));
	console.log("makeWork(arr, averageEvenElementsWorker):", makeWork(arr, averageEvenElementsWorker));
}

// Запуск тестов
testCase();