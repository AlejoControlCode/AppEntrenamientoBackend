const { DataTypes} = require('sequelize');
const {sequelize} = require('../../config/database');

const MacroCiclo = sequelize.define('MacroCiclo', {
    ID_MacroCiclo: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true  },
    Atleta_FK: {type: DataTypes.INTEGER,allowNull: false,
    references: {
        model: 'Atletas',   // nombre EXACTO de la tabla
        key: 'ID_Atleta'    // clave primaria del modelo Atletas
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
    } // Debajo de este atributo iria el siguiente

}, {
  tableName: 'MacroCiclo',
  timestamps: false
})

module.exports = MacroCiclo;
