const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));


let messages = [];

const users = [
    {username: 'user1', password: 'pass1'},
    {username: 'user2', password: 'pass2'},
    {username: 'user3', password: 'pass3'}
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

app.post('/messages', (req, res) => {
    const {username, message} = req.body;
    if (username && message) {
        messages.push({username, message});
        res.status(201).json({username, message});
    } else {
        res.status(400).json({error: 'Invalid message format'});
    }
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
