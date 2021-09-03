import express from 'express';
import controller from './authentication.controller';
import validation from './authentication.validation';

const router = express.Router();

const basePath = '/authentication';

router.get(`${basePath}/sign-up`, validation.signUpValidation, controller.signUp);

export default router;
