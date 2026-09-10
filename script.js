/* ==========================================
   MOBILE NAVIGATION
========================================== */


const menuButton =
    document.getElementById("menuButton");


const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



/* ==========================================
   CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
========================================== */


const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* ==========================================
   CONTACT FORM
========================================== */


const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    formMessage.textContent =
        "Thank you! Your message has been received. We will get back to you soon.";


    contactForm.reset();

});
________________________________________
