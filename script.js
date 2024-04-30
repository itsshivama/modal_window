"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

// Opening Modal Event function
const openModal = function () {
  //   console.log("Show Modal Button Clicked!!");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Closing Modal Event Function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Iterating over all show-modal classes and passing Open Modal function when clicked
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

// Closing overlay and pop up when either clicked on the 'x' in the pop up or anywhere on the overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Hiding the Modal/pop-up when 'ESC' key is pressed
// On a sidenote with what we have done with function(e) and stuff, is how basic keyloggers could be created
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (
    e.key === "Escape" &&
    (!modal.classList.contains("hidden") ||
      !overlay.classList.contains("hidden"))
  )
    closeModal();
});
