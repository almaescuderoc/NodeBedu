
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Pedido = sequelize.define('pedido', {
	id_pedido: {
		type : DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	calle: {
		type : DataTypes.TEXT
	},
	numero: {
		type : DataTypes.TEXT
	},
	colonia: {
		type : DataTypes.TEXT
	},
	ciudad: {
		type : DataTypes.TEXT
	},
	codigo_postal: {
		type : DataTypes.INTEGER
	},
	estrellas: {
		type : DataTypes.INTEGER
	},
	id_usuario : {
		type : DataTypes.INTEGER,
		allowNull: false,
		foreignKey:true
	}
},{
	freezeTableName: true,
	timestamps: false
})

module.exports = Pedido;
