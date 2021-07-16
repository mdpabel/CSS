function handleClick(targetClass) {
  const contentClasses = document.getElementsByClassName("content");
  for (let i = 0; i < contentClasses.length; i++) {
    contentClasses[i].style.display = "none";
  }

  const content = document.getElementById(targetClass);
  content.style.display = "block";
}
