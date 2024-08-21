// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Retrieve form data
        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value;
        const vaccine = document.getElementById('vaccine').value;
        const center = document.getElementById('center').value;
        const date = document.getElementById('date').value;

        // Basic validation
        if (!name || !age || !vaccine || !center || !date) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        // Age validation
        if (age <= 0) {
            alert('Please enter a valid age.');
            return;
        }

        // Confirmation message
        alert(`Appointment booked successfully for ${name} on ${date} at ${center} for ${vaccine} vaccine.`);
        
        // Optionally, reset the form after successful submission
        form.reset();
    });
});
