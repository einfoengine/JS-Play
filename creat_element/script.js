// create element
const ul = document.createElement('ul');
const li = document.createElement('li');
const a = document.createElement('a');

// add attributes
ul.id = "my-ist";
ul.className = "list-group";
ul.className += "my-list";
li.className += "list-group-item";
li.setAttribute("title", "js-list");

// Append child
li.appendChild(a);

// Append content & elements inside



// Console
console.log("Thanks for landing here, hope its helpful for your learning");
console.log(document);
