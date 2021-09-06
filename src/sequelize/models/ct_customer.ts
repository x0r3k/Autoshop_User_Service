/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface ICTCustomerAttributes {
  customerId: number;
  userId: number;
  name: string;
  lastname: string;
  fullname: string;
  gender: string;
  birthdate: string;
  countryName: string;
  countryCd: number;
  regionName: number;
  regionCd: string;
  city: string;
  timezone: string;
  currency: string;
  customerSettingsId: number;
}

export function ctCustomerFactory(sequelize: Sequelize) {
  class CT_CustomerModel extends Model<ICTCustomerAttributes> implements ICTCustomerAttributes {
    customerId: number;

    userId: number;

    name: string;

    lastname: string;

    fullname: string;

    gender: string;

    birthdate: string;

    countryName: string;

    countryCd: number;

    regionName: number;

    regionCd: string;

    city: string;

    timezone: string;

    currency: string;

    customerSettingsId: number;

    static associate(models: any) {
      CT_CustomerModel.belongsTo(models.ctCustomerSettings, { foreignKey: { name: 'customerSettingsId', allowNull: false }, foreignKeyConstraint: true });
      CT_CustomerModel.belongsTo(models.aaUser, { foreignKey: { name: 'userId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  CT_CustomerModel.init({
    customerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'customer_id',
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'user_id',
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'name',
    },
    lastname: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'lastname',
      defaultValue: null,
    },
    fullname: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'fullname',
    },
    gender: {
      type: DataTypes.ENUM('M', 'F', 'NB'),
      allowNull: false,
      field: 'gender',
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'birthdate',
      defaultValue: null,
    },
    countryName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'country_name',
      defaultValue: null,
    },
    countryCd: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'country_cd',
      defaultValue: null,
    },
    regionName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'region_name',
      defaultValue: null,
    },
    regionCd: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'region_cd',
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'city',
      defaultValue: null,
    },
    timezone: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'timezone',
      defaultValue: null,
    },
    currency: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'currency',
      defaultValue: null,
    },
    customerSettingsId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'customer_settings_id',
    },
  }, {
    sequelize,
    modelName: 'ctCustomer',
    tableName: 'ct_customer',
    freezeTableName: true,
  });

  return CT_CustomerModel;
}
