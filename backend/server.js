const express = require('express');
const cors = require('cors');
const http = require('http'); // 🆕
const { Server } = require('socket.io');
// import express from "express"
// import { createServer } from "http"
// import { Server } from "socket.io"


const app = express();
const server = http.createServer(app);

// SOCKET.IO


// INITIALIZING SOCKET.IO

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(express.json());
app.use(cors());

// Handle socket connections
io.on('connection', (socket) => {
    console.log('🟢 New client connected:', socket.id);

    socket.on('chat message', (msg) => {
        console.log('📨 Message received:', msg);
        io.emit('chat message', msg); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
        console.log('🔌 Client disconnected:', socket.id);
    });
});




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
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));