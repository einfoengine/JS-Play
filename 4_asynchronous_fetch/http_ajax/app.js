const dataSrc = '../text.txt';
var myButton = document.querySelector("#test-button");
myButton.addEventListener('click', loadData);

function loadData() {
    // console.log("I am working!");
    // create hxr object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', dataSrc, true);
    // xhr.onload = function() {
    //     if (this.status === 200) {
    //         console.log(this);
    //     }
    // }
    xhr.onreadystatechange = function() {
        if (this.status === 200 && this.readyState === 4) { // to see all the state of hml http request remove the ready state
            console.log(this);
        }
    }
    xhr.send();
}