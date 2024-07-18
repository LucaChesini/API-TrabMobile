const express = require("express");
const UsuarioController = require("./controllers/UsuarioController");
const routes = express.Router();
const {authenticateJWT, authorizeAdmin} = require('./middleware/authenticateJWT');

routes.get('/usuarios', UsuarioController.findAll);
routes.post('/usuarios', UsuarioController.store);
routes.get('/usuarios/:id', UsuarioController.show);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.destroy);

module.exports = routes;