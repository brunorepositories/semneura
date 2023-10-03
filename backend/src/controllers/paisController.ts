import { Request, Response, NextFunction } from "express";
import STATUS from "http-status";
import PaisService from "../services/paisService";

class paisController {

    public async cadastrarPais(req: Request, res: Response, next: NextFunction) {

        const { ...pais } = req.body;  

        if (pais && pais.pais && pais.sigla && pais.ddi) {
            try {
                const result = PaisService.criarPais(pais)
                return res.status(STATUS.OK).json(result)

            } catch (error) {
                next(error);
            }
        } else {
            return res.status(STATUS.BAD_REQUEST).send("Campo obrigatório não preenchido!")
        }
    }

    public async buscarPaises(req: Request, res: Response, next: NextFunction) {
        try {
            const listaPaises = await PaisService.listarPaises();
            return res.status(200).json(listaPaises);
        } catch (error) {
            next(error);
        }
    }
}

export default new paisController();
