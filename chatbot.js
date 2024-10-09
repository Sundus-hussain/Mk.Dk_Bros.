const botResponses = {
    "hello": "Hi I am MDBot there! How can I help you today?",
    "hi": "Hi I am MDBot there! How can I help you today?",
    "how are you": "I'm just a bot, but thanks for asking! How about you?",
    "who are you": "I'm MDBot, your helpful assistant.",
    "bye": "Goodbye! Have a great day!",
    "default": "Sorry, I didn't understand that. Could you please rephrase?" ,
    "who is your father": "My Father's name is Shahid Ezaz Khan",
    "father": "My Father's name is Shahid Ezaz Khan",
    "what is your father's name": "My Father's name is Shahid Ezaz Khan",
    "what is your father name": "My Father's name is Shahid Ezaz Khan",
    "what is your father date of birth": "My Father's date of birth is 5th of February",
    "father date of birth": "My Father's date of birth is 5th of February",
    "father DOB": "My Father's date of birth is 5th of February",
    "when did your father travel to USA": "My father went to the USA on a work visa in 2015.",
    "who is your mother": "My Mother's name is Sundus Hussain",
    "Mother": "My Mother's name is Sundus Hussain",
    "what is your mother's name": "My Mother's name is Sundus Hussain",
    "what is your mother name": "My Mother's name is Sundus Hussain",
    "what is your mother date of birth": "My Mother's date of birth is 2nd of April",
    "mother date of birth": "My Mother's date of birth is 2nd of April",
    "mother DOB": "My Mother's date of birth is 2nd of April",
    "when did your mother travel to USA": "My mother went to the USA in 2021.",
    "who are you?": "We are Siblings named Mikaeel Ezaz Khan and Daniyal Ezaz khan, born in San Jose, USA. Our parents are Software Engineers",
    "who are you": "We are Siblings named Mikaeel Ezaz Khan and Daniyal Ezaz khan, born in San Jose, USA. Our parents are Software Engineers",
    "What is your Aim?": "At M & D Bros., we go beyond style and fashion—we’re building a community where parents, children, and causes come together. Inspired by siblings Mikaeel and Daniyal, our brand embraces the spirit of family and giving back. Not only do we offer stylish, high-quality clothing for toddlers and young kids, but we also provide a platform for parent engagement, where families can share portfolios, connect with photographers for memorable shoots, and even contribute to charitable causes through our donation initiatives. At M & D Bros., fashion meets heart as we strive to support both your little one’s wardrobe and the broader community.",
    "What is your Aim": "At M & D Bros., we go beyond style and fashion—we’re building a community where parents, children, and causes come together. Inspired by siblings Mikaeel and Daniyal, our brand embraces the spirit of family and giving back. Not only do we offer stylish, high-quality clothing for toddlers and young kids, but we also provide a platform for parent engagement, where families can share portfolios, connect with photographers for memorable shoots, and even contribute to charitable causes through our donation initiatives. At M & D Bros., fashion meets heart as we strive to support both your little one’s wardrobe and the broader community.",


  };
  
  function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value.trim().toLowerCase();
  
    if (userMessage === "") return;
  
    displayMessage(userMessage, 'user');
    inputField.value = '';
    
    setTimeout(() => {
      const botMessage = botResponses[userMessage] || botResponses["default"];
      displayMessage(botMessage, 'bot');
    }, 500);
  }
  
  function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    messageElement.textContent = message;
  
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  