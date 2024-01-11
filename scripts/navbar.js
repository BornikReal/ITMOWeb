let loc = document.location.pathname;
loc = loc.slice(1, loc.lastIndexOf(".html"));
const navItems = document.querySelectorAll(".nav-link");
const map = {
  index: "Фильмы",
  rating: "Рейтинг",
  contacts: "Контакты",
};
navItems.forEach((navItem) => {
  if (navItem.innerText === map[loc]) {
    navItem.classList.add("active");
  }
});
