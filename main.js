"use strict";
const testEl = document.getElementById("btn");
const bodyEl = document.documentElement;
const blackScreenEl = document.getElementById('black-screen');

testEl.addEventListener("click", function () {
    blackScreenEl.requestFullscreen();
    // blackScreenEl.classList.remove("d-none");
    // blackScreenEl.style.display = "block";
});
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Escape") {
        bodyEl.exitFullscreen();
        blackScreenEl.style.display = "none";
        console.log("Escape clicked");
    }
})
exitFullscreen
exitFullscreen