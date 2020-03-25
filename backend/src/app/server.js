const express = require('express');
const server = express();
const PORT = 3002;

const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.json());
server.use(routes);
server.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
});

// database 
require('../database/db');

