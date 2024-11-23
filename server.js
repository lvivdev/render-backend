const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Dummy user database (pre-hashed password for "password123")
const users = {
    'admin': bcrypt.hashSync('password123', 10),
};

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && bcrypt.compareSync(password, users[username])) {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Invalid credentials!' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
