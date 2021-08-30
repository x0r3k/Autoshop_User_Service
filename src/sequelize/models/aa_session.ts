/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IAASessionAttributes {
  sessionId: number;
  fingerprint: string;
  refreshToken: string;
  expiresIn: number;
  createdDt: number;
  updatedDt: number;
  userId: number;
}

export function aaSessionFactory(sequelize: Sequelize) {
  class AA_SessionModel extends Model<IAASessionAttributes> implements IAASessionAttributes {
    sessionId: number;

    fingerprint: string;

    refreshToken: string;

    expiresIn: number;

    createdDt: number;

    updatedDt: number;

    userId: number;

    static associate(models: any) {
      AA_SessionModel.belongsTo(models.aaUser, { foreignKey: { name: 'userId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  AA_SessionModel.init({
    sessionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'session_id',
    },
    fingerprint: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'fingerprint',
    },
    refreshToken: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      field: 'refreshToken',
    },
    expiresIn: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'expires_in',
    },
    createdDt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'created_dt',
    },
    updatedDt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'updated_dt',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
  }, {
    sequelize,
    modelName: 'aaSession',
    tableName: 'aa_session',
    freezeTableName: true,
  });

  return AA_SessionModel;
}
