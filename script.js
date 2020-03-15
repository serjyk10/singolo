const MENU = document.querySelector(".navigation");
const SLIDES = document.querySelectorAll(".slider__item");
let SLIDE_NUM = 0;
const SLIDER_WRAP = document.querySelector(".slider-phone");
const SLIDER = document.querySelector(".slider-content");
const BUTTON_PREV = document.querySelector(".button_prev");
const BUTTON_NEXT = document.querySelector(".button_next");
const PHONE_BUTTON_VERT = document.querySelector(".slider-phone__vertical .phone_button");
const PHONE_BUTTON_GORIZ = document.querySelector(".slider-phone__gorizontal .phone_button");
const SCREEN_VERTICAL = document.querySelector(".slider-phone__vertical .screen-off");
const SCREEN_GORIZONTAL = document.querySelector(".slider-phone__gorizontal .screen-off");
let SCREEN_STATUS_VERT = true;
let SCREEN_STATUS_GOR = true;



MENU.addEventListener("click", event => {
    MENU.querySelectorAll("li").forEach(el => {
        el.querySelector("a").classList.remove("active_item");
        event.target.classList.add("active_item");
    });
});

BUTTON_PREV.addEventListener("click", event => {
    SLIDES.forEach(el => {
        el.style.display = "none";
        SLIDER_WRAP.classList.remove("bg-blue");
        SLIDER.classList.remove("slider-resize");
    });
    console.log(SLIDE_NUM);
    SLIDE_NUM - 1 < 0 ? SLIDE_NUM++ : SLIDE_NUM--;

    if (SLIDES[SLIDE_NUM].classList.contains("slider-modify")) {
        SLIDER_WRAP.classList.add("bg-blue");
        SLIDER.classList.add("slider-resize");
    }

    SLIDES[SLIDE_NUM].style.display = "flex";
});

BUTTON_NEXT.addEventListener("click", event => {
    SLIDES.forEach(el => {
        el.style.display = "none";
        SLIDER_WRAP.classList.remove("bg-blue");
        SLIDER.classList.remove("slider-resize");

    });
    console.log(SLIDE_NUM);
    SLIDE_NUM + 1 == SLIDES.length ? SLIDE_NUM = 0 : SLIDE_NUM++;
    console.log(SLIDE_NUM);

    if (SLIDES[SLIDE_NUM].classList.contains("slider-modify")) {
        SLIDER_WRAP.classList.add("bg-blue");
        SLIDER.classList.add("slider-resize");
    }

    SLIDES[SLIDE_NUM].style.display = "flex";

});

PHONE_BUTTON_VERT.addEventListener("click", event => {
    if (SCREEN_STATUS_VERT) {
        console.log(SCREEN_VERTICAL);
        SCREEN_VERTICAL.classList.add("display-off");
        SCREEN_STATUS_VERT = false;
    } else if (!SCREEN_STATUS_VERT) {
        SCREEN_VERTICAL.classList.remove("display-off");
        SCREEN_STATUS_VERT = true;
    }
});


PHONE_BUTTON_GORIZ.addEventListener("click", event => {
    if (SCREEN_STATUS_GOR) {
        console.log(SCREEN_GORIZONTAL);
        SCREEN_GORIZONTAL.classList.add("display-off");
        SCREEN_STATUS_GOR = false;
    } else if (!SCREEN_STATUS_GOR) {
        SCREEN_GORIZONTAL.classList.remove("display-off");
        SCREEN_STATUS_GOR = true;
    }
});