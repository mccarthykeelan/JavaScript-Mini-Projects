"use strict";

// Create a speech synthesis utterance object (represents a single spoken message)
const speech = new SpeechSynthesisUtterance();

// Array to store all available browser voices
let voices = [];

// Reference to the <select> dropdown used to choose a voice
let voiceSelect = document.querySelector("select");

// Fires when the browser has finished loading or updating available speech voices
window.speechSynthesis.onvoiceschanged = () => {
  // Retrieve the full list of available voices from the browser
  voices = window.speechSynthesis.getVoices();

  // Set default voice to the first available voice
  speech.voice = voices[0];

  // Populate the dropdown with voice options (name shown, index used as value)
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)),
  );
};

// When the user selects a different voice from the dropdown,
// update the speech object to use that voice
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// When the button is clicked:
// 1. Get text from the textarea
// 2. Assign it to the speech object
// 3. Pass it to the speech engine to be spoken aloud
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
