// Main image slider

const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
const oNama = document.querySelector(".navigation__link__onama");
const delatnost = document.querySelector(".navigation__link__delatnost");
const navigation = document.querySelector(".navigation");

let activeSlideIndex = 0;
let timeout;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  clearTimeout(timeout);
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;

    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  if (activeSlideIndex === 0) {
    document.getElementById("h0").classList.add("left-slide__heading");
    document.getElementById("p0").classList.add("left-slide__paragraph");
  } else {
    document.getElementById("h0").classList.remove("left-slide__heading");
    document.getElementById("p0").classList.remove("left-slide__paragraph");
  }
  if (activeSlideIndex === 1) {
    document.getElementById("h1").classList.add("left-slide__heading");
    document.getElementById("p1").classList.add("left-slide__paragraph");
  } else {
    document.getElementById("h1").classList.remove("left-slide__heading");
    document.getElementById("p1").classList.remove("left-slide__paragraph");
  }
  if (activeSlideIndex === 2) {
    document.getElementById("h2").classList.add("left-slide__heading");
    document.getElementById("p2").classList.add("left-slide__paragraph");
  } else {
    document.getElementById("h2").classList.remove("left-slide__heading");
    document.getElementById("p2").classList.remove("left-slide__paragraph");
  }
  if (activeSlideIndex === 3) {
    document.getElementById("h3").classList.add("left-slide__heading");
    document.getElementById("p3").classList.add("left-slide__paragraph");
  } else {
    document.getElementById("h3").classList.remove("left-slide__heading");
    document.getElementById("p3").classList.remove("left-slide__paragraph");
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;

  timeout = setTimeout(changeSlide, 5000, "up");
};

changeSlide("up");

oNama.addEventListener("click", clickHandler);
delatnost.addEventListener("click", clickHandler2);

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 170;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

function clickHandler2(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 170;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// const fixedNav = function () {
//   if (window.pageYOffset >= 855) {
//     navigation.classList.add("fixed");
//   } else {
//     navigation.classList.remove("fixed");
//   }
// };

// window.addEventListener("scroll", fixedNav);

const returnToTop = document.querySelector(".return-to-top-btn");

const navTop = navigation.getBoundingClientRect().height;
const header = document.querySelector(".header");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navigation.classList.add("fixed");
    returnToTop.classList.add("shown-return-btn");
  } else {
    navigation.classList.remove("fixed");
    returnToTop.classList.remove("shown-return-btn");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navTop}px`,
});

headerObserver.observe(header);

const sidebarMenu = document.querySelector(
  ".navigation__menu__container__main"
);

let activeSidebar = 0;
const sidebarItems = document.querySelectorAll(".sidebar__item");

sidebarMenu.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  if (activeSidebar === 0) {
    sidebar.style.opacity = "1";
    sidebar.style.width = "100%";
    sidebarItems.forEach((item) => item.classList.remove("invisible"));
    activeSidebar = 1;
  } else {
    sidebar.style.opacity = "0";
    sidebar.style.width = "0";
    sidebarItems.forEach((item) => item.classList.add("invisible"));
    activeSidebar = 0;
  }
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide__small");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" aktiviraj", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " aktiviraj";
}
