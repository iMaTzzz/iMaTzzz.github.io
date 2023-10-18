// Get all section elements
const sections = document.querySelectorAll('section');

// Add event listeners to the navigation links to scroll to the respective sections
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
        const targetSectionId = link.getAttribute('href').substring(1); // Remove the '#' symbol
        const targetSection = document.getElementById(targetSectionId);
        
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
