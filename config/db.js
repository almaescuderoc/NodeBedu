// Se reutiliza la conexión al realizar un único archivo de base de datos

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
 'dbRegalos',    // Nombre de la BD        process.env.DATABASE,   // DEFINIR COMO VARIABLES DE ENTORNO
  'root', //'root', // Usuario                    process.env.USER,
  'root',   //contraseña      process.env.PASSWORD
{
  host: 'localhost', // host        process.env.HOST
  dialect: 'mssql',
  dialectOptions: {
    options: {
    encrypt:false,
  }}
});

module.exports = sequelize;