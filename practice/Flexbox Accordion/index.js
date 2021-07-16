const divs = document.getElementsByTagName("div");

function handleClick(classN) {
  const div = document.querySelector(classN);
  for (let i = 0; i < divs.length; i++) {
    divs[i].className = divs[i].className.replace("active", "");
  }

  div.className += " active";
}
