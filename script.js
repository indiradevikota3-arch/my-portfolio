document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("themeToggle");
    const yearElement = document.getElementById("year");

    // Automatically update the year
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Check whether the button exists
    if (!themeButton) {
        console.log("Dark Mode button not found!");
        return;
    }

    // Toggle Dark Mode
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
        }

    });

});