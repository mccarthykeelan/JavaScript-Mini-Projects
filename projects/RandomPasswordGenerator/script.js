"use strict";

const passwordBox = document.getElementById("password");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&8()_+~\}{[]><?-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

// Fallback included, if browser is not currently supporting navigator .clipboard

function copyPassword() {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(passwordBox.value);
  } else {
    passwordBox.select();
    document.execCommand("copy");
  }
}

generateButton.addEventListener("click", createPassword);
copyButton.addEventListener("click", copyPassword);
