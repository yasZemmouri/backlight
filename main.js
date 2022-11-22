"use strict";
const testEl = document.getElementById("btn");
// const bodyEl = document.documentElement;
const blackScreenEl = document.getElementById('black-screen');

testEl.addEventListener("click", function () {
    blackScreenEl.requestFullscreen();
});
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") blackScreenEl.requestFullscreen();
});
document.addEventListener("keypress", function (event) {
    console.log("You pressed " + event.key);
});
