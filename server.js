const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files
app.use(express.static('public'));

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle drawing events
    socket.on('draw', (data) => {
        // Broadcast the drawing data to all other clients
        socket.broadcast.emit('draw', data);
    });

    // Handle clear canvas event
    socket.on('clear', () => {
        // Broadcast clear event to all clients
        io.emit('clear');
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 