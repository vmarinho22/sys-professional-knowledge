import app from './app';

// Inicia o servidor
const server = app.listen(process.env.PORT, () => {
    console.log(`[API] Executando na porta: ${process.env.PORT}`);
});

// Interrompe o serviço caso o processo seja parado
process.on('SIGINT', () =>{
    server.close();
    console.log('[API] Encerrada');
});