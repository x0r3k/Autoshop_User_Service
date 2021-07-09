import path from 'path';
import { Model, Sequelize } from 'sequelize';
import { testFactory } from './test';

const configFile = require('../config/config.json');

// eslint-disable-next-line import/no-dynamic-require

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const dbConfig = configFile[env];

let sequelize;
if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig);
} else {
  sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

const db = {
  sequelize,
  Sequelize,
  Test: testFactory(sequelize),
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
