require('dotenv').config()

import cors from 'cors'
import express from'express'
import helmet from 'helmet'
import errorHandler from './functions/errorHandler'
import routes from './router/router'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(helmet())
app.use(errorHandler)

app.use(routes)

const PORT = process.env.PORT || 3333;

try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
} catch (error) {
    console.log(`Error occurred: ${error}`)
}

export default app

