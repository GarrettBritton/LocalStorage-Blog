// Get the theme toggle button and theme icon
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Listen for click events on the theme toggle button
themeToggle.addEventListener('click', () => {
    // Toggle between light and dark mode
    document.body.classList.toggle('styles');

    // Change the icon based on the current mode
    if (document.body.classList.contains('styles')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});