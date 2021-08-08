"use strict";

const sidebarMenu = document.querySelector(".navigation__menu__container");

let activeSidebarKontakt = 0;
const sidebarItems = document.querySelectorAll(".sidebar__item");
sidebarMenu.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  if (activeSidebarKontakt === 0) {
    sidebar.style.opacity = "1";
    sidebar.style.width = "100%";
    sidebarItems.forEach((item) => item.classList.remove("invisible"));
    activeSidebarKontakt = 1;
  } else {
    sidebar.style.opacity = "0";
    sidebar.style.width = "0";
    sidebarItems.forEach((item) => item.classList.add("invisible"));
    activeSidebarKontakt = 0;
  }
});
