import {
  param, query, body, ValidationChain,
} from 'express-validator';

export default class AuthenticationMiddleware {
  static signUpValidation: ValidationChain[] = [
    body('email').exists()
      .withMessage('Email is required')
      .bail()
      .isEmail()
      .withMessage('Email does not match format'),
    body('password').exists()
      .withMessage('Password is required')
      .bail()
      .notEmpty()
      .withMessage('Password cannot be empty'),
    body('name').exists()
      .withMessage('Name is required')
      .bail()
      .notEmpty()
      .withMessage('Name cannot be empty')
      .bail()
      .isLength({ max: 20 })
      .withMessage('Name max length is 20'),
    body('lastname').optional()
      .notEmpty()
      .withMessage('Last name cannot be empty')
      .bail()
      .isLength({ max: 30 })
      .withMessage('Last name max length is 30'),
    body('gender').optional()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
    body('birthdate').optional()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
    body('lastname').optional()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
    body('state').optional()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
    body('authType').exists()
      .withMessage('Auth type is required')
      .bail()
      .notEmpty()
      .withMessage('Auth type cannot be empty'),
  ];
}
