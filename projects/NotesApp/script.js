"use strict";

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
  let note = document.createElement("div");
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  note.className = "note";
  inputBox.className = "input-box";
  inputBox.contentEditable = "true";

  img.src = "images/delete.png";
  img.className = "delete";

  note.appendChild(inputBox);
  note.appendChild(img);
  notesContainer.appendChild(note);

  inputBox.focus();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});
