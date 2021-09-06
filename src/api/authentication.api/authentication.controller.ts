import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import db from '../../sequelize/models';
import { createHttpError, MAIN_ERROR_CODES } from '../../services/errorHandling';

const {
  sequelize, aaUser, ctCustomer, ctCustomerSettings, aaProfile, aaRole,
} = db;

const controllers = {
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        await transaction.rollback();
        return next(createHttpError(MAIN_ERROR_CODES.VALIDATION_BODY, 'Invalid request params', { validation: errors.mapped() }));
      }
      const {
        email, password, name, lastname, gender, birthdate, city, role,
      } = req.body;

      const defaultProfile = await aaProfile.findOne({ where: { profileCd: 'DEFAULT' } });
      if (!defaultProfile) {
        await transaction.rollback();
        return next(createHttpError(MAIN_ERROR_CODES.DATABASE_ERROR, 'Default profile not found'));
      }

      const customerRole = await aaRole.findOne({ where: { roleCd: 'CUSTOMER' } });
      if (!customerRole) {
        await transaction.rollback();
        return next(createHttpError(MAIN_ERROR_CODES.DATABASE_ERROR, 'Customer role not found'));
      }

      // check if user email exists
      const checkEmail = await aaUser.findOne({ where: { email } });
      if (!checkEmail) {
        await transaction.rollback();
        return next(createHttpError(MAIN_ERROR_CODES.ELEMENT_EXISTS, 'User with this email already exists'));
      }

      // const createdUser = await aaUser.create({
      //   profileId: defaultProfile.profileId,
      //   roleId: customerRole.roleId,
      //   username: email,
      //   userType: 'I',
      //   password: password,
      // }, { transaction });

      res.status(200).json('Success');
    } catch (error) {
      await transaction.rollback();
      console.log(error);
      return next(createHttpError(MAIN_ERROR_CODES.SYSTEM_ERROR, 'Something went wrong, please try again'));
    }
  },
};

export default controllers;
