let password = document.querySelector(".pass");
let icon = document.querySelector(".icon");

function handleClick() {
  console.log(icon.className);
  if (password.type === "password") {
    password.type = "text";
    icon.className = "fas fa-eye-slash icon";
  } else {
    password.type = "password";
    icon.className = "fas fa-eye icon";
  }
}
