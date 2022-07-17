const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoTitle = document.getElementById("todo-list-title");

const TODOS_KEY = "todos";

var toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  if (toDos.length === 0) {
    toDoTitle.classList.add("hidden");
  }
}

function paintToDo(newTodoObj) {
  const li = document.createElement("ul");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = `  ${newTodoObj.text}`;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  if (toDos.length == 7) {
    alert("To-Do List is maximum 7. Delete To-Do and Try Again.");
    return;
  }
  toDoTitle.classList.remove("hidden");
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
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
  parsedToDos.forEach(paintToDo);
  toDoTitle.classList.remove("hidden");
} else {
  toDoTitle.classList.add("hidden");
}

if (toDos.length === 0) {
  toDoTitle.classList.add("hidden");
}
