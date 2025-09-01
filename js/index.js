const form = document.getElementById("link-form");
const input = document.getElementById("link-input");
const error = document.getElementById("err-msg");

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
