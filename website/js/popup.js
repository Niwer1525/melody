/**
 * Open the download modal
 */
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

/**
 * Close the download modal
 */
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// If the user click anywhere else, the modal will close
// window.onclick = function(event) {
//     closeModal();
// }