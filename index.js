const nameValue = document.getElementById("first_name");
const lastName = document.getElementById("first_name");
const nameValue = document.getElementById("first_name");
const nameValue = document.getElementById("first_name");
const nameValue = document.getElementById("first_name");

nameValue.addEventListener("blur", (event) => {
  validateName(event.target.value);
});

function validateName(first_name) {
  const regex = /[a-z]{2,40}/gi;
  return regex.test(first_name);
}
