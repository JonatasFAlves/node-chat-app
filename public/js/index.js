var socket = io();

socket.on('newMessage', function(message) {
    console.log(message);
});

// You can emit a new message with the following code...

// socket.emit('createMessage', {
//     from: 'me, the client number 1',
//     text: 'Hey server... Shut up..'
// });