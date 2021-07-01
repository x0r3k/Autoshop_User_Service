import config from './config/serviceConfig';
import { httpServer } from './server';

require('dotenv').config();

const HTTP_PORT = config[process.env.NODE_ENV].port || 6060;
try {
  httpServer.listen(HTTP_PORT, async () => {
    console.log(`Listening on port ${HTTP_PORT} \n NODE ENV ${process.env.NODE_ENV}`);
  });
} catch (error) {
  console.error(`date: ${new Date()}\n`, error, '\n');
  httpServer.close();
}
