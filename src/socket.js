const socket = require('socket.io-client')(':8080');

module.exports = {
  socket: socket,
};
