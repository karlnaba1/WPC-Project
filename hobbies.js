// Toggle dropdown functionality
function toggleDropdown(event, dropdownId) {
    event.stopPropagation(); // Prevent click events from bubbling up
    const dropdownContent = document.getElementById(dropdownId);
    dropdownContent.classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
};

// Handle form submission
document.getElementById("hobbies-quiz").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    // Get selected hobbies from checkboxes
    const selectedHobbies = [];
    const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        selectedHobbies.push(checkbox.value);
    });

    // Display the selected hobbies in the designated area
    const selectedHobbiesDiv = document.getElementById("selected-hobbies");
    if (selectedHobbies.length > 0) {
        selectedHobbiesDiv.innerHTML = `Your selected hobbies are: <br>${selectedHobbies.join(", ")}`;
    } else {
        selectedHobbiesDiv.innerHTML = "Please select at least one hobby!";
    }
});
