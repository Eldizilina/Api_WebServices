const PontoTuristico = require('../models/pontoTuristico');
const { Op } = require('sequelize');
const sequelize = require('../config/database');

exports.getAll = async (req, res) => {
  try {
    const pontos = await PontoTuristico.findAll();
    res.json(pontos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const ponto = await PontoTuristico.findByPk(req.params.id);
    if (ponto) {
      res.json(ponto);
    } else {
      res.status(404).json({ error: 'Ponto turístico não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const novoPonto = await PontoTuristico.create(req.body);
    res.status(201).json(novoPonto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await PontoTuristico.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPonto = await PontoTuristico.findByPk(req.params.id);
      res.json(updatedPonto);
    } else {
      res.status(404).json({ error: 'Ponto turístico não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await PontoTuristico.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({ message: 'Ponto turístico deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Ponto turístico não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByDistrito = async (req, res) => {
  try {
    const pontos = await PontoTuristico.findAll({
      where: { distrito: req.params.distrito }
    });
    res.json(pontos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPontosProximos = async (req, res) => {
  try {
    const ponto = await PontoTuristico.findByPk(req.params.id);
    if (!ponto) {
      return res.status(404).json({ error: 'Ponto turístico não encontrado' });
    }

    const pontosProximos = await PontoTuristico.findAll({
      where: {
        nome: ponto.pontos_proximos
      }
    });
    
    res.json(pontosProximos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.search = async (req, res) => {
  try {
    const { termo } = req.query;
    
    const pontos = await PontoTuristico.findAll({
      where: {
        [Op.or]: [
          { nome: { [Op.iLike]: `%${termo}%` } },
          { descricao: { [Op.iLike]: `%${termo}%` } },
          { cidade: { [Op.iLike]: `%${termo}%` } },
          { distrito: { [Op.iLike]: `%${termo}%` } }
        ]
      }
    });
    
    res.json(pontos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};