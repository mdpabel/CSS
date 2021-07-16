const targetClass = document.querySelector("#posts");
const links = document.querySelector(".links");

function handleClick(event, param) {
  const subContent = document.getElementsByClassName("sub-content");
  const btn = document.getElementsByClassName("btn");

  for (let i = 0; i < subContent.length; i++) {
    subContent[i].style.display = "none";
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].className = btn[i].className.replace("active", "");
  }

  const id = document.getElementById(param);
  id.style.display = "block";
  links.className = "links";
  event.currentTarget.className += " active";
}

function handleBar() {
  if (links.className === "links") {
    links.className += " responsive";
  } else {
    links.className = "links";
  }
}
