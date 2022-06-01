// Se reutiliza la conexión al realizar un único archivo de base de datos

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
 'dbRegalos',   // 'BeduShop', // Nombre de la BD        process.env.DATABASE,   // DEFINIR COMO VARIABLES DE ENTORNO
  'root', //'root', // Usuario                    process.env.USER,
  'root',  //*9ak/oVTwtY_eI:.', //contraseña      process.env.PASSWORD
{
  host: 'localhost', //'34.221.160.76', // host        process.env.HOST
  dialect: 'mssql',
  dialectOptions: {
    options: {
    encrypt:false,
  }}
});

module.exports = sequelize;