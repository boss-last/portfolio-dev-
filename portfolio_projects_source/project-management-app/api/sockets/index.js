module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('🔌 Client connected', socket.id);

    socket.on('project:join', (projectId) => socket.join(`project:${projectId}`));

    socket.on('chat:message', ({ projectId, text, userId }) => {
      io.to(`project:${projectId}`).emit('chat:message', { text, userId, at: Date.now() });
    });

    socket.on('disconnect', () => console.log('❌ Client disconnected', socket.id));
  });
};
