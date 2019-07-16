// Selecting elements
let bookTable = document.querySelector("#books_table");
let bookTableBody = document.querySelector("#books_list");
let bookName = document.querySelector("#book_name");
let bookAuthor = document.querySelector("#book_author");
let bookPrice = document.querySelector("#book_price");
let bookSubmit = document.querySelector("#book_submit");

// Create element
var x = 0;

function createBookEntry() {
    x += 1;

    var tr = document.createElement('tr');
    tr.className = 'book_list_item';

    var id = document.createElement('td');
    id.className = 'book_list_cell';
    id.innerHTML = x;

    var title = document.createElement('td');
    title.className = 'book_list_cell';
    title.innerHTML = bookName.value;

    var author = document.createElement('td');
    author.className = 'book_list_cell';
    author.innerHTML = bookAuthor.value;

    var price = document.createElement('td');
    price.className = 'book_list_cell';
    price.innerHTML = bookPrice.value;

    var action = document.createElement('td');
    action.className = 'record_action';

    var edit = document.createElement('a');
    edit.setAttribute('href', '#');
    edit.innerText = 'Edit';

    var cancel = document.createElement('a');
    cancel.innerText = 'X';
    cancel.setAttribute('href', '#');

    action.appendChild(edit);
    action.appendChild(cancel);

    tr.appendChild(id);
    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(price);
    tr.appendChild(action);

    bookTableBody.appendChild(tr);
}

bookSubmit.addEventListener('click', createBookEntry);