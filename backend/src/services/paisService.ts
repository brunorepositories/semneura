import db from '../database/db'
import { PreparedStatement } from 'pg-promise'

class Pais {

    async cadastrarConta(pais: string, sigla: string, ddi: string) {
        try {

            const query = new PreparedStatement({name: 'cadastrar-pais', text: "insert into pais(pais, DDI, ativo) values ($1, $2, $3) returning *;", values: ['teste', 'sigla', 'ddi']})
            const result = await db.oneOrNone(query) 
            console.log(result)
            return result

        } catch (error) {
            throw error
        }
    }   

    async listarPaises() {
        try {

            const query = new PreparedStatement({name: 'cadastrar-pais', text: "select json_agg(row_to_json(resultado)) from (select * FROM pais) resultado;"})
            const result = await db.oneOrNone(query) 
            console.log(result)
            return result

        } catch (error) {
            throw error
        }
    }   
}

export default new Pais()
