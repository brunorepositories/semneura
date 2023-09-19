import { Request, Response, NextFunction } from "express"
import Status from 'http-status'
import PaisService from '../services/paisService'

class paisController {


    public async criarConta(req: Request, res: Response, next: NextFunction) {
        
        console.log("paisControler > ciarConta -----------------")
        console.log(req.body)
        console.log("paisControler > ciarConta -----------------")

        const dados = req.body

        console.log("paisControler > ciarConta -----------------")
        console.log(dados)
        console.log("paisControler > ciarConta -----------------")
        
        try {
            
            const result = PaisService.cadastrarConta(dados)
            return result

        } catch (error) {
            next(error)
        }

     }

     public async buscarPaises(req: Request, res: Response, next: NextFunction) {
        try {
            const listaPaises = await PaisService.listarPaises()

            res.status(200).json(listaPaises)
        } catch (error) {
            next(error);
       }
     }


}

export default new paisController();
