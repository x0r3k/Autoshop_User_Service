/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IAAUserAttributes {
  userId: number;
  profileId: number;
  roleId: number;
  username: string;
  userType: string;
  password: string;
  email: string;
  name: string;
  createdDt: number;
  lastLoginDt: number;
  state: string;
  authType: string;
  lastPswdDt:number;
  expirationDt: number;
  lockedDt: number;
  loginAttempt: number;
}

export function aaUserFactory(sequelize: Sequelize) {
  class AA_UserModel extends Model<IAAUserAttributes> implements IAAUserAttributes {
    userId: number;

    profileId: number;

    roleId: number;

    username: string;

    userType: string;

    password: string;

    email: string;

    name: string;

    createdDt: number;

    lastLoginDt: number;

    state: string;

    authType: string;

    lastPswdDt:number;

    expirationDt: number;

    lockedDt: number;

    loginAttempt: number;

    static associate(models: any) {
      AA_UserModel.hasMany(models.aaPswdHist, { foreignKey: { name: 'userId', allowNull: false }, foreignKeyConstraint: true });
      AA_UserModel.hasMany(models.aaSession, { foreignKey: { name: 'userId', allowNull: false }, foreignKeyConstraint: true });

      AA_UserModel.belongsTo(models.aaRole, { foreignKey: { name: 'roleId', allowNull: false }, foreignKeyConstraint: true });
      AA_UserModel.belongsTo(models.aaProfile, { foreignKey: { name: 'profileId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  AA_UserModel.init({
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'user_id',
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'profile_id',
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'profile_id',
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'username',
    },
    userType: {
      type: DataTypes.ENUM('I', 'E', 'S'),
      allowNull: false,
      field: 'user_type',
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'password',
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'email',
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'name',
    },
    createdDt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'created_dt',
    },
    lastLoginDt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'last_login_dt',
    },
    state: {
      type: DataTypes.ENUM('E', 'D', 'L'),
      allowNull: false,
      field: 'state',
    },
    authType: {
      type: DataTypes.ENUM('I', 'E'),
      allowNull: false,
      field: 'auth_type',
    },
    lastPswdDt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'last_pswd_dt',
    },
    expirationDt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'expiration_dt',
    },
    lockedDt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'locked_dt',
    },
    loginAttempt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'login_attempt',
    },
  }, {
    sequelize,
    modelName: 'aaUser',
    tableName: 'aa_user',
    freezeTableName: true,
  });

  return AA_UserModel;
}
