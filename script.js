const sunToggle = document.getElementById("sunWrapper");
const moonWrapper = document.getElementById("moonWrapper");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");
const logoIcon = document.getElementById("logo-icon");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");

let isDark = false;

// Wrap the toggle logic in a reusable function
function toggleDarkMode() {
    isDark = !isDark;

    // Toggle classes and images
    moonWrapper.classList.toggle("active-moon");
    sunToggle.classList.toggle("sun-icon");

    moonIcon.src = isDark
        ? "Moon_fill.svg"
        : "Moon_fill_light.svg";

    sunIcon.src = !isDark
        ? "Sun_fill.svg"
        : "Sun_fill_light.svg";

    logoIcon.src = isDark
        ? "logo-dark.svg"
        : "logo-light.svg";

    // Use data attribute instead of class for theme switching
    if (isDark) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
}
// Mobile menu toggle function
function toggleMobileMenu() {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    mobileNavOverlay.classList.toggle("active");
    body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : "";
}

// Close mobile menu
function closeMobileMenu() {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
    mobileNavOverlay.classList.remove("active");
    body.style.overflow = "";
}

// Event listeners
sunToggle.addEventListener("click", toggleDarkMode);
moonWrapper.addEventListener("click", toggleDarkMode);
hamburger.addEventListener("click", toggleMobileMenu);
mobileNavOverlay.addEventListener("click", closeMobileMenu);

// Close mobile menu when clicking on nav links
const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});