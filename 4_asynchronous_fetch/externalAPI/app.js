const jokeApi = 'http://api.icndb.com/jokes/random';
const getJoke = document.querySelector("#get-joke");

getJoke.addEventListener('click', function(e) {
    const number = document.querySelector("#number-of-jokes").value;
    const jokesList = document.querySelector('.jokes');
    const xhr = new XMLHttpRequest();
    const jokeReq = `${jokeApi}/${number}`;

    xhr.open('GET', jokeReq, true);
    xhr.onload = function() {
        if (this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            let output = '';
            if (jokes.type === 'success') {
                jokes.value.forEach(element => {
                    output += `<li>${element.joke}</li>`;
                    // console.log(element.joke);
                });
            } else {
                output = `<li>Sorry! Something went wrong<li>`
            }
            jokesList.innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
});