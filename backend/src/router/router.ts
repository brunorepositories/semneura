import express from 'express'
import paisController from '../controllers/paisController'

const routes = express.Router()

// PAIS
routes.post('/pais/cadastrar', paisController.cadastrarPais)
// routes.put('/pais/editar', paisController.editarPais)
routes.get('/pais/buscarTodos', paisController.buscarTodos)
// routes.get('/pais/buscar/:id', paisController.buscarPais)
// routes.post('/pais/deletar', paisController.cadastrarPais)





export default routes
