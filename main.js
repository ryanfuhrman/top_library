let booksList = document.querySelector(".books-list");
let addBookSubmit = document.querySelector(".add-book-form-submit-button");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [
  new Book("Extreme Ownership", "Some Seals", 324, true),
  new Book("Leviathan Wakes", "James S.A. Corey", 865, true),
  new Book("Slaughterhouse-Five", "Kurt Vonnegut Jr.", 245, true),
  new Book("Recursion", "Blake Crouch", 579, false),
];

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${
    this.read === true ? `read` : `not read yet`
  }.`;
};

Book.prototype.updateReadStatus = function () {
  return !this.read;
};

function addBookToLibrary(book) {
  // do stuff here
  return myLibrary.push(book);
}

function displayBooks(books) {
  booksList.innerHTML = "";
  books.map(function ({ title, author, pages, read }, i) {
    let bookLi = document.createElement("li");
    bookLi.className = "book-list-item";
    bookLi.innerHTML = `
      <div id="${i}">
        <p class="book-title">${title}</h1>
        <p class="book-author">${author}</p>
        <p class="book-pages">${pages}</p>
        <p class="book-read">${read}</p>
        <button class="update-read-status-button">Update Status</button>
        <button class="remove-book-button">Remove Book</button>
      </div>
    `;

    booksList.appendChild(bookLi);
    addButtonLogic();
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

function addButtonLogic() {
  let removeBookButton = document.querySelectorAll(".remove-book-button");
  let updateReadStatusButton = document.querySelectorAll(
    ".update-read-status-button"
  );

  for (let i = 0; i < removeBookButton.length; i++) {
    removeBookButton[i].addEventListener("click", handleRemoveBook);
  }

  for (let i = 0; i < updateReadStatusButton.length; i++) {
    updateReadStatusButton[i].addEventListener("click", handleUpdateReadStatus);
  }
}

function handleRemoveBook(e) {
  let bookToRemove = e.target.parentNode.id;
  myLibrary.splice(bookToRemove, 1);

  displayBooks(myLibrary);
}

function handleUpdateReadStatus(e) {
  let bookID = e.target.parentNode.id;
  myLibrary[bookID].read = myLibrary[bookID].updateReadStatus();

  displayBooks(myLibrary);
}

displayBooks(myLibrary);

addBookSubmit.addEventListener("click", handleBookSubmisson);
