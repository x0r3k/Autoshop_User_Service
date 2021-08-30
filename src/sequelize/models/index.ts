// import path from 'path';
import { Sequelize } from 'sequelize';
import { aaPermissionFactory } from './aa_permission';
import { aaProfileFactory } from './aa_profile';
import { aaPswdHistFactory } from './aa_pswd_hist';
import { aaRolePermissionFactory } from './aa_role_permission';
import { aaRoleFactory } from './aa_role';
import { aaSessionFactory } from './aa_session';
import { aaUserFactory } from './aa_user';

import configFile from '../config/config';

// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const dbConfig = configFile[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

const db = {
  sequelize,
  Sequelize,
  aaPermission: aaPermissionFactory(sequelize),
  aaProfile: aaProfileFactory(sequelize),
  aaPswdHist: aaPswdHistFactory(sequelize),
  aaRolePermission: aaRolePermissionFactory(sequelize),
  aaRole: aaRoleFactory(sequelize),
  aaSession: aaSessionFactory(sequelize),
  aaUser: aaUserFactory(sequelize),
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
