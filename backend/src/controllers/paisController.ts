import { Request, Response, NextFunction } from "express";
import STATUS from "http-status";
import PaisService from "../services/paisService";

class paisController {

    public async cadastrarPais(req: Request, res: Response) {

        const { ...pais } = req.body;  

        if (pais && pais.pais && pais.sigla && pais.ddi) {
            try {
                const result = await PaisService.criarPais(pais)

                return res.status(STATUS.OK).json(result)

            } catch (error) {
                res.status(STATUS.BAD_REQUEST).json(error)
            }
        } else {
            return res.status(STATUS.PRECONDITION_FAILED).send("Campo obrigatório não preenchido!")
        }
    }

 
    // public async editarPais(req: Request, res: Response, next: NextFunction) {

    //     const { ...pais } = req.body;  

    //     if (pais && pais.pais && pais.sigla && pais.ddi) {
    //         try {
    //             const result = PaisService.editarPais(pais)
    //             return res.status(STATUS.OK).json(result)

    //         } catch (error) {
    //             next(error);
    //         }
    //     } else {
    //         return res.status(STATUS.BAD_REQUEST).send("Campo obrigatório não preenchido!")
    //     }
    // }

    public async buscarTodos(req: Request, res: Response, next: NextFunction) {
        try {
            const listaPaises = await PaisService.findAll();
            
            return res.status(200).json(listaPaises);
        } catch (error) {
            next(error);
        }
    }
    
    // public async buscarPais(req: Request, res: Response, next: NextFunction) {
        
    //     const id = req.params.id
        
    //     try {
    //         const listaPaises = await PaisService.listarPais(id);
    //         return res.status(200).json(listaPaises);
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}

export default new paisController();
