
// On add task
document.addEventListener('mousemove', function(e){
    console.log(e.clientX, e.clientY);
    document.body.setAttribute('style', `background: rgb(${e.clientY},${e.clientX}, 40)`);
});