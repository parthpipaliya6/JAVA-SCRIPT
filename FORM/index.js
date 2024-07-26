document.addEventListener("DOMContentLoaded", () => {
    
    function validateForm() {
        let isValid = true;
        const name = document.getElementById("name").value;
        const nameError = document.getElementById("name-error");
        const namepettern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
        if (name.trim() === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        }
        else {
            nameError.textContent = "";
        }

        const address = document.getElementById("address").value;
        const addressError = document.getElementById("address-error");
        if (address.trim() === "") {
            addressError.textContent = "Address is required.";
            isValid = false;
        } else {
            addressError.textContent = "";
        }

        const email = document.getElementById("email").value;
        const emailError = document.getElementById("email-error");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.trim() === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        const password = document.getElementById("password").value;
        const passwordError = document.getElementById("password-error");
        const passwordpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if (password.trim() === "") {
            passwordError.textContent = "Password is required.";
            isValid = false;
        } else if (!passwordpattern.test(password)) {
            passwordError.textContent = "Password must be at least 6 characters long.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        const subject = document.getElementById("subject").value;
        const subjectError = document.getElementById("subject-error");
        if (subject === "") {
            subjectError.textContent = "Select a course.";
            isValid = false;
        } else {
            subjectError.textContent = "";
        }

        const roles = document.getElementsByName("question");
        const roleSelected = Array.from(roles).some(role => role.checked);
        if (!roleSelected) {
            subjectError.textContent = "Choose a role.";
            isValid = false;
        } else {
            subjectError.textContent = "";
        }

        const agree = document.getElementById("agree").checked;
        const agreeError = document.getElementById("agree-error");
        if (!agree) {
            agreeError.textContent = "You must agree to the terms.";
            isValid = false;
        } else {
            agreeError.textContent = "";
        }

        return isValid;
    }

    document.forms["RegForm"].onsubmit = validateForm;
});
