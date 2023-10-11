import db from "../database/db";
import interfacePais from "../interfaces/interfacePais"
import abstractService from "./abstractService"

class PaisService extends abstractService<any> {

    constructor() {
        super('pais');
    }

    
    async findAll() {
        try {
            const query = `SELECT json_agg(row_to_json(data)) as dados FROM ( SELECT * FROM ${this.tableName} ) as data;`

            const result = await db.manyOrNone(query) 
                
            return result
        } catch (error) {
            throw error;
        } 
    }

    async buscarPo(id: string): Promise<any | null> {
        try {
            const query = `SELECT row_to_json(data) as dados 
                            FROM ( SELECT * FROM ${this.tableName} WHERE id = $1 ) as data;`
            
            const result = await db.oneOrNone(query, [id])
            
            return result
        } catch (error) {
            throw error
        }
    }
    
    async criarPais(dadosPais: interfacePais) {

        try {
            const query = `INSERT INTO ${this.tableName} (pais, sigla, ddi, ativo) 
                            VALUES ($1, $2, $3, $4) RETURNING *;`
                            
            const result = await db.one(query, [dadosPais.pais, dadosPais.sigla, dadosPais.ddi, dadosPais.ativo])
            
            return result
        } catch (error) {
            throw error
        }
    }

    // async editarPais(dadosPais: interfacePais) {
    //     try {

    //         const pais = {
    //             id: dadosPais.id,
    //             pais: dadosPais.pais,
    //             sigla: dadosPais.sigla,
    //             ddi: dadosPais.ddi,
    //             ativo: dadosPais.ativo
    //         }
                        
    //         const paisCadastrado = this.update(pais.id, pais);
            
    //         return paisCadastrado;
            
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // async listarPais(idPais: string) {
    //     try {
    //         const result = await this.findById(idPais);
            
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

}

export default new PaisService();
