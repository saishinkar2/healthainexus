document.getElementById('chat-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const apiKey = 'AIzaSyDOpOFfsBVxsHqGDQZGdO0efDlHcPgfmNA';
    const input = document.getElementById('user-input');
    const submitButton = document.querySelector('button[type="submit"]');
    const message = input.value.trim();
    if (!message) return;

    addMessage('User', message); // Display user's message immediately
    input.value = ''; // Clear input field after sending message
    submitButton.disabled = true; // Disable the button to prevent another submit

    const data = {
        "contents": [
            {
                "parts": [
                    {
                        "text": message
                    }
                ]
            }
        ]
    };

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, details: ${JSON.stringify(errorDetails)}`);
        }

        const result = await response.json();
        const botReply = result.candidates[0]?.content?.parts[0]?.text || "Sorry, I don't have a response.";
        addMessage('Bot', botReply, true); // Pass true to trigger typewriter effect for bot replies

    } catch (error) {
        console.error('Error making API request:', error.message);
        addMessage('Bot', `Error processing your request: ${error.message}`);
    } finally {
        submitButton.disabled = false; // Re-enable the submit button once the request is complete
    }
});

// Function to add messages to the chat
function addMessage(sender, message, typewriter = false) {
    const messages = document.getElementById('messages');
    const div = document.createElement("div");

    div.classList.add('p-2', 'mb-2', 'rounded', sender === 'User' ? 'bg-light' : 'chatmsg');

    if (sender === 'User') {
        const converter = new showdown.Converter();
        const htmlMessage = converter.makeHtml(message);
        div.innerHTML = `<strong>User:</strong> ${htmlMessage}`;
    } else {
        const converter = new showdown.Converter();
        const htmlMessage = converter.makeHtml(message); // Convert bot reply to HTML

        // Assign a unique ID for each bot response to avoid overwriting
        const uniqueId = `bot-message-${Date.now()}`; 
        div.innerHTML = `<strong>Bot:</strong> <span id="${uniqueId}" class="typed-message"></span>`;
        messages.appendChild(div);

        // Call typing effect for this message
        typing(`#${uniqueId}`, htmlMessage); 
    }

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight; // Scroll to the latest message
}

// Function to handle typing effect with Typed.js
function typing(targetElement, htmlMessage) {
    new Typed(targetElement, {
        strings: [htmlMessage], // The message to type
        typeSpeed: 10, // Speed of typing
        showCursor: false, // Show the cursor while typing
        loop: false, // No looping
        onComplete: function() {
            // Typing completed, but the text remains intact
        }
    });
}
