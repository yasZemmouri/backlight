"use strict";
const testEl = document.getElementById("btn");
const bodyEl = document.documentElement;
const blackScreenEl = document.getElementById('black-screen');

testEl.addEventListener("click", function () {
    blackScreenEl.requestFullscreen();
    // blackScreenEl.classList.remove("d-none");
    // blackScreenEl.style.display = "block";
});
bodyEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") blackScreenEl.requestFullscreen();
    // blackScreenEl.classList.remove("d-none");
    // blackScreenEl.style.display = "block";
});
