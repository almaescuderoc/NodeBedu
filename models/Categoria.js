
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Categoria = sequelize.define('categoria', {
	id_categoria: {
		type : DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	descripcion: {
		type : DataTypes.TEXT
	}
},{
	freezeTableName: true,
	timestamps: false
})

module.exports = Categoria;
