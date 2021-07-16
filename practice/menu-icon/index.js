const menuIcon = document.querySelector(".menu-icon");

function handleClick() {
  if (menuIcon.className === "menu-icon") {
    menuIcon.className += " clicked";
  } else {
    menuIcon.className = "menu-icon";
  }
}
