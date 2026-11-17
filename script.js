const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuToggle.textContent = "×";
        } else {
            menuToggle.textContent = "☰";
        }

    });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#form-message");

        message.textContent =
            "Thank you, " + name +
            "Your inquiry has been recorded for this demonstration.";

        contactForm.reset();

    });

}

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
