import {
  param, query, ValidationChain,
} from 'express-validator';

export default class AuthenticationMiddleware {
  static signUpValidation: ValidationChain[] = [
    param('email').exists()
      .withMessage('Email is required')
      .bail()
      .isEmail()
      .withMessage('Email does not match format'),
    query('password').exists()
      .withMessage('Password is required')
      .bail()
      .notEmpty()
      .withMessage('Password cannot be empty'),
    query('name').exists()
      .withMessage('Name is required')
      .bail()
      .notEmpty()
      .withMessage('Name cannot be empty')
      .bail()
      .isLength({ max: 20 })
      .withMessage('Name max length is 20'),
    query('lastname').optional()
      .notEmpty()
      .withMessage('Last name cannot be empty')
      .bail()
      .isLength({ max: 30 })
      .withMessage('Last name max length is 30'),
    query('gender').optional()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
    query('birthdate').optional()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
    query('lastname').optional()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
    query('state').optional()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
    query('authType').exists()
      .notEmpty().withMessage('Offset cannot be empty')
      .bail()
      .isInt({ gt: 0 })
      .withMessage('Limit should be integer')
      .bail(),
  ];
}
