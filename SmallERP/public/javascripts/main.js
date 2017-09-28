var socket = io.connect('http://localhost:8090', { 'forceNew': true });

socket.on('messages', function(data) {
	console.log(data);
});