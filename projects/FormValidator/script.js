"use strict";

// Span Error Elements

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

// Input Elements

const contactName = document.getElementById("contact-name");
const contactNumber = document.getElementById("contact-number");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const submit = document.getElementById("submit");

const validateName = () => {
  let name = contactName.value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

const validatePhone = () => {};

const validateEmail = () => {};

const validateMessage = () => {};

contactName.addEventListener("keyup", validateName);

contactNumber.addEventListener("keyup", validatePhone);

contactEmail.addEventListener("keyup", validateEmail);

contactMessage.addEventListener("keyup", validateMessage);
