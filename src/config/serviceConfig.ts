import { IServiceConfig } from './config.interface';

const config: IServiceConfig = {
  development: {
    port: '6001',
    baseApiUrl: '/api',
    baseUrl: '',
  },
  production: {
    port: '6002',
    baseApiUrl: '/api',
    baseUrl: '',
  },
  qa: {
    port: '6003',
    baseApiUrl: '/api',
    baseUrl: '',
  },
};

export default config;
