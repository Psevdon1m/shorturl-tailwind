const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const form = document.getElementById("link-form");
const input = document.getElementById("link-input");
const error = document.getElementById("err-msg");

btn.addEventListener("click", navToggle);
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  if (input.value === "") {
    error.innerHTML = "Please enter a link";
    input.classList.add("border-red");
  } else if (!input.value.includes("https://")) {
    error.innerHTML = "Url should start from 'https://'";
    input.classList.add("border-red");
  } else {
    error.innerHTML = "";
    input.classList.remove("border-red");
    alert("success");
  }
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
