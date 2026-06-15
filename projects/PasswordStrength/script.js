"use strict";

let pass = document.getElementById("password");
let msg = document.getElementById("message");
let strength = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (pass.value.length < 4) {
    strength.innerHTML = "weak";
    strength.style.color = "red";
    pass.style.borderColor = "red";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    strength.innerHTML = "medium";
    strength.style.color = "yellow";
    pass.style.borderColor = "yellow";
  } else if (pass.value.length >= 8) {
    strength.innerHTML = "strong";
    strength.style.color = "green";
    pass.style.borderColor = "green";
  }
});
