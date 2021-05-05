const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

connections = [];
users = [];
chat = [];

io.on('connection', socket => {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', data => {
    users.splice(users.indexOf(socket.username), 1);
    connections.splice(connections.indexOf(socket), 1);
    console.log('Dicsonnected: %s sockets connected', connections.length);
  });

  // Send Message
  socket.on('send message', data => {
    console.log(data);
    chat.push({ text: data, user: socket.username });
    io.emit('new message', chat);
    updateMessages();
  });

  // New User
  socket.on('new user', (data, callback) => {
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
    updateMessages();
  });

  function updateUsernames() {
    io.emit('get users', users);
  }

  function updateMessages() {
    io.emit('get messages', chat);
  }
});

server.listen(process.env.PORT || 3001);

// app.get('/', (req, res) => {
//   res.send(__dirname + '/client/public');
// });
