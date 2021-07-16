const text = document.querySelector(".text");
const icon = document.querySelector(".title_icon");

function handleClick() {
  if (text.className === "text") {
    text.className += " clicked";
    icon.innerHTML = "-";
  } else {
    text.className = "text";
    icon.innerHTML = "+";
  }
}
