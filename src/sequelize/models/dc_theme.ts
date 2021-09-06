/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IDCThemeAttributes {
  themeId: number;
  themeName: string;
}

export function dcThemeFactory(sequelize: Sequelize) {
  class DC_ThemeModel extends Model<IDCThemeAttributes> implements IDCThemeAttributes {
    themeId: number;

    themeName: string;

    static associate(models: any) {
      DC_ThemeModel.hasMany(models.ctCustomer, { foreignKey: { name: 'themeId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  DC_ThemeModel.init({
    themeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'theme_id',
    },
    themeName: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'theme_name',
    },
  }, {
    sequelize,
    modelName: 'dcTheme',
    tableName: 'dc_theme',
    freezeTableName: true,
  });

  return DC_ThemeModel;
}
