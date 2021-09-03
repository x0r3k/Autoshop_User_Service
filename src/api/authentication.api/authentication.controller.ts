import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import db from '../../sequelize/models';
import { createHttpError, MAIN_ERROR_CODES } from '../../services/errorHandling';

const { sequelize } = db;

const controllers = {
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    // const transaction = await sequelize.transaction();
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(createHttpError(MAIN_ERROR_CODES.VALIDATION_BODY, 'Invalid request params', { validation: errors.mapped() }));
      }
      const {
        email, password, name, lastname, gender, birthdate, city, role,
      } = req.body;

      res.status(200).send('Success');
    } catch (error) {
      console.log(error);
      return next(createHttpError(MAIN_ERROR_CODES.SYSTEM_ERROR, 'Something went wrong, please try again'));
    }
  },
};

export default controllers;
