const navItems = document.querySelector(".navItems");

function handleClick() {
  if (navItems.className === "navItems") {
    navItems.className += " responsive";
  } else {
    navItems.className = "navItems";
  }
}

window.onresize = function () {
  if (window.innerWidth > 550) {
    navItems.className = "navItems";
  }
};
