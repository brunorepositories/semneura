import express from 'express'

const routes = express.Router()

// Usuário
routes.get('/usuario/criar', (req, res) => {
    return res.json({ hello: "sucesso"})
})


export default routes
