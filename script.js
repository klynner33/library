document.querySelector('#add-book-button').addEventListener('click', addBookToLibrary)

const myLibrary = [];

function Book(title, author, pages, read) {

    
    myLibrary.push();
};

function addBookToLibrary() {
    document.querySelector('#card-title').innerText = document.querySelector('#title').value 
    document.querySelector('#card-author').innerText = document.querySelector('#author').value
    document.querySelector('#card-pages').innerText = document.querySelector('#pages').value
    document.querySelector('#card-read').innerText = document.querySelector('#read-book').checked
};

// const myBook1 = {
//     title: 'book title',
//     author: 'b',
//     pages: 2
// }

// document.querySelector('#card-title').innerText = myBook1.title;
