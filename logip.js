// script.js

function updateDateTime() {
    const dateTimeElement = document.querySelector('.nav-date-time');

    if (dateTimeElement) {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };

        const dateTimeString = now.toLocaleDateString(undefined, options);
        dateTimeElement.textContent = dateTimeString;
    }
}

// Update date, time, and day every second
setInterval(updateDateTime, 1000);

// Initial call to set the date, time, and day when the page loads
updateDateTime();
document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');

    });
   
