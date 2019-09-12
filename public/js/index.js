var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});

socket.on('createMessage', (mesage) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
        from: message.from, 
        text: message.text, 
        createdAt: new Date().getTime()
    });
});