import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import db from '../../sequelize/models';
import { createHttpError, MAIN_ERROR_CODES } from '../../services/errorHandling';
import { HashString } from '../../utils';

const {
  aaUser, aaProfile, aaRole, aaPswdHist,
} = db;

class AuthenticationController {
  static async signUp(req: Request, res: Response, next: NextFunction) {
    const { transaction } = req;
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

    const customerRole = await aaRole.findOne({ where: { roleCd: 'AU' } });
    if (!customerRole) {
      await transaction.rollback();
      return next(createHttpError(MAIN_ERROR_CODES.DATABASE_ERROR, 'Authorized user role not found'));
    }

    // check if user email exists
    const checkEmail = await aaUser.findOne({ where: { email } });
    if (checkEmail) {
      await transaction.rollback();
      return next(createHttpError(MAIN_ERROR_CODES.ELEMENT_EXISTS, 'User with this email already exists'));
    }

    // add password profile checking via checkPasswordProfile from utils

    const hashedPassword = await HashString.hash(password);

    const createdUser = await aaUser.create({
      profileId: defaultProfile.profileId,
      roleId: customerRole.roleId,
      username: email,
      userType: 'I',
      password: hashedPassword.hash,
      salt: hashedPassword.salt,
      email,
      createdDt: new Date().valueOf(),
      state: 'E',
      authType: 'I',
      lastPswdDt: new Date().valueOf(),
      loginAttempt: 0,
    }, { transaction });

    await aaPswdHist.create({
      password: hashedPassword.hash,
      salt: hashedPassword.salt,
      createdDt: new Date().valueOf(),
      userId: createdUser.userId,
    }, { transaction });

    await transaction.commit();
    return res.status(200).send(createdUser);
  }

  static test(req: Request, res: Response) { return res.status(200).send('Test auth endpoint'); }
}

export default AuthenticationController;
