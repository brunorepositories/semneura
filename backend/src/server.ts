require('dotenv').config()

import cors from 'cors'
import helmet from 'helmet'
import express from'express'
import routes from './router/router'
import errorHandler from './functions/errorHandler'


const app = express()

app.use(cors())
app.use(helmet())
app.use(errorHandler)
app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3333;

try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
} catch (error) {
    console.log(`Error occurred: ${error.message}`)
}

export default app

