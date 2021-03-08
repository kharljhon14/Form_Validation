const form = document.querySelector(".form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");
const email = document.getElementById("email");

window.addEventListener("DOMContentLoaded", () =>{
    username.value = "";
    email.value = "";
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //Get values from the values
    const uname = username.value.trim();
    const pass = password.value.trim();
    const passC = passwordCheck.value.trim();
    const emailValue = email.value.trim();

    if (uname === "") {
        //show Error and add error class
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        //check If email is valid
        isEmail(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Invalid Email");
    } else {
        setSuccessFor(email);
    }

    if (pass === "") {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password);
    }

    if (passC === "") {
        setErrorFor(passwordCheck, "Password Check cannot be blank");
    } else if (passC !== pass) {
        setErrorFor(passwordCheck, "Passwords are not the same");
    } else {
        setSuccessFor(passwordCheck);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // form-control
    const small = formControl.querySelector("small");
    input.value = "";

    //add Error msg inside small tag
    small.textContent = message;

    //add Error class
    formControl.classList.add("error");
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //add Success class
    formControl.classList.add("success");
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
