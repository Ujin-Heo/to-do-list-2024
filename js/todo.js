const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => parseInt(toDo.id) !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function crossOutToDo(event) {
    const li = event.target.parentElement;
    li.classList.toggle("done");
    function handleCrossOut(toDo) {
        const id = parseInt(li.id);
        if(toDo.id === id) {
            toDo.id = toDo.id + "_done";
        } else if (toDo.id === id + "_done") {
            toDo.id = id;
        };
    };
    toDos.forEach(handleCrossOut);
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteToDo);
    const crossOutBtn = document.createElement("button");
    crossOutBtn.innerText = "✅";
    crossOutBtn.addEventListener("click", crossOutToDo);
    toDoList.appendChild(li);
    li.appendChild(crossOutBtn)
    li.appendChild(span);
    li.appendChild(deleteBtn);
    if (li.id[li.id.length - 1] === "e") {
        li.classList.add("done");
    };
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);
}
