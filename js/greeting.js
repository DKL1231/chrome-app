const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const todo_form = document.getElementById("todo-form");
const todo_list = document.getElementById("todo-list");
const todo_list_title = document.getElementById("todo-list-title");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // prevent refresh
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todo_form.classList.remove(HIDDEN_CLASSNAME);
  todo_list.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  todo_form.classList.remove(HIDDEN_CLASSNAME);
  todo_list.classList.remove(HIDDEN_CLASSNAME);
  todo_list_title.classList.remove(HIDDEN_CLASSNAME);
  console.log(todo_list_title.classList);
}
