import { IServiceConfig } from './config.interface';

const config: IServiceConfig = {
  development: {
    port: '6001',
    baseApiPath: '/api',
    basePath: '',
  },
  production: {
    port: '6002',
    baseApiPath: '/api',
    basePath: '',
  },
  qa: {
    port: '6003',
    baseApiPath: '/api',
    basePath: '',
  },
};

export default config;
