const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;    
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paiantToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✂";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li);
}

function handleToDoSunbmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paiantToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSunbmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const paresdToDos = JSON.parse(savedToDos);
    toDos = paresdToDos;
    paresdToDos.forEach(paiantToDo);
}