// JavaScript for smooth navigation and responsive hamburger menu

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle mobile menu on hamburger click
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Smooth scroll for navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            // Collapse mobile menu after clicking
            navMenu.classList.remove("active");
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
