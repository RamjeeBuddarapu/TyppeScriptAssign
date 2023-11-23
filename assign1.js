var Book = /** @class */ (function () {
    function Book(isbn, bookName, bookTitle, bookAuthor, quantityOfBooks, bookPrice) {
        this.isbn = isbn;
        this.bookName = bookName;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.quantityOfBooks = quantityOfBooks;
        this.bookPrice = bookPrice;
    }
    Book.prototype.calculatebillamount = function () {
        return this.quantityOfBooks * this.bookPrice;
    };
    Book.prototype.displayBookDetails = function () {
        console.log("isbn: ".concat(this.isbn));
        console.log("bookname: ".concat(this.bookName));
        console.log("booktitle: ".concat(this.bookTitle));
        console.log("bookauthor: ".concat(this.bookAuthor));
        console.log("quantityofBooks: ".concat(this.quantityOfBooks));
        console.log("bookprice: ".concat(this.bookPrice));
    };
    return Book;
}());
var myBook = new Book('779900', 'xyz', 'magic story', 'Tom', 5, 100);
myBook.displayBookDetails();
console.log("Bill Amount: ".concat(myBook.calculatebillamount()));
