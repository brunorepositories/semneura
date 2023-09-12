import express from 'express'
import paisController from '../controllers/paisController'

const routes = express.Router()

// // Usuário
// routes.get('/usuario/criar', (req, res) => {
//     return res.json({ hello: "sucesso"})
// })


// Usuário
routes.get('/pais', paisController.criarConta )





export default routes
