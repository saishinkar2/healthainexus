function typeWriterEffect(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Simulating message received to display in typewriter effect
  const messagesDiv = document.getElementById('messages');
  
  // Example usage: Display a message in typewriter effect
  const exampleMessage = "Welcome to HealthAI Nexus! How can I assist you today?";
  
  // Apply typewriter effect when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    typeWriterEffect(messagesDiv, exampleMessage, 35); // Speed: 50ms per character
  });

  // Handle form submission (simulating sending a message)
  document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('user-input').value;
    
    if (userInput) {
      const newMessage = document.createElement('div');
      newMessage.className = 'user-message';
      messagesDiv.appendChild(newMessage);
      typeWriterEffect(newMessage, userInput, 25);
      document.getElementById('user-input').value = '';
    }
  });