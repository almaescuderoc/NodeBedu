const  User = require('../models/Usuario');
const { Op } = require('sequelize');

function crearUsuario(req, res) {
	var body = req.body;
	User.create(body)
	.then( user => res.status(200).send(user))
}

function obtenerUsuarios(req, res) {
	User.findAll()
	.then( users => res.status(200).send(users))
}

function obtenerUsuario(req, res) {
	var idP = req.params.id;
	var password =req.body.password;
	User.findOne({
		where: {
			id: idP
		}
	})
	.then( user => {
		if (user.validPassword(password)){
			res.status(200).send(user)
		} else{ 
			res.status(401).send("Fallo el inicio de sesión")
		}
	})
}


function login(req, res){
	var email = req.body.email;
	var password = req.body.password;
	User.findOne({
		where : {
			email:email
		}
	}).then( user => {
		if (user.validPassword(password)){
			res.status(200).send(user)
		} else{ 
			res.status(401).send("Fallo el inicio de sesión")
		}
	})
	.catch(r=> res.status(401).send("Fallo el inicio de sesión"))
}

function modificarUsuario(req, res) {
	var body = req.body;
	var idP = req.params.id;
	User.update( body, {
		where : {
			id: idP
		}
	})
	.then( user => res.status(200).send(user))
}

function eliminarUsuario(req, res) {
	var idU = req.params.id;
	User.destroy({
		where : {
			id : idU
		}
	})
	.then(r => res.status(200).send("Se elimino el usuario: " + idU))
}

module.exports = {
	crearUsuario,
	obtenerUsuarios,
	modificarUsuario,
	eliminarUsuario,
	obtenerUsuario,
	login
}
