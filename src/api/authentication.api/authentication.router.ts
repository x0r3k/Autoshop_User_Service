import express from 'express';
import controller from './authentication.controller';
import middleware from './authentication.middleware';
import CommonRoutesConfig from '../../common/common.routes.config';

export default class AuthenticationRouter extends CommonRoutesConfig {
  constructor(app: express.Application, router: express.Router, baseApiPath: string) {
    super(app, router, baseApiPath, '/authentication', 'UsersRoutes');
  }

  configureRoutes() {
    this.router.get('/sign-up', middleware.signUpValidation, controller.signUp);

    this.router.get('/test', controller.test);

    this.app.use(this.buildPath(), this.router);

    return this.router;
  }
}
