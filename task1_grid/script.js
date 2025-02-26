document.addEventListener("DOMContentLoaded", function () {
    function validateForm(event) {
        let isValid = true; // Track validation status
        const inputs = document.querySelectorAll("#myForm input, #myForm select");

        inputs.forEach(input => {
            const errorMessage = input.closest("div")?.querySelector(".error-message");
            if (errorMessage) {
                if (!input.value.trim()) {
                    errorMessage.style.display = "block"; // Show error if field is empty
                    errorMessage.textContent = errorMessage.getAttribute("data-default"); // Reset to default message
                    isValid = false;
                } else {
                    errorMessage.style.display = "none"; // Hide error if field is filled
                }
            }
        });

        // Check if passwords match
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const confirmPasswordError = document.getElementById("confirmPassword").closest("div")?.querySelector(".error-message");

        if (password && confirmPassword && password !== confirmPassword) {
            confirmPasswordError.style.display = "block";
            confirmPasswordError.textContent = "Passwords are not matched";
            isValid = false;
        }

        // Validate gender selection
        const genderSection = document.querySelector(".gender-section");
        const genderErrorMessage = genderSection?.querySelector(".error-message");
        const genderSelected = document.querySelector('input[name="gender"]:checked');

        if (!genderSelected) {
            genderErrorMessage.style.display = "block";
            isValid = false;
        } else {
            genderErrorMessage.style.display = "none";
        }

        // Validate checkbox (Agree to Terms)
        const agreeCheckbox = document.getElementById("agree");
        const agreeErrorMessage = agreeCheckbox.closest(".full-width")?.querySelector(".error-message");

        if (!agreeCheckbox.checked) {
            agreeErrorMessage.style.display = "block";
            isValid = false;
        } else {
            agreeErrorMessage.style.display = "none";
        }

        if (!isValid) {
            event.preventDefault(); // Stop form submission if there are errors
        }
    }

    document.getElementById("myForm").addEventListener("submit", validateForm);
});