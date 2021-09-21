import {
  Request, Response, NextFunction,
} from 'express';
import { Transaction } from 'sequelize';
import { createHttpError, MAIN_ERROR_CODES } from '../services/errorHandling';
import db from '../sequelize/models';

const handlerException = (controllerFunction: Function, isTransaction?: Boolean) => async (req: Request, res: Response, next: NextFunction) => {
  let transaction: Transaction;
  if (isTransaction) {
    transaction = await db.sequelize.transaction();
    req.transaction = transaction;
  }
  try {
    controllerFunction(req, res, next);
  } catch (error) {
    if (transaction) await transaction.rollback();
    return next(createHttpError(MAIN_ERROR_CODES.SYSTEM_ERROR, 'Something went wrong, please try again'));
  }
  return null;
};

export default handlerException;
