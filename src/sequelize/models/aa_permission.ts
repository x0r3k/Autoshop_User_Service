/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IAAPermissionAttributes {
  permissionId: number;
  permissionCd: string;
  permissionName: string;
  note: string;
}

export function aaPermissionFactory(sequelize: Sequelize) {
  class AA_PermissionModel extends Model<IAAPermissionAttributes> implements IAAPermissionAttributes {
    permissionId!: number;

    permissionCd!: string;

    permissionName!: string;

    note!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      AA_PermissionModel.hasMany(models.aaRolePermission, { foreignKey: { name: 'permissionId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  AA_PermissionModel.init({
    permissionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'permission_id',
    },
    permissionCd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'permission_cd',
    },
    permissionName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'permission_name',
    },
    note: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      field: 'note',
    },
  }, {
    sequelize,
    modelName: 'aaPermission',
    tableName: 'aa_permission',
    freezeTableName: true,
  });

  return AA_PermissionModel;
}
