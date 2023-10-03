import interfacePais from "../interfaces/interfacePais"
import abstractService from "./abstractService"

class PaisService extends abstractService<any> {
    constructor() {
        super("pais");
    }
    
    async criarPais(dadosPais: interfacePais) {
        try {

            const pais = {
                pais: dadosPais.pais,
                sigla: dadosPais.sigla,
                ddi: dadosPais.ddi,
                ativo: dadosPais.ativo
            }
                        
            const paisCadastrado = this.save(pais);
            
            return paisCadastrado;
            
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
