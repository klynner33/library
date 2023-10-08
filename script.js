
const modal = document.querySelector("#modal");
const addBookButton = document.querySelector("#add-book-button");
const closeModalButton = document.querySelector("#close-modal-button");
const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");
const inputPages = document.querySelector("#input-pages");
const bookCardContainer = document.querySelector('.book-card-container');    
const submitBookButton = document.querySelector('.submit-book-button');
const cardTitle = document.querySelector('.title');
const cardAuthor = document.querySelector('.author');
const cardPages = document.querySelector('.pages');

/* MODAL */
addBookButton.addEventListener('click', () => {
    modal.showModal();
    })

closeModalButton.addEventListener('click', () => {
    modal.close();
})

submitBookButton.addEventListener('click', () => {
    cardTitle.innerHTML = inputTitle.value;
    cardAuthor.innerHTML += inputAuthor.value;
    cardPages.innerHTML += inputPages.value;
    bookCardContainer.style.display = 'flex';

})

/* ARRAY TO DISPLAY IN CARD */
const myLibrary = [
    {
        'title': "Harry Potter",
        'author': "JK Rowling",
        'pages': 100,
        'read': true
    },
    {
        'title': 'Diary of a Wimpy Kid',
        'author': 'unknown',
        'pages': 90,
        'read': false
    }
];




    

console.log(myLibrary[0]);

function Book() {

}

function addBookToLibrary() {

}














// const books = document.querySelector('.books');

// const myLibrary = [{
//     title: 'book1',
//     author: 'me',
//     pages: 500,
//     read: true
// }, {
//     title: 'book2',
//     author: 'you',
//     pages: 5000,
//     read: false
// }];

// function createBookElement(el, content, className) {
//     const element = document.createElement(el);
//     element.textContent = content
//     element.setAttribute('class', className);
//     return element;
// }

// function createReadElement(bookItem, book) {
//     const read = document.createElement('div');
//     read.setAttribute('class', 'book-read');
//     read.appendChild(createBookElement('h1', "Read?", "book-read-title"));
//     const checkbox = document.createElement('input')
//     checkbox.type = "checkbox";
//     checkbox.addEventListener('click', (e) => {
//         if(e.target.checked) {
//             bookItem.setAttribute('class', 'card book read-checked');
//             book.read = "true";
//             renderBooks();
//         } else {
//             bookItem.setAttribute('class', 'card book read-unchecked');
//             book.read = false;
//             renderBooks();
//         }
//         if(book.read) {
//             checkbox.check = true;
//             bookItem.setAttribute('class', 'card book read-checked');
//         } 
//         read.appendChild(checkbox);
//         return read;
//     })
// }

// function createBookItem(book, index) {
//     const bookItem = document.createElement('div');
//     bookItem.setAttribute('id', index)
//     bookItem.setAttribute('key', index)
//     bookItem.setAttribute('class', 'card book')
//     bookItem.appendChild(createBookElement('h1', `Title: ${book.title}`, "book-title"));
//     bookItem.appendChild(createBookElement('h1', `Author: ${book.author}`, "book-author"));
//     bookItem.appendChild(createBookElement('h1', `Pages: ${book.pages}`, "book-pages"));
//     bookItem.append(createReadElement(bookItem, book));
//     books.insertAdjacentElement("afterbegin", bookItem);
// }

// function renderBooks() {
//     myLibrary.map((book, index) => {
//         createBookItem(book, index) 
//     })
// }

// renderBooks();
















// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// };


// // function renderBook() {
// //     let libraryElement = document.querySelector("#library");
// //     libraryElement.innerHTML = '';
// //     for (let i = 0; i <= myLibrary.length; i++) {
// //         let book = myLibrary[i];
// //         let bookElement = document.createElement('div');
// //         bookElement.innerHTML = `
// //             <div class="card-header">
// //                 <h3 class="title">${book.title}</h3>
// //                 <h5 class="author">by ${book.author}</h5>
// //             </div>
// //             <div class="card-body">
// //                 <p>${book.pages} pages</p>
// //                 <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
// //                 <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
// //                 <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle</button> `
// //         libraryElement.appendChild(bookElement);
// //     }
// // }

// // function removeBook(index) {
// //     myLibrary.splice(index, 1)
// // }

// function addBookToLibrary() {
//     let title = document.querySelector('#title').value;
//     let author = document.querySelector('#author').value;
//     let pages = document.querySelector('#pages').value;
//     let read = document.querySelector('#read-book').checked;
//     let newBook = new Book(title, author, pages, read);
//     myLibrary.push(newBook);
//     // renderBook();
// };

// let newBookBtn = document.querySelector('#add-book-button');
//     newBookBtn.addEventListener('click', function() {
//         let newBookForm = document.querySelector('#add-book-form');
//             newBookForm.style.display = 'block';
//     })

// document.querySelector('#submit-book').addEventListener('click', function(event) {
//     event.preventDefault();
//     addBookToLibrary();
// })