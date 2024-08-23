const net = require('net');

const HOST = 'localhost';
const PORT = 5000;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Conectado ao servidor');

    // Envia uma mensagem para o servidor
    const message = 'Olá, servidor!';
    client.write(message);
});

client.on('data', (data) => {
    console.log('Mensagem do servidor:', data.toString());

    // Fecha a conexão após receber a resposta do servidor
    client.end();
});

client.on('close', () => {
    console.log('Conexão fechada');
});

client.on('error', (err) => {
    console.error('Erro:', err.message);
});
