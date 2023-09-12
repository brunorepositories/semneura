import { Request, Response, NextFunction } from "express"
import Status from 'http-status'
import Pais from '../services/paisService'

class paisController {

    id: number
    pais: string
    sigla: string
    ddi: number


    public async criarConta(req: Request, res: Response, next: NextFunction) {
        //  const { } = req.body
        // const usuario = req.headers.usuario
        try {
            const valor = await Pais.cadastrarConta
            // const novaConta = await cadastrarConta(conta, usuario)
            res.status(500).json(valor)
        } catch (error) {
            next(error);
       }
     }


}

export default new paisController();