"use strict";

const id = document.getElementById("advice-id");
const text = document.getElementById("advice-txt");
const btn = document.getElementById("btn");
const dice = document.querySelector(".dice-icon");
const getData = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      id.textContent = res.slip.id;
      text.textContent = res.slip.advice;
    })
    .catch((err) => console.log(err));
};
getData();
// Fetching
btn.addEventListener("click", () => {
  dice.classList.add("rotate");
  getData();
  setTimeout(() => {
    dice.classList.remove("rotate");
  }, 1000);
});
