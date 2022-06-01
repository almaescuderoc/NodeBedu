const Categoria = require('../models/Categoria');
const { Op } = require('sequelize');

function crearCategoria(req, res) {
	var body = req.body;
	Categoria.create(body)
	.then( categoria => res.status(200).send(categoria))
}

function obtenerCategorias(req, res) {
	Categoria.findAll()
	.then( categorias => res.status(200).send(categorias))
}

function obtenerCategoria(req, res) {
	var idC = req.params.id;
	Categoria.findOne({
		where: {
			id_categoria : idC
		}
	})
	.then( categoria => res.status(200).send(categoria))
}


function modificarCategoria(req, res) {
	var body = req.body;
	var idP = req.params.id;
	Categoria.update( body, {
		where : {
			id_categoria: idP
		}
	})
	.then( categoria => res.status(200).send(categoria))
}

function eliminarCategoria(req, res) {
	var idP = req.params.id;
	Categoria.destroy({
		where : {
			id_categoria : idP
		}
	})
	.then(r => res.status(200).send("Se elimino la categoria: " + idP))   //,idP
}

module.exports = {
	crearCategoria,
	obtenerCategorias,
	modificarCategoria,
	eliminarCategoria,
	obtenerCategoria
}
