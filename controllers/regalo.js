const Regalo = require('../models/Regalo');
const { Op } = require('sequelize');

function crearRegalo(req, res) {
	var body = req.body;
	Regalo.create(body)
	.then( regalo => res.status(200).send(regalo))
}

function obtenerRegalos(req, res) {
	Regalo.findAll()
	.then( regalos => res.status(200).send(regalos))
}

function obtenerRegalo(req, res) {
	var idR = req.params.id;
	Regalo.findOne({
		where: {
			id_regalo : idR
		}
	})
	.then( regalo => res.status(200).send(regalo))
}

function modificarRegalo(req, res) {
	var body = req.body;
	var idP = req.params.id;
	Regalo.update( body, {
		where : {
			id_regalo: idP
		}
	})
	.then( regalo => res.status(200).send(regalo))
}

function eliminarRegalo(req, res) {
	var idP = req.params.id;
	Regalo.destroy({
		where : {
			id_regalo : idP
		}
	})
	.then(r => res.status(200).send("Se elimino el regalo: " + idP))
}

module.exports = {
	crearRegalo,
	obtenerRegalos,
	modificarRegalo,
	eliminarRegalo, 
	obtenerRegalo
}
