// Function to toggle time input display for each day
function toggleTimeInputs(day) {
    const checkbox = document.getElementById(day);
    const timeContainer = document.getElementById(`${day}-times-container`);

    if (checkbox.checked) {
        timeContainer.style.display = "block";  // Show time inputs when the day is selected
    } else {
        timeContainer.style.display = "none";  // Hide time inputs when the day is unselected
    }
}

// Function to add more time frames dynamically
function addTimeFrame(day) {
    const container = document.getElementById(`${day}-times-container`);
    const timeInputCount = container.querySelectorAll('.time-inputs').length + 1;  // Keep track of how many time frames

    const timeInputs = document.createElement('div');
    timeInputs.className = 'time-inputs';
    timeInputs.innerHTML = `
        From: <input type="time" id="${day}-start-${timeInputCount}" name="${day}-start-${timeInputCount}">
        To: <input type="time" id="${day}-end-${timeInputCount}" name="${day}-end-${timeInputCount}">
    `;

    container.insertBefore(timeInputs, container.lastElementChild);  // Add before "Add Time" button
}

// Function to force time inputs to 15-minute intervals
document.addEventListener('input', function(e) {
    if (e.target.type === 'time') {
        const time = e.target.value;
        const [hours, minutes] = time.split(':').map(Number);
        const roundedMinutes = Math.round(minutes / 15) * 15;
        e.target.value = `${hours.toString().padStart(2, '0')}:${roundedMinutes.toString().padStart(2, '0')}`;
    }
});

// Handle form submission
document.getElementById("availability-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const availability = [];

    // Loop through each checked day
    document.querySelectorAll('input[name="availability"]:checked').forEach(function(checkbox) {
        const day = checkbox.value;
        const timeInputs = document.querySelectorAll(`#${day}-times-container .time-inputs`);

        const timeFrames = Array.from(timeInputs).map((timeInput, index) => {
            const startTime = document.getElementById(`${day}-start-${index + 1}`).value;
            const endTime = document.getElementById(`${day}-end-${index + 1}`).value;

            return {
                start: startTime || "Not specified",
                end: endTime || "Not specified"
            };
        });

        availability.push({
            day: day,
            timeFrames: timeFrames
        });
    });

    console.log("User Availability:", availability);
    alert("Availability submitted! Check the console for details.");
});
