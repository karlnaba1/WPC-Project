// Sample events data
const events = [
    {
        title: "Web Development Workshop",
        time: "2024-10-20 10:00 AM - 1:00 PM",
        type: "workshop"
    },
    {
        title: "Networking Night",
        time: "2024-10-21 6:00 PM - 9:00 PM",
        type: "networking"
    },
    {
        title: "Outdoor Yoga",
        time: "2024-10-22 8:00 AM - 9:30 AM",
        type: "social"
    },
    {
        title: "Bible Study Group",
        time: "2024-10-23 7:00 PM - 8:30 PM",
        type: "religious"
    },
    {
        title: "Math Tutoring Session",
        time: "2024-10-24 3:00 PM - 5:00 PM",
        type: "education"
    },
    {
        title: "Game Night",
        time: "2024-10-25 5:00 PM - 10:00 PM",
        type: "social"
    },
    {
        title: "Digital Marketing Workshop",
        time: "2024-10-26 10:00 AM - 12:00 PM",
        type: "workshop"
    },
];

// Function to display events
function displayEvents(eventsToShow) {
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = ''; // Clear the list first
    eventsToShow.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h2 class="event-title">${event.title}</h2>
            <p class="event-time">${event.time}</p>
            <p class="event-type">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</p>
        `;
        eventsList.appendChild(eventCard);
    });
}

// Function to filter events
function filterEvents() {
    const filterValue = document.getElementById('filter').value;
    const filteredEvents = filterValue === 'all' 
        ? events 
        : events.filter(event => event.type === filterValue);
    displayEvents(filteredEvents);
}

// Initial display of events
displayEvents(events);
// JavaScript Document