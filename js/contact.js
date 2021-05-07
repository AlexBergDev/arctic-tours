const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const success = document.querySelector("#success");
const button = document.querySelector("#contactButton");


function validateForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);


function checkIfCorrect() {

    if (checkLength(name.value, 1) && checkLength(subject.value, 4) && validateEmail(email.value)) {
        form.addEventListener("submit", submitForm);
    } else {    
        message.innerHTML = "";
    }
}

name.addEventListener("keyup", checkIfCorrect);
subject.addEventListener("keyup", checkIfCorrect);
email.addEventListener("keyup", checkIfCorrect);

function submitForm(event) {
    event.preventDefault();
    success.innerHTML = '<div class="success">Message has been send successfully!</div>';
    form.reset();
}

form.addEventListener("submit", checkIfCorrect);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}