import db from "../database/db";
import PaisModel from "../models/Pais";
import abstractService from "./abstractService";
import { PreparedStatement } from "pg-promise";

class PaisService extends abstractService<any> {

  private pais: PaisModel;

  constructor() {
    super("pais");
    this.pais = new PaisModel();
  }

  async cadastrarConta(dados: any) {
    try {
      // const query = new PreparedStatement({name: 'cadastrar-pais', text: "insert into pais(pais, DDI, ativo) values ($1, $2, $3) returning *;", values: ['teste', 'sigla', 'ddi']})
      // const result = await db.oneOrNone(query)
      // console.log(result)

      console.log("chegou aqui ---");
      console.log(dados);

      const result = this.save(dados);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async listarPaises() {
    try {
        
        const result = await this.findAll();

        return result;
    } catch (error) {
        throw error;
    }
  }
}

export default new PaisService();
