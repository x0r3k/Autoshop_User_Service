import express from 'express';

export default abstract class CommonRoutesConfig {
    app: express.Application;

    router: express.Router;

    baseApiPath: string;

    baseRouterPath: string;

    name: string;

    constructor(app: express.Application, router: express.Router, baseApiPath: string, baseRouterPath: string, name: string) {
      this.app = app;
      this.router = router;
      this.baseApiPath = baseApiPath;
      this.baseRouterPath = baseRouterPath;
      this.name = name;
      this.configureRoutes(); // define routes from extended classes by initialization
    }

    buildPath() {
      return `${this.baseApiPath}${this.baseRouterPath}`;
    }

    getName() {
      return this.name;
    }

    abstract configureRoutes(): express.Router;
}
