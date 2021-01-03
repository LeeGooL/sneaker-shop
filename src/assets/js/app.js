document.addEventListener("DOMContentLoaded", () => {
  TweenMax.from(".content-info__title", 1, {
    delay: 0.4,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".content-info__text", 1, {
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
