// This function will run whenever the user scrolls the page
window.addEventListener("scroll", function() {
    // Get the navigation bar element by its ID
    const navbar = document.getElementById("navbar");

    // Check if the user has scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        // Add the "nav-scrolled" class to the navbar if scrolled down
        navbar.classList.add("nav-scrolled");
    } else {
        // Remove the "nav-scrolled" class if not scrolled down
        navbar.classList.remove("nav-scrolled");
    }
});

