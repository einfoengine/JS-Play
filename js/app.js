// Elements
const formLevel = document.getElementById('level-new-task');
let formWrapChild = document.querySelector("#task-form>div");
let inputNewTask = document.querySelector('[name="input-new-task"]');
const submitNewTask = document.getElementById('submit-new-task');


// Set attributes
formWrapChild.setAttribute('class', 'form-group');
formLevel.setAttribute('class', 'text-success d-block');
inputNewTask.setAttribute('class', 'form-control');
inputNewTask.setAttribute('placeholder', 'Enter task here');
submitNewTask.setAttribute('class', 'btn btn-success');

// On add task
document.body.addEventListener('mousemove', function(e){
    console.log(e.clientX, e.clientY);
    document.body.setAttribute('style', `background: rgb(${e.clientY},${e.clientX}, 100)`);
});