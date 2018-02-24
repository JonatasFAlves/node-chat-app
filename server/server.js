const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = socketIO(server);

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    socket.emit('newMessage', {
        from: 'J-Server',
        text: 'Hey man, this is your server speaking.',
        createdAt: new Date()
    });

    socket.on('createMessage', (message) => console.log(message));
});

server.listen(3000, () => console.log('Server started'));