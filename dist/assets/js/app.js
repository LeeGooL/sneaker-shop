document.addEventListener("DOMContentLoaded", () => {
  const navMobileList = document.querySelector(".nav-mobile__list");
  const navMobileActive = "nav-mobile__list_active";
  const burger = document.querySelector(".burger");
  const burgerActive = "burger_active";

  burger.addEventListener("click", () => {
    if (!burger.classList.contains(burgerActive)) {
      burger.classList.add(burgerActive);
      navMobileList.classList.add(navMobileActive);
    } else {
      burger.classList.remove(burgerActive);
      navMobileList.classList.remove(navMobileActive);
    }
  });
});