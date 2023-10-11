
import { formatJsonData } from './functions'
import RestConnection from '@/configs/restConnection'

// Função para Buscar as cidades e paises

class ServicePais {


    async buscarPaises() {
        try {
            const response = await RestConnection.get('/pais/buscarTodos')
            
            const result = formatJsonData(response)
            
            return result
        } catch (e) {
            return console.log("Erro ao buscar paises", e)
        }
    }

    async cadastrarPais(dadosPais) {
        try {
            const response = await RestConnection.post('/pais/cadastrar', dadosPais)

            const result = formatJsonData(response)
            
            return result
            
        } catch (e) {
            return console.log("Erro ao cadastrar pais", e)
        }
    }

    async buscarPais(id) {
        try {                
            const response = await RestConnection.get('/pais/' + id)

            console.log(response)
            
            const result = formatJsonData(response)
            
            return result
        } catch (error) {
            console.log("Erro ao buscar pais por ID: ", error)
        }
    }

}

export default new ServicePais()