/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface ICTCustomerSettingsAttributes {
  customerSettingsId: number;
  city: string;
  languageId: number;
  themeId: number;
  currencyId: number;
}

export function ctCustomerSettingsFactory(sequelize: Sequelize) {
  class CT_CustomerSettingsModel extends Model<ICTCustomerSettingsAttributes> implements ICTCustomerSettingsAttributes {
    customerSettingsId: number;

    city: string;

    languageId: number;

    themeId: number;

    currencyId: number;

    static associate(models: any) {
      CT_CustomerSettingsModel.hasOne(models.ctCustomer, { foreignKey: { name: 'customerSettingsId', allowNull: false }, foreignKeyConstraint: true });

      CT_CustomerSettingsModel.belongsTo(models.dcLanguage, { foreignKey: { name: 'languageId', allowNull: false }, foreignKeyConstraint: true });
      CT_CustomerSettingsModel.belongsTo(models.dcTheme, { foreignKey: { name: 'themeId', allowNull: false }, foreignKeyConstraint: true });
      CT_CustomerSettingsModel.belongsTo(models.dcCurrency, { foreignKey: { name: 'currencyId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  CT_CustomerSettingsModel.init({
    customerSettingsId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'customer_settings_id',
    },
    city: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'city',
    },
    languageId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'language_id',
    },
    themeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      field: 'theme_id',
      defaultValue: null,
    },
    currencyId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'currency_id',
    },
  }, {
    sequelize,
    modelName: 'ctCustomerSettings',
    tableName: 'ct_customer_settings',
    freezeTableName: true,
  });

  return CT_CustomerSettingsModel;
}
