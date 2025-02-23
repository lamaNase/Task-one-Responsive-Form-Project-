document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const form = document.querySelector("form");

    function validatePasswordMatch() {
        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity("Passwords do not match!");
        } else {
            confirmPassword.setCustomValidity(""); // Clear the error if passwords match
        }
    }

    // Attach validation on typing
    password.addEventListener("input", validatePasswordMatch);
    confirmPassword.addEventListener("input", validatePasswordMatch);

    // Final check before form submission
    form.addEventListener("submit", function (event) {
        validatePasswordMatch();
        if (!form.checkValidity()) {
            event.preventDefault(); // Stop form submission if invalid
        }
    });
});
