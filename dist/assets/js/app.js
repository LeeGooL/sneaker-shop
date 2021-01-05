document.addEventListener("DOMContentLoaded", () => {
  /* Animation */
  TweenMax.from(".content__info-title", 1, {
    delay: 0.4,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".content__info-text", 1, {
    delay: 0.7,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".content__btn", 1, {
    delay: 1,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".content__img", 1, {
    delay: 0.4,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".logo", 1, {
    delay: 2.2,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".menu", 1, {
    delay: 2.4,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".search-block", 1, {
    delay: 2.6,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".personal-block", 1, {
    delay: 2.8,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".footer__search", 1, {
    delay: 3.2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".social", 1, {
    delay: 3.4,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".social__icons", 1, {
    delay: 3.6,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".burger", 1, {
    delay: 3,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  /* Nav menu */
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

  /* SignUp modal */
  const signLink = document.getElementById("signIn");
  const signBlock = document.querySelector(".sign-block");
  const closeBtn = document.querySelector(".sign__close");
  const signInMobile = document.getElementById("signInMobile");

  signLink.addEventListener("click", () => {
    signBlock.classList.toggle("sign-block_active");
  });

  signInMobile.addEventListener("click", () => {
    signBlock.classList.toggle("sign-block_active");
    burger.classList.remove("burger_active");
    navMobileList.classList.remove("nav-mobile__list_active");
  });

  closeBtn.addEventListener("click", () => {
    signBlock.classList.remove("sign-block_active");
  });

  /* Map */
  const mapLink = document.getElementById("mapLink");
  const mapBlock = document.getElementById("mapBlock");
  const mapClose = document.getElementById("mapClose");

  mapLink.addEventListener("click", () => {
    mapBlock.classList.toggle("map-block_active");
  });

  mapClose.addEventListener("click", () => {
    mapBlock.classList.remove("map-block_active");
  });
});