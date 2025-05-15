const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// REGISTER
app.post('/api/user/register', (req, res) => {

    const { firstName, email } = req.body;

    console.log('Received data:', req.body);

    res.status(201).json({
        name: firstName,
        email: email,
        message: 'User registered successfully',
        userToken: 'arici',
    });
});


// LOG IN\

app.post('/api/user/login', (req, res) => {

    const { email, password } = req.body;

    console.log(`Login attempt with: : ${req.body} (server file)`);

    res.status(200).json({
        userToken: 'arici',
        message: 'User logged in successfully',
        email: email,
        password: password
    })

})
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
