// Initialize arrays to hold selected friends and minorities
let selectedFriends = [];
let selectedMinorities = [];

// Handle form submission
document.getElementById("interests-quiz").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    // Get selected interests
    const selectedInterests = [];
    const interestCheckboxes = document.querySelectorAll('.interests-section input[type="checkbox"]:checked');

    interestCheckboxes.forEach(checkbox => {
        selectedInterests.push(checkbox.value);
    });

    // Submit data to Google Sheets
    submitData(selectedFriends, selectedInterests, selectedMinorities);

    // Display the selected hobbies and other info
    const selectedInfoDiv = document.getElementById("selected-info");
    selectedInfoDiv.innerHTML = `
        Friends: ${selectedFriends.join(", ") || "None"}<br>
        Interests: ${selectedInterests.join(", ") || "None"}<br>
        Minorities: ${selectedMinorities.join(", ") || "None"}
    `;
});

// Autocomplete feature for friends' names
const friendsList = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ian", "Jasmine"];

function autocompleteFriend(input) {
    const listContainer = document.getElementById("friends-list");
    listContainer.innerHTML = '';
    if (!input) return; // Clear suggestions if input is empty
    const filteredFriends = friendsList.filter(friend => friend.toLowerCase().startsWith(input.toLowerCase()));
    filteredFriends.forEach(friend => {
        const div = document.createElement("div");
        div.innerText = friend;
        div.onclick = () => selectFriend(friend);
        listContainer.appendChild(div);
    });
}

// Function to select friend from autocomplete
function selectFriend(friend) {
    document.getElementById("friends").value = friend;
    document.getElementById("friends-list").innerHTML = ''; // Clear suggestions
}

// Function to add selected friend to the list
function addFriend() {
    const friendInput = document.getElementById("friends").value;
    if (friendInput && !selectedFriends.includes(friendInput)) {
        selectedFriends.push(friendInput);
        updateSelectedFriends();
        document.getElementById("friends").value = ''; // Clear input field
    }
}

// Function to update displayed friends list
function updateSelectedFriends() {
    const friendsSelectedDiv = document.getElementById("friends-selected");
    friendsSelectedDiv.innerHTML = selectedFriends.map(friend => `<span>${friend}</span>`).join(", ");
}

// Autocomplete feature for minorities
const minoritiesList = ["Asian", "Black", "Hispanic", "Native American", "White", "LGBTQ+", "Disabled", "Senior", "Immigrant", "Refugee"];

function autocompleteMinority(input) {
    const listContainer = document.getElementById("minority-list");
    listContainer.innerHTML = '';
    if (!input) return; // Clear suggestions if input is empty
    const filteredMinorities = minoritiesList.filter(minority => minority.toLowerCase().startsWith(input.toLowerCase()));
    filteredMinorities.forEach(minority => {
        const div = document.createElement("div");
        div.innerText = minority;
        div.onclick = () => selectMinority(minority);
        listContainer.appendChild(div);
    });
}

// Function to select minority from autocomplete
function selectMinority(minority) {
    document.getElementById("minorities").value = minority;
    document.getElementById("minority-list").innerHTML = ''; // Clear suggestions
}

// Function to add selected minority to the list
function addMinority() {
    const minorityInput = document.getElementById("minorities").value;
    if (minorityInput && !selectedMinorities.includes(minorityInput)) {
        selectedMinorities.push(minorityInput);
        updateSelectedMinorities();
        document.getElementById("minorities").value = ''; // Clear input field
    }
}

// Function to update displayed minorities list
function updateSelectedMinorities() {
    const minoritiesSelectedDiv = document.getElementById("minorities-selected");
    minoritiesSelectedDiv.innerHTML = selectedMinorities.map(minority => `<span>${minority}</span>`).join(", ");
}

// Function to submit data to Google Sheets
function submitData(friends, interests, minorities) {
    const url = 'YOUR_WEB_APP_URL'; // Replace with your Google Apps Script web app URL
    const data = {
        friends: friends,
        interests: interests,
        minorities: minorities
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
