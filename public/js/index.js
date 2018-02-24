var socket = io();

socket.on('newMessage', function(message) {

});

socket.on('connect', function() {
    socket.emit('createMessage', {
        from: 'me, the client',
        text: 'Hey server... Shut up..'
    });
});

