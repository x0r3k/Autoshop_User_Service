import { Options } from 'sequelize';

export type TConfig = {
  [key: string]: Options
}

const config: TConfig = {
  development: {
    username: 'root',
    password: '0000',
    database: 'autoshop_ts',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
  test: {
    username: 'root',
    password: '0000',
    database: 'autoshop_ts',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
  production: {
    username: 'root',
    password: '0000',
    database: 'autoshop_ts',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
};

export default config;
