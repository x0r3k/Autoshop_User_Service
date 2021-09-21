import express from 'express';
import controller from './authentication.controller';
import middleware from './authentication.middleware';
import CommonRoutesConfig from '../../types/common/common.routes.config';
import { handlerException } from '../../utils';

export default class AuthenticationRouter extends CommonRoutesConfig {
  constructor(app: express.Application, router: express.Router, baseApiPath: string) {
    super(app, router, baseApiPath, '/authentication', 'UsersRoutes');
  }

  configureRoutes() {
    this.router.get('/sign-up', middleware.signUpValidation, handlerException(controller.signUp, true));

    this.router.get('/test', controller.test);

    this.app.use(this.buildPath(), this.router);

    return this.router;
  }
}
