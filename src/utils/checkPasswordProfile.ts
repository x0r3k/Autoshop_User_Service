import db from '../sequelize/models';
import { CHttpError, createHttpError, MAIN_ERROR_CODES } from '../services/errorHandling';
import { HashString } from '.';

const {
  aaUser, aaProfile, aaPswdHist,
} = db;

async function checkPasswordRestriction(password: string, profileCd: string, userId?: string): Promise<void | CHttpError> {
  const passwordProfile = await aaProfile.findOne({ where: { profileCd } });
  if (!passwordProfile) return createHttpError(MAIN_ERROR_CODES.ELEMENT_NOT_FOUND, 'Default profile not found');
  if (password.length < passwordProfile.pswdLenMin) {
    return createHttpError(MAIN_ERROR_CODES.VALIDATION_BODY, `Password cannot be shorter than ${passwordProfile.pswdLenMin} symbols`);
  }
  if (passwordProfile.pswdLenMin && /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password)) {
    return createHttpError(MAIN_ERROR_CODES.VALIDATION_BODY, 'Password is not alphanumberic');
  }
  const user = await aaUser.findOne({ where: { userId } });
  if (!user) return createHttpError(MAIN_ERROR_CODES.ELEMENT_NOT_FOUND, 'User not found');

  const passwordHistory = await aaPswdHist.findAll({
    where: { userId },
    order: [['createdDt', 'DESC']],
    limit: passwordProfile.pswdHistUnique,
  });

  if (passwordHistory.length) {
    const checkHistory = passwordHistory.some((item) => HashString.verifySync(password, item.password, item.salt));
    if (checkHistory) return createHttpError(MAIN_ERROR_CODES.VALIDATION_BODY, 'Password does not meet history requirements');
  }
  return null;
}

export default checkPasswordRestriction;
