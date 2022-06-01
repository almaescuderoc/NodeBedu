const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const bcrypt= require('bcrypt');

const User = sequelize.define('usuario', {     //define es el nombre de la tabla en la base de datos
	id: {
		type : DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	nombre: {
		type : DataTypes.TEXT
	},
	apellido_paterno: {
		type : DataTypes.TEXT
	},
	apellido_materno: {
		type : DataTypes.TEXT
	},
	email: {
		type : DataTypes.TEXT
	},
	password: {
		type : DataTypes.TEXT
	},
	fecha_nacimiento: {
		type : DataTypes.DATE
	},
},{
    // definir hook para password
    hooks:{
        beforeCreate: (user) =>{
            const salt = bcrypt.genSaltSync();
            user.password=bcrypt.hashSync(user.password, salt);
        },
    },
	freezeTableName: true,
	timestamps: false
})

// Prototipo: Funcionalidades para el modelo
// Esta es la definicón pero no la estamos utilizando, es para implementarla después
User.prototype.validPassword = function(pass){  //Compara la contraseña que recibe del usuario con la que tenemos que está cifrada
    return bcrypt.compareSync(pass,this.password)
}

module.exports = User;
