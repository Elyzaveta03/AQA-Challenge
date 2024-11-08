let username = null;

document.getElementById('login-button').addEventListener('click', async () => {
    username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    if (result.success) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('chat-section').style.display = 'block';
        await loadMessages();
    } else {
        showErrorPopup(result.message || 'Invalid username or password');
    }
});

document.getElementById('send-button').addEventListener('click', async () => {
    const message = document.getElementById('message-input').value;

    if (message.trim()) {
        await fetch('http://localhost:3001/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, message })
        });
        document.getElementById('message-input').value = '';
        await loadMessages();
    }
});

async function loadMessages() {
    const response = await fetch('http://localhost:3001/messages');
    if (response.ok) {
        const messages = await response.json();
        const messageArea = document.getElementById('message-area');
        messageArea.innerHTML = '';

        messages.forEach(msg => {
            messageArea.innerHTML += `<p><b>${msg.username}:</b> ${msg.message}</p>`;
        });
    }
}

const errorPopup = document.getElementById('error-popup');
const closePopupButton = document.getElementById('close-popup');

const showErrorPopup = (message) => {
    document.getElementById('error-message').innerText = message;
    errorPopup.style.display = 'block';
};

closePopupButton.addEventListener('click', () => {
    errorPopup.style.display = 'none';
});

setInterval(loadMessages, 1000);
