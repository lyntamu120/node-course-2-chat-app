var socket = io();

// using regular functions to avoid crushing on browsers rather than chrome
socket.on('connect', function() {
    console.log('connected to server');

});

socket.on('disconnect', function() {
    console.log('Disconnected to server');
});

socket.on('newMessage', function(msg) {
    console.log('New message', msg);
});
