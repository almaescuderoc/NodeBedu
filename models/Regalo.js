
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Regalo = sequelize.define('regalo', {
	id_regalo: {
		type : DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	descripcion: {
		type : DataTypes.TEXT
	},
	costo: {
		type : DataTypes.REAL
	},
	estrellas_promedio: {
		type : DataTypes.INTEGER
	},
	id_categoria : {
		type : DataTypes.INTEGER,
		allowNull: false,
		foreignKey:true
	}
},{
	freezeTableName: true,
	timestamps: false
})

module.exports = Regalo;
