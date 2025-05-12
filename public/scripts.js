// scripts.js
window.addEventListener('DOMContentLoaded', (event) => {
    // Fetch the content of nav.html
    fetch('nav.html')
        .then(response => response.text())  // Get the content as text
        .then(data => {
            // Inject the content into the element with id 'nav-placeholder'
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading nav.html:', error);
        });
});
