import express from 'express';
import cors from 'cors';
import http from 'http';
import config from './config/serviceConfig';

require('dotenv').config();

// const { errorHandling } = require('./common/errorHandling');

// const agent = new http.Agent({
//   keepAlive: true,
// });
export const app = express();
export const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const baseApiUrl = config[process.env.NODE_ENV].baseApiUrl || '/api';
// const staticPath = './static';

// app.use(baseUrl, express.static(path.join(__dirname, uploadFilesPath)));
// app.use(baseUrl, express.static(path.join(__dirname, adminUiStaticPath)));
// app.use(baseApiUrl, paramsValidation, ...routers.public, ...routers.mixed);
// app.use(baseApiUrl, authMiddleware, checkIsUserBlocked, paramsValidation, ...routers.private);

app.get(baseApiUrl, (req, res) => {
  res.send('Hello world');
});

app.use('*', (req, res) => {
  res.status(404).send('Page not found');
});

// app.use(errorHandling);

module.exports = {
  app,
  httpServer,
};
