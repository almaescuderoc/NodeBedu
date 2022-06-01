const Pedido = require('../models/Pedido');
const { Op } = require('sequelize');

function crearPedido(req, res) {
	var body = req.body;
	Pedido.create(body)
	.then( pedido => res.status(200).send(pedido))
}

function obtenerPedidos(req, res) {
	Pedido.findAll()
	.then( pedidos => res.status(200).send(pedidos))
}

function obtenerPedido(req, res) {
	var idP = req.params.id;
	Pedido.findOne({
		where: {
			id_pedido : idP
		}
	})
	.then( pedido => res.status(200).send(pedido))
}

function modificarPedido(req, res) {
	var body = req.body;
	var idP = req.params.id;
	Pedido.update( body, {
		where : {
			id_pedido: idP
		}
	})
	.then( pedido => res.status(200).send(pedido))
}

function eliminarPedido(req, res) {
	var idP = req.params.id;
	Pedido.destroy({
		where : {
			id_pedido : idP
		}
	})
	.then(r => res.status(200).send("Se elimino el pedido: " + idP))
}

module.exports = {
	crearPedido,
	obtenerPedidos,
	modificarPedido,
	eliminarPedido,
	obtenerPedido
}
