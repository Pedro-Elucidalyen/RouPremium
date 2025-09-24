const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Funcionando!');
});

// Importando as rotas
const clienteRoutes = require('./routes/Cliente');
const produtoRoutes = require('./routes/Produto');
const carrinhoRoutes = require('./routes/Carrinho'); 
const simulacaoRoutes = require('./routes/Simulacao');

// Registrando as rotas
app.use('/api', clienteRoutes);
app.use('/api', produtoRoutes);
app.use('/api', carrinhoRoutes);
app.use('/api', simulacaoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});