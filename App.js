const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const PontoTuristico = require('./models/pontoTuristico');
const pontoTuristicoRoutes = require('./routes/pontoTuristicoRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/pontos-turisticos', pontoTuristicoRoutes);

// Testar conexão com o banco de dados e sincronizar modelos
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Erro ao conectar ou sincronizar com o banco de dados:', error);
  });

module.exports = app;