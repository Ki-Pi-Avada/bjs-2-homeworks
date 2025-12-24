"use strict";

// Задача 1: Печатное издание

// Базовый класс PrintEditionItem
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    // Геттер для state
    get state() {
        return this._state;
    }

    // Сеттер для state с ограничениями
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    // Метод для починки издания
    fix() {
        this.state = this.state * 1.5;
    }
}

// Класс Magazine
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

// Класс Book
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

// Класс NovelBook
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

// Класс FantasticBook
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

// Класс DetectiveBook
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2: Библиотека

// Класс Library
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Метод добавления книги
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    // Метод поиска книги
    findBookBy(type, value) {
        for (let book of this.books) {
            if (book.hasOwnProperty(type) && book[type] === value) {
                return book;
            }
        }
        return null;
    }

    // Метод выдачи книги
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }
        }
        return null;
    }
}

// Тестовый сценарий
function testScenario() {
    console.log("=== Тестовый сценарий ===");

    // Создаем библиотеку
    const library = new Library("Центральная городская библиотека");
    console.log("Библиотека создана:", library.name);

    // Добавляем несколько печатных изданий разных типов
    library.addBook(new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    ));

    library.addBook(new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    ));

    library.addBook(new NovelBook(
        "Герберт Уэллс",
        "Машина времени",
        1895,
        138
    ));

    library.addBook(new Magazine(
        "Мурзилка",
        1924,
        60
    ));

    console.log("Книг в библиотеке:", library.books.length);

    // Ищем книгу, изданную в 1919 году
    let foundBook = library.findBookBy("releaseDate", 1919);
    if (!foundBook) {
        console.log("Книга 1919 года не найдена, создаем новую...");
        const newBook = new NovelBook(
            "Алексей Толстой",
            "Аэлита",
            1919,
            200
        );
        library.addBook(newBook);
        console.log("Новая книга добавлена:", newBook.name);
    }

    // Выдаем любую книгу
    const issuedBook = library.giveBookByName("Машина времени");
    if (issuedBook) {
        console.log("Книга выдана:", issuedBook.name);
        console.log("Книг осталось в библиотеке:", library.books.length);

        // Повреждаем выданную книгу
        console.log("Состояние книги до повреждения:", issuedBook.state);
        issuedBook.state = 20;
        console.log("Состояние книги после повреждения:", issuedBook.state);

        // Восстанавливаем выданную книгу
        issuedBook.fix();
        console.log("Состояние книги после восстановления:", issuedBook.state);

        // Пытаемся добавить восстановленную книгу обратно в библиотеку
        library.addBook(issuedBook);
        console.log("Книг в библиотеке после возврата:", library.books.length);
    }

    // Дополнительные проверки
    console.log("\n=== Дополнительные проверки ===");
    const sherlock = new PrintEditionItem(
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    );
    console.log("Пример использования PrintEditionItem:");
    console.log("Дата выпуска:", sherlock.releaseDate);
    console.log("Состояние:", sherlock.state);
    sherlock.fix();
    console.log("Состояние после fix():", sherlock.state);

    const picknick = new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    );
    console.log("\nПример использования FantasticBook:");
    console.log("Автор:", picknick.author);
    picknick.state = 10;
    console.log("Состояние:", picknick.state);
    picknick.fix();
    console.log("Состояние после fix():", picknick.state);
}

// Запуск тестового сценария
testScenario();