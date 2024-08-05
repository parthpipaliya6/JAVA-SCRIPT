class Book {
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;
    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalPrice = rentalPrice;
        this.#copiesAvailable = copiesAvailable;
    }
    buyBook(book) {
        if (this.#copiesAvailable > book) {
            this.#copiesAvailable -= book;
            return `You have bought ${ book } copies.Remaining copies: ${ this.#copiesAvailable }`;
        } else {
            return "Sorry, you don't have enough copies.";
        }
    }
    rentBook(book) {
        if (this.#copiesAvailable > book) {
            this.#copiesAvailable -= book;
            return `You have bought ${book} copies. Remaining copies: ${this.#copiesAvailable} `;
        } else {
            return "Sorry, you don't have enough copies.";
        }
    }
    returnBook(returnBook) {
        if (this.#copiesAvailable <= returnBook) {
            this.#copiesAvailable += returnBook;
            return `You have returned ${ returnBook } copies. Remaining copies: ${ this.#copiesAvailable } `;
        }
        else {
            return "Sorry, you don't have enough copies to return.";
        }
       

    }
    checkAvailability() {
        return this.#copiesAvailable;
    }
    displayBookInfo() {
        return `Title: ${ this.title }, Author: ${ this.#author }, Price: $${ this.#price }, Rental Price: $${ this.#rentalPrice }, Copies Available: ${ this.#copiesAvailable }`;
    }
}


let book1 = new Book("Ramayan", "Valmiki", 19, 12, 19);

console.log(book1.buyBook(10));

console.log(book1.rentBook(5));
console.log(book1.returnBook(6));
console.log(book1.checkAvailability());