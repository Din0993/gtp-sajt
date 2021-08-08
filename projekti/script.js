"use strict";

const sidebarMenu = document.querySelector(".navigation__menu__container");

let activeSidebarKontakt = 0;

sidebarMenu.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  if (activeSidebarKontakt === 0) {
    sidebar.style.opacity = "1";
    sidebar.style.width = "100%";
    activeSidebarKontakt = 1;
  } else {
    sidebar.style.opacity = "0";
    sidebar.style.width = "0";
    activeSidebarKontakt = 0;
  }
});
