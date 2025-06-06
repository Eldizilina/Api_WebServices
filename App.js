const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Função para carregar dados do JSON
const getPontosTuristicos = () => {
  const filePath = path.join(__dirname, 'data', 'pontosTuristicos.json');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    return [];
  }
};

// Rota principal: retorna todos os pontos turísticos
app.get('/api/pontos-turisticos', (req, res) => {
  const pontos = getPontosTuristicos();
  res.json(pontos);
});

// Rota por distrito
app.get('/api/pontos-turisticos/distrito/:nome', (req, res) => {
  const distrito = req.params.nome.toLowerCase();
  const pontos = getPontosTuristicos();

  const filtrados = pontos.filter(p =>
    p.distrito && p.distrito.toLowerCase() === distrito
  );

  if (filtrados.length === 0) {
    return res.status(404).json({ mensagem: 'Nenhum ponto turístico encontrado para este distrito.' });
  }

  res.json(filtrados);
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
