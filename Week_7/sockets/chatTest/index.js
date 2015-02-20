var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

io.on('connection', function(socket){ // open io
 
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  console.log("User has joined.");

  socket.broadcast.emit('user joined', {
      data: "A user has joined."
  });


  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
  	console.log("typing");
    socket.broadcast.emit('typing', {
      data: "User is typing."
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
  	console.log("stopped typing");
    socket.broadcast.emit('stop typing', {
      data: "User stopped typing."
    });
  });


	// when the user disconnects.. perform this
	socket.on('disconnect', function () {
		console.log("User has left.");
	  // echo globally that this client has left
	  socket.broadcast.emit('user left', {
	    data: "User has left."
	  });
	});


}); // close io



http.listen(3000, function(){
  console.log('listening on *:3000');
});