/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IDCCurrencyAttributes {
  currencyId: number;
  currencyCd: string;
  currencyName: string;
  currencyLocalCd: string;
  currencyLocalName: string;
}

export function dcCurrencyFactory(sequelize: Sequelize) {
  class DC_CurrencyModel extends Model<IDCCurrencyAttributes> implements IDCCurrencyAttributes {
    currencyId: number;

    currencyCd: string;

    currencyName: string;

    currencyLocalCd: string;

    currencyLocalName: string;

    static associate(models: any) {
      DC_CurrencyModel.hasMany(models.ctCustomer, { foreignKey: { name: 'currencyId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  DC_CurrencyModel.init({
    currencyId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'currency_id',
    },
    currencyCd: {
      type: DataTypes.STRING(3),
      allowNull: false,
      field: 'currency_cd',
    },
    currencyName: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'currency_name',
    },
    currencyLocalCd: {
      type: DataTypes.STRING(3),
      allowNull: false,
      field: 'currency_local_cd',
    },
    currencyLocalName: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'currency_local_name',
    },

  }, {
    sequelize,
    modelName: 'dcCurrency',
    tableName: 'dc_currency',
    freezeTableName: true,
  });

  return DC_CurrencyModel;
}
