
const modal = document.querySelector("#modal");
const addBookButton = document.querySelector("#add-book-button");
const closeModalButton = document.querySelector("#close-modal-button");
const bookCardContainer = document.querySelector('#book-card-container');    
const submitBookButton = document.querySelector('#submit-book-button');
const cardTitle = document.querySelector('.title');
const cardAuthor = document.querySelector('.author');
const cardPages = document.querySelector('.pages');
const readButton = document.querySelector('#read-button');
const tester = document.querySelector('#tester');
let inputReadBook = document.querySelector('#input-read-book');

/* MODAL */
addBookButton.addEventListener('click', () => {
    modal.showModal();
    })

closeModalButton.addEventListener('click', () => {
    modal.close();
})

/* Add Books */
submitBookButton.addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

    function render() {
        let libraryEl = document.querySelector('#library');
        libraryEl.innerHTML = '';
        for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i];
            let bookEl = document.createElement('div.book-cards');
            bookEl.innerHTML = `
                <div class="card-container">
                    <p class="title">${book.title}</p>
                    <p class="author">By ${book.author}</p>
                    <p class="pages">${book.pages} pages</p>
                    <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                    <button class="remove-button" onclick="removeBook(${i})">Remove</button>
                </div>
            `
            libraryEl.appendChild(bookEl);
        }
    }

    function removeBook(index) {
        myLibrary.splice(index, 1);
        render();
    }

function addBookToLibrary() {
    let inputTitle = document.querySelector("#input-title").value;
    let inputAuthor = document.querySelector("#input-author").value;
    let inputPages = document.querySelector("#input-pages").value;
    let inputReadBook = document.querySelector('#input-read-book').checked;
    let newBook = new Book(inputTitle, inputAuthor, inputPages, inputReadBook);
    myLibrary.push(newBook);
    render();
}