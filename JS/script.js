// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// Contact Form to WhatsApp

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
            `Hello Khadija Accounting Solutions,

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Required: ${service}

Message:
${message}`;

        const whatsappURL =
            `https://wa.me/255745702115?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        form.reset();

    });

}


// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}