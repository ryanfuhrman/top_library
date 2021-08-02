let booksList = document.querySelector(".books-list");
let addBookSubmit = document.querySelector(".add-book-form-submit-button");
let refreshBookListButton = document.querySelector(".refresh-books-button");
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

function addBookToLibrary(book) {
  // do stuff here
  return myLibrary.push(book);
}

function displayBooks(books) {
  booksList.innerHTML = "";
  books.map(function ({ title, author, pages, read }) {
    let bookLi = document.createElement("li");
    bookLi.className = "book-list-item";

    bookLi.innerHTML = `
      <div>
        <p class="book-title">${title}</h1>
        <p class="book-author">${author}</p>
        <p class="book-pages">${pages}</p>
        <p class="book-read">${read}</p>
      </div>
    `;
    return booksList.appendChild(bookLi);
  });
}

function handleBookSubmisson(e) {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let readStatus = document.querySelector("#read").checked;

  let newBook = new Book(`${title}`, `${author}`, `${pages}`, `${readStatus}`);

  addBookToLibrary(newBook);
  displayBooks(myLibrary);
}

let extremeOwnership = new Book("Extreme Ownership", "Some Seals", 324, true);
let leviathanWakes = new Book("Leviathan Wakes", "James S.A. Corey", 865, true);
let slaughterhouseFive = new Book(
  "Slaughterhouse-Five",
  "Kurt Vonnegut Jr.",
  245,
  true
);
let recursion = new Book("Recursion", "Blake Crouch", 579, false);

addBookToLibrary(extremeOwnership);
addBookToLibrary(leviathanWakes);
addBookToLibrary(slaughterhouseFive);
addBookToLibrary(recursion);

displayBooks(myLibrary);

addBookSubmit.addEventListener("click", handleBookSubmisson);
refreshBookListButton.addEventListener("click", handleRefreshBookList);
