import { Request, Response, NextFunction } from "express"
import Status from 'http-status'
import Pais from '../services/paisService'

class paisController {

    public async criarConta(req: Request, res: Response, next: NextFunction) {
        
        console.log("paisControler > ciarConta -----------------")
        console.log(req.body)
        console.log("paisControler > ciarConta -----------------")

        const dados = req.body

        console.log("paisControler > ciarConta -----------------")
        console.log(dados)
        console.log("paisControler > ciarConta -----------------")
        // const usuario = req.headers.usuario
        try {
            const valor = await Pais.cadastrarConta(dados.pais, dados.sigla, dados.ddi)
            // const novaConta = await cadastrarConta(conta, usuario)
            res.status(200).json(valor)
        } catch (error) {
            next(error);
       }
     }

     public async buscarPaises(req: Request, res: Response, next: NextFunction) {
        try {
            const listaPaises = await Pais.listarPaises()
            res.status(200).json(listaPaises)
        } catch (error) {
            next(error);
       }
     }


}

export default new paisController();