let booksList = document.querySelector(".books-list");
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${
    this.read === true ? `read` : `not read yet`
  }.`;
};

let extremeOwnership = new Book("Extreme Ownership", "Some Seals", 324, true);

console.log(extremeOwnership.info());

function addBookToLibrary(book) {
  // do stuff here
  return myLibrary.push(book);
}

addBookToLibrary(extremeOwnership);
