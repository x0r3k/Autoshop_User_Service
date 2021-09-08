/* eslint-disable no-new */
import express from 'express';
import cors from 'cors';
import http from 'http';
import helmet from 'helmet';
import config from './config/serviceConfig';
import {
  errorHandler, httpErrorHandler, createHttpError, MAIN_ERROR_CODES,
} from './services/errorHandling';
import Routers from './api';

require('dotenv').config();

// server creation
export const app = express();
export const httpServer = http.createServer(app);

// initial server configurations
app.set('trust proxy', true);
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const baseApiPath = config[process.env.NODE_ENV].baseApiPath || '/api';

// routes initialization
const router = express.Router();
new Routers.AuthenticationRouter(app, router, baseApiPath);

// default router
app.get(baseApiPath, (req, res) => {
  res.send('Hello world');
});

// 404 routes handler
app.use('*', (req, res, next) => next(createHttpError(MAIN_ERROR_CODES.NOT_FOUND)));

// controller error handler
app.use(httpErrorHandler);

// rest of errors handler
app.use(errorHandler);
