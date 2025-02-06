// Get all open modal buttons
const openModalButtons = document.querySelectorAll('[id^="open-modal"]');

// Get all close buttons
const closeModalButtons = document.querySelectorAll('[id^="close-modal"]');

// Add event listeners for each open modal button
openModalButtons.forEach(button => {
    button.onclick = function() {
        // Prevent the page from jumping to the top
        event.preventDefault(); 
        const modalId = this.getAttribute('id').replace('open-modal', 'modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }
});

// Add event listeners for each close modal button
closeModalButtons.forEach(button => {
    button.onclick = function() {
        const modalId = this.getAttribute('id').replace('close-modal', 'modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
