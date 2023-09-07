let newBookBtn = document.querySelector('#add-book-button');
    newBookBtn.addEventListener('click', function() {
        let newBookForm = document.querySelector('#add-book-form');
            newBookForm.style.display = 'block';
    })

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    myLibrary.push();
};

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read-book').checked;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
};

document.querySelector('#submit-book').addEventListener('click', function() {
    event.preventDefault();

    console.log(addBookToLibrary());
})