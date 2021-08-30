/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IAAPswdHistAttributes {
  pswdHistId: number;
  password: string;
  createdDt: number;
  userId: number;
}

export function aaPswdHistFactory(sequelize: Sequelize) {
  class AA_PswdHistModel extends Model<IAAPswdHistAttributes> implements IAAPswdHistAttributes {
    pswdHistId: number;

    password: string;

    createdDt: number;

    userId: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      AA_PswdHistModel.belongsTo(models.aaUser, { foreignKey: { name: 'userId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  AA_PswdHistModel.init({
    pswdHistId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'pswd_hist_id',
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'password',
    },
    createdDt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'created_dt',
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_id',
    },
  }, {
    sequelize,
    modelName: 'aaPswdHist',
    tableName: 'aa_pswd_hist',
    freezeTableName: true,
  });

  return AA_PswdHistModel;
}
