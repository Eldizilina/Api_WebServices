const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PontoTuristico = sequelize.define('PontoTuristico', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  distrito: {
    type: DataTypes.STRING,
    allowNull: false
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pontos_proximos: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array de nomes de pontos próximos
    defaultValue: []
  },
  imagem_url: {
    type: DataTypes.STRING
  },
}, {
  tableName: 'pontos_turisticos',
  timestamps: false
});

// pontoTuristicoController.js
const { Op } = require("sequelize");

exports.getByDistrito = async (req, res) => {
  const { distrito } = req.params;
  try {
    const pontos = await PontoTuristico.findAll({
      where: {
        distrito: {
          [Op.iLike]: `%${distrito}%`
        }
      }
    });

    res.json(pontos);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar por distrito" });
  }
};


module.exports = PontoTuristico;