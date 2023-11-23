class Book 
{
    public isbn: string;
    public bookName: string;
    public bookTitle: string;
    public bookAuthor: string;
    public quantityOfBooks: number;
    public bookPrice: number;
  
    constructor(isbn: string,bookName: string,bookTitle: string,bookAuthor: string,quantityOfBooks: number,bookPrice: number) 
    {
      this.isbn = isbn;
      this.bookName = bookName;
      this.bookTitle = bookTitle;
      this.bookAuthor = bookAuthor;
      this.quantityOfBooks = quantityOfBooks;
      this.bookPrice = bookPrice;
    }
  
    calculatebillamount(): number 
    {
      return this.quantityOfBooks * this.bookPrice;
    }
  
    displayBookDetails(): void 
    {
      console.log(`isbn: ${this.isbn}`);
      console.log(`bookname: ${this.bookName}`);
      console.log(`booktitle: ${this.bookTitle}`);
      console.log(`bookauthor: ${this.bookAuthor}`);
      console.log(`quantityofBooks: ${this.quantityOfBooks}`);
      console.log(`bookprice: ${this.bookPrice}`);
    }
}
const myBook = new Book('779900', 'xyz', 'magic story', 'Tom', 5, 100);
myBook.displayBookDetails();
console.log(`Bill Amount: ${myBook.calculatebillamount()}`);