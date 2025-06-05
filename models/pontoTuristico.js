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
  timestamps: true
});

module.exports = PontoTuristico;