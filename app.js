// Programa Principal

const express = require('express');

const app = express();

const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors()); // Verifica que el dominio sea seguro

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const sequelize = require('./config/db')

app.use('/v1', require('./routers'));

const PORT =4002;           // comentar esto process.env.PORT
app.listen(PORT, ()=> {     //process.env.PORT
    console.log(`Server is listening on port ${PORT}`); // ${process.env.PORT}
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  
