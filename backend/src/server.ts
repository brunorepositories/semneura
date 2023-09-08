require('dotenv').config()

import cors from 'cors'
import helmet from 'helmet'
import express from'express'
import routes from './router/router'


const app = express()

app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())
app.use(helmet())

const PORT = process.env.PORT || 3000;

try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
} catch (error) {
    console.log(`Error occurred: ${error.message}`)
}

export default app

