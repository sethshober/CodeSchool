var socket = io();
var $messages = $('#messages');
var $message = $('#m');


$('form').submit(function(){
  socket.emit('chat message', $message.val());
  $('#m').val('');
  return false;
});



// Log a message
function log (message, options) {
	var $el = $('<li>').addClass('log').text(message);
	addMessageElement($el, options);
}



socket.on('chat message', function (msg){
  $messages.append($('<li>').text(msg));
});

// Whenever the server emits 'user joined', log it in the chat body
socket.on('user joined', function (data) {
	console.log(data.data);
	$messages.append($('<li>').text(data.data));
});

// Whenever the server emits 'user left', log it in the chat body
socket.on('user left', function (data) {
	console.log(data.data);
	$messages.append($('<li>').text(data.data));
});