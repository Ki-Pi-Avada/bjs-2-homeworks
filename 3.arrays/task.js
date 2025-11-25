"use strict";

// Задача 1: Сравнить массивы
function compareArrays(arr1, arr2) {
    // Сравниваем длину массивов и каждый элемент с помощью every
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

// Задача 2: Фильтрация и преобразование массива
function getUsersNamesInAgeRange(users, gender) {
    // Проверка на пустой массив
    if (users.length === 0) {
        return 0;
    }

    // Фильтруем пользователей по полу
    const filteredUsers = users.filter(user => user.gender === gender);

    // Если нет пользователей нужного пола, возвращаем 0
    if (filteredUsers.length === 0) {
        return 0;
    }

    // Считаем сумму возрастов и делим на количество
    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    const averageAge = totalAge / filteredUsers.length;

    return averageAge;
}

// Тестовые случаи для проверки
function testCase() {
    console.log("Тестирование compareArrays:");
    console.log("[1,2,3] === [1,2,3]:", compareArrays([1, 2, 3], [1, 2, 3])); // true
    console.log("[1,2] === [1,2,3]:", compareArrays([1, 2], [1, 2, 3])); // false
    console.log("[1,2,3] === [3,2,1]:", compareArrays([1, 2, 3], [3, 2, 1])); // false
    console.log("[8,9,5,4] === [8,9,5,4,8,3,5]:", compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false
    console.log("[8,1,2] === [8,1,2]:", compareArrays([8, 1, 2], [8, 1, 2])); // true

    console.log("\nТестирование getUsersNamesInAgeRange:");
    const people = [
        {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
        {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
        {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
        {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
        {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
        {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
        {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
        {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
        {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
        {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
        {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
        {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
        {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
        {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
    ];

    console.log("Средний возраст мужчин:", getUsersNamesInAgeRange(people, "мужской"));
    console.log("Средний возраст женщин:", getUsersNamesInAgeRange(people, "женский"));
    console.log("Пустой массив:", getUsersNamesInAgeRange([], "женский"));
    console.log("Несуществующий пол:", getUsersNamesInAgeRange(people, "инопланетянин"));
}

// Запуск тестов
testCase();