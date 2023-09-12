import db from '../database/db'
import { PreparedStatement } from 'pg-promise'

class Pais {


async cadastrarConta() {
    try {

            const query = new PreparedStatement({name: 'cadastrar-pais', text: "insert into pais(pais, DDI, ativo) values ($1, $2, $3) returning *;", values: ['Chile', '+26', true]})
            const result = await db.oneOrNone(query)
            return result

        } catch (error) {
            throw error
        }
    }   
}

export default new Pais()
