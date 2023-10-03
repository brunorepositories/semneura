import express from 'express'
import paisController from '../controllers/paisController'

const routes = express.Router()

// Usuário
routes.post('/cadastrar-pais', paisController.cadastrarPais)
// Usuário
routes.get('/paises', paisController.buscarPaises)





export default routes
