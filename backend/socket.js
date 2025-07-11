function setupSocket(io) {
  io.on('connection', (socket) => {
    console.log('Un usuario conectado:', socket.id);

    socket.on('nuevo-item', (item) => {
      console.log('Nuevo item:', item);

      io.emit('actualizar-lista', item);
    });

    socket.on('disconnect', () => {
      console.log('Usuario desconectado:', socket.id);
    });
  });
}

module.exports = { setupSocket };
