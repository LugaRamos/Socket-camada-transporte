const net = require('net');

const HOST = 'localhost';
const PORT = 5000;

const server = net.createServer((socket) => {
    console.log('Cliente conectado:', socket.remoteAddress + ':' + socket.remotePort);

    // Recebe a mensagem do cliente
    socket.on('data', (data) => {
        console.log('Mensagem recebida do cliente:', data.toString());

        // Envia uma resposta de volta para o cliente
        socket.write('Mensagem recebida!');
    });

    // Lida com o encerramento da conexão pelo cliente
    socket.on('close', () => {
        console.log('Conexão fechada com o cliente:', socket.remoteAddress + ':' + socket.remotePort);
    });

    // Trata possíveis erros
    socket.on('error', (err) => {
        console.error('Erro:', err.message);
    });
});

// Inicia o servidor
server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em ${HOST}:${PORT}`);
});
