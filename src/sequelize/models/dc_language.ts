/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IDCLanguageAttributes {
  languageId: number;
  langName: string;
  langCd: string;
  langLocalName: string;
}

export function dcLanguageFactory(sequelize: Sequelize) {
  class DC_LanguageModel extends Model<IDCLanguageAttributes> implements IDCLanguageAttributes {
    languageId: number;

    langName: string;

    langCd: string;

    langLocalName: string;

    static associate(models: any) {
      DC_LanguageModel.hasMany(models.ctCustomer, { foreignKey: { name: 'languageId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  DC_LanguageModel.init({
    languageId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'language_id',
    },
    langName: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'lang_name',
    },
    langCd: {
      type: DataTypes.STRING(3),
      allowNull: false,
      field: 'lang_cd',
    },
    langLocalName: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'lang_local_name',
      defaultValue: null,
    },
  }, {
    sequelize,
    modelName: 'dcLanguage',
    tableName: 'dc_language',
    freezeTableName: true,
  });

  return DC_LanguageModel;
}
