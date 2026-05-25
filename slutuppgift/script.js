const themeBtn = document.getElementById("themeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const skillsBtn = document.getElementById("skillsBtn");
const contactMenuBtn = document.getElementById("contactMenuBtn");

const snabbfakta = document.querySelector("aside");
const schoolBox = document.querySelector(".school-box");
const contactBox = document.querySelector(".contact-box");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});

aboutBtn.addEventListener("click", function (event) {

    event.preventDefault();

    snabbfakta.classList.add("blink");

    setTimeout(function () {
        snabbfakta.classList.remove("blink");
    }, 3000);

});

skillsBtn.addEventListener("click", function (event) {

    event.preventDefault();

    schoolBox.classList.add("blink");

    setTimeout(function () {
        schoolBox.classList.remove("blink");
    }, 3000);

});

contactMenuBtn.addEventListener("click", function (event) {

    event.preventDefault();

    contactBox.scrollIntoView();

    contactBox.classList.add("blink");

    setTimeout(function () {
        contactBox.classList.remove("blink");
    }, 3000);

});