const chatData = {
    math: [
        { sender: "Alice", message: "Does anyone understand the homework for Chapter 3?" },
        { sender: "Bob", message: "I think we should review it together!" },
    ],
    biology: [
        { sender: "Charlie", message: "Is the lab report due this Friday?" },
        { sender: "Dana", message: "Yes! Don’t forget to include the results!" },
    ],
    chemistry: [
        { sender: "Evan", message: "Anyone up for a study group this weekend?" },
        { sender: "Fiona", message: "I’m in! Let’s meet at the library." },
    ],
    history: [
        { sender: "George", message: "What topics do we need to cover for the test?" },
        { sender: "Hannah", message: "Make sure to study the Civil War." },
    ],
    literature: [
        { sender: "Ian", message: "Who else is excited about the book club?" },
        { sender: "Jade", message: "I can’t wait! I loved the last book!" },
    ],
};

const classSelect = document.getElementById("class-select");
const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message");

classSelect.addEventListener("change", function() {
    const selectedClass = this.value;
    chatBox.innerHTML = ''; // Clear previous chat messages

    if (selectedClass) {
        const messages = chatData[selectedClass];
        messages.forEach(msg => {
            const messageElement = document.createElement("div");
            messageElement.className = "chat-message";
            messageElement.innerHTML = `<span>${msg.sender}:</span> ${msg.message}`;
            chatBox.appendChild(messageElement);
        });

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

chatForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    const newMessage = messageInput.value.trim();
    const selectedClass = classSelect.value;

    if (newMessage && selectedClass) {
        const messageElement = document.createElement("div");
        messageElement.className = "chat-message";
        messageElement.innerHTML = `<span>You:</span> ${newMessage}`;
        chatBox.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
