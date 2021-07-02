import { Request, Response, NextFunction } from 'express';
import { CHttpError } from './errorObjectBuilder';

export function httpErrorHandler(error: any, req: Request, res: Response, next: NextFunction): any {
  if (error instanceof CHttpError) {
    if (!error.errorObj || !error.errorObj.ERROR_CODE || !error.errorObj.HTTP_CODE) {
      // console.log(error);
      res.status(500);
      res.json({
        code: '888',
        message: 'Undefined error',
      });
    } else {
      res.status(error.errorObj.HTTP_CODE);
      if (error.details && (Array.isArray(error.details) || (typeof error.details === 'object' && error.details !== null))) {
        res.json({
          code: error.errorObj.ERROR_CODE,
          message: error.message || error.errorObj.DEFAULT_MESSAGE,
          details: error.details || [],
        });
      } else {
        res.json({
          code: error.errorObj.ERROR_CODE,
          message: error.message || error.errorObj.DEFAULT_MESSAGE,
        });
      }
    }
  } else {
    next(error);
  }
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction): any {
  res.status(500);
  res.send({ err });
}

//   if (error instanceof SyntaxError) {
//     res.status(400);
//     res.json({
//       code: '250',
//       message: error.message,
//       details: {
//         stack: error.stack,
//       },
//     });
//   } else if (!error.errorObj || !error.errorObj.ERROR_CODE || !error.errorObj.HTTP_CODE) {
//     // console.log(error);
//     res.status(500);
//     res.json({
//       code: '888',
//       message: 'Undefined error',
//     });
//   } else {
//     res.status(error.errorObj.HTTP_CODE);
//     if (error.details && (Array.isArray(error.details) || (typeof error.details === 'object' && error.details !== null))) {
//       res.json({
//         code: error.errorObj.ERROR_CODE,
//         message: error.message || error.errorObj.DEFAULT_MESSAGE,
//         details: error.details || [],
//       });
//     } else {
//       res.json({
//         code: error.errorObj.ERROR_CODE,
//         message: error.message || error.errorObj.DEFAULT_MESSAGE,
//       });
//     }
//   }
// }]
