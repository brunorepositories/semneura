import { Request, Response, NextFunction } from 'express';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);

  // Se você quiser lidar com diferentes tipos de erros de maneira personalizada, você pode usar condicionais aqui
  // Por exemplo, verificar se o erro é um erro de validação, erro de autorização, etc.

  res.status(500).render('errors/error', { message: 'Ocorreu um erro interno no servidor.' });
}

export default errorHandler