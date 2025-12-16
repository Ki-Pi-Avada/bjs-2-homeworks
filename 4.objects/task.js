"use strict";


function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}


Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};


Student.prototype.addMarks = function(...marksToAdd) {

    if (this.marks) {
        this.marks.push(...marksToAdd);
    }
};


Student.prototype.getAverage = function() {

    if (!this.marks || this.marks.length === 0) {
        return 0;
    }


    const sum = this.marks.reduce((total, mark) => total + mark, 0);


    return sum / this.marks.length;
};


Student.prototype.exclude = function(reason) {

    delete this.subject;
    delete this.marks;


    this.excluded = reason;
};


function testCase() {
    console.log("Создание студента:");
    let student1 = new Student("Василиса", "женский", 19);
    console.log(student1);

    console.log("\nУстановка предмета:");
    student1.setSubject("Algebra");
    console.log("Предмет:", student1.subject);

    console.log("\nДобавление оценок:");
    student1.addMarks(4, 5, 4, 5);
    console.log("Оценки:", student1.marks);

    console.log("\nВычисление среднего балла:");
    console.log("Средний балл до добавления оценок:", new Student("Иван", "мужской", 20).getAverage());
    console.log("Средний балл Василисы:", student1.getAverage());

    console.log("\nОтчисление студента:");
    let student2 = new Student("Артём", "мужской", 25);
    student2.setSubject("Geometry");
    console.log("До отчисления:", student2);
    student2.exclude('плохая учёба');
    console.log("После отчисления:", student2);

    console.log("\nПроверка добавления оценок отчисленному студенту:");
    student2.addMarks(5, 4, 3);
    console.log("Оценки после отчисления:", student2.marks);
    console.log("Средний балл после отчисления:", student2.getAverage());

    console.log("\nДополнительные тесты:");
    let student3 = new Student("Мария", "женский", 21);
    student3.setSubject("Физика");
    student3.addMarks(5, 5, 5);
    console.log("Мария - оценки:", student3.marks);
    console.log("Мария - средний:", student3.getAverage());

    student3.addMarks(4, 4);
    console.log("Мария - оценки после добавления:", student3.marks);
    console.log("Мария - новый средний:", student3.getAverage());
}

// Запуск тестов
testCase();