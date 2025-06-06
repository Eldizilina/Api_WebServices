const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Função auxiliar para carregar dados
const getPontosTuristicos = () => {
  const filePath = path.join(__dirname, '../data/pontosTuristicos.json');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    return [];
  }
};

// GET /api/pontos-turisticos/ → todos os pontos
router.get('/', (req, res) => {
  const pontos = getPontosTuristicos();
  res.json(pontos);
});

// GET /api/pontos-turisticos/distrito/:distrito → filtro por distrito
router.get('/distrito/:distrito', (req, res) => {
  const distrito = req.params.distrito.toLowerCase();
  const pontos = getPontosTuristicos();
  const filtrados = pontos.filter(p =>
    p.distrito && p.distrito.toLowerCase() === distrito
  );

  if (filtrados.length === 0) {
    return res.status(404).json({ mensagem: 'Nenhum ponto encontrado para este distrito.' });
  }

  res.json(filtrados);
});

// GET /api/pontos-turisticos/:id → buscar por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pontos = getPontosTuristicos();
  const ponto = pontos.find(p => p.id === id);

  if (!ponto) {
    return res.status(404).json({ mensagem: 'Ponto turístico não encontrado.' });
  }

  res.json(ponto);
});

module.exports = router;
