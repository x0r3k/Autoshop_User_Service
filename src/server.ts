import express from 'express';
import cors from 'cors';
import http from 'http';
import helmet from 'helmet';
import config from './config/serviceConfig';
import {
  errorHandler, httpErrorHandler, createHttpError, MAIN_ERROR_CODES,
} from './services/errorHandling';
// import errorHandler from './services/errorHandling/errorHandler';

require('dotenv').config();

export const app = express();
export const httpServer = http.createServer(app);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const baseApiUrl = config[process.env.NODE_ENV].baseApiUrl || '/api';

app.get(baseApiUrl, (req, res) => {
  res.send('Hello world');
});

app.use('*', (req, res, next) => next(createHttpError(MAIN_ERROR_CODES.NOT_FOUND)));
// next(new Error('test')),
// res.status(404).send('Page not found');

app.use(httpErrorHandler);

app.use(errorHandler);
