const nav = document.querySelector(".nav");
function handleClick() {
  console.log(nav);
  if (nav.className === "nav") {
    nav.className += " responsive";
  } else {
    nav.className = "nav";
  }
}

window.onresize = function () {
  nav.className = "nav";
};
