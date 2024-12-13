

// Add event listeners to all buttons to toggle details
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const details = document.getElementById(targetId);
        if (details.style.display === 'none') {
            details.style.display = 'block';
            this.textContent = 'Show Less';
        } else {
            details.style.display = 'none';
            this.textContent = 'Learn More';
        }
    });
});
