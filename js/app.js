const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const resetBtn = document.querySelector(".reset__Btn");
const todoInput = document.querySelector(".todo-form__input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

function paintGreetings(inputUsername) {
    greeting.innerText = `Hello ${inputUsername}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

resetBtn.addEventListener("click", () => localStorage.clear());


loginInput.addEventListener("focusin", e => e.target.placeholder = "");
loginInput.addEventListener("focusout", e => e.target.placeholder = "What is your name?");

todoInput.addEventListener("focusin", e => e.target.placeholder = "");
todoInput.addEventListener("focusout", e => e.target.placeholder = "Write a To Do and Press Enter.");