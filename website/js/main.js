document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') // If pressing Ctrl + S
        event.preventDefault(); // Prevent the browser from opening the save dialog
});

/* When the page is fully loaded */
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.remove('loader-active');
});