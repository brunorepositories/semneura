import express from 'express'
import paisController from '../controllers/paisController'

const routes = express.Router()

// Usuário
routes.post('/pais', paisController.criarConta)
// Usuário
routes.get('/pais', paisController.buscarPaises)





export default routes
