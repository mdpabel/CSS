const navItem = document.getElementsByClassName("navItem");

const handleClick = (id) => {
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].className = "navItem";
  }

  const Selected_id = document.getElementById(id);
  const loginClasses = document.getElementsByClassName("login");
  const activeClass = document.getElementById(id + "1");

  for (let i = 0; i < loginClasses.length; i++) {
    loginClasses[i].className = "login";
  }

  Selected_id.className += " displayBlock";
  activeClass.className += " active";
};
