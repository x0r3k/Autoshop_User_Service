/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IAAProfileAttributes {
  profileId: number;
  profileCd: string;
  pswdLifeTime: number;
  pswdGraceTime: number;
  pswdReuseMax: number;
  loginAttemptMax: number;
  pswdLockTime: number;
  pswdLenMin: number;
  pswdAlphanum: boolean;
  pswdCase: boolean;
  pswdHistUnique: number
}

export function aaProfileFactory(sequelize: Sequelize) {
  class AA_ProfileModel extends Model<IAAProfileAttributes> implements IAAProfileAttributes {
    profileId: number;

    profileCd: string;

    pswdLifeTime: number;

    pswdGraceTime: number;

    pswdReuseMax: number;

    loginAttemptMax: number;

    pswdLockTime: number;

    pswdLenMin: number;

    pswdAlphanum: boolean;

    pswdCase: boolean;

    pswdHistUnique: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      AA_ProfileModel.hasMany(models.aaUser, { foreignKey: { name: 'profileId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  AA_ProfileModel.init({
    profileId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'profile_id',
    },
    profileCd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'profile_cd',
    },
    pswdLifeTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'pswd_life_time',
    },
    pswdGraceTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'pswd_grace_time',
    },
    pswdReuseMax: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'pswd_reuse_max',
    },
    loginAttemptMax: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'login_attempt_max',
    },
    pswdLockTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'pswd_lock_time',
    },
    pswdLenMin: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'pswd_len_min',
    },
    pswdAlphanum: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'pswd_alphanum',
    },
    pswdCase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'pswd_case',
    },
    pswdHistUnique: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'pswd_hist_unique',
    },
  }, {
    sequelize,
    modelName: 'aaProfile',
    tableName: 'aa_profile',
    freezeTableName: true,
  });

  return AA_ProfileModel;
}
