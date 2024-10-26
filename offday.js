document.getElementById("day-off-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const teachers = Array.from(document.getElementById("teacher").selectedOptions).map(option => option.value);
    const date = document.getElementById("date").value;
    const timeframe = document.getElementById("timeframe").value;
    const reason = document.getElementById("reason").value;
    const documentation = document.getElementById("documentation").files[0];

    // Create the email subject and body
    const subject = `Day Off Request for ${date}`;
    let body = `I am requesting a day off on ${date} during the time frame of ${timeframe}.\n\nReason: ${reason}\n\nTeachers to notify: ${teachers.join(", ")}`;
    
    // Open the email client
    const mailtoLink = `mailto:${teachers.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Check if documentation is uploaded
    if (documentation) {
        alert("Please send the documentation via email, as the web form cannot send files directly.");
    }

    window.location.href = mailtoLink;

    // Show response message
    document.getElementById("response").textContent = "Your request has been sent! (Opening email client...)";
});
// JavaScript Document